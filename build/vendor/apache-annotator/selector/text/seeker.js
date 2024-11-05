/**
 * @license
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-FileCopyrightText: The Apache Software Foundation
 * SPDX-License-Identifier: Apache-2.0
 */
import { chunkEquals } from './chunker.js';
const E_END = 'Iterator exhausted before seek ended.';
/**
 * A TextSeeker is constructed around a {@link Chunker}, to let it be treated as
 * a continuous sequence of characters.
 *
 * Seeking to a given numeric position will cause a `TextSeeker` to pull chunks
 * from the underlying `Chunker`, counting their lengths until the requested
 * position is reached. `Chunks` are not stored but simply read again when
 * seeking backwards.
 *
 * The `Chunker` is presumed to read an unchanging file. If a chunk’s length
 * would change while seeking, a TextSeeker’s absolute positioning would be
 * incorrect.
 *
 * See {@link CodePointSeeker} for a {@link Seeker} that counts Unicode *code
 * points* instead of Javascript’s ‘normal’ characters.
 *
 * @public
 */
export class TextSeeker {
    chunker;
    // The chunk containing our current text position.
    get currentChunk() {
        return this.chunker.currentChunk;
    }
    // The index of the first character of the current chunk inside the text.
    currentChunkPosition = 0;
    // The position inside the chunk where the last seek ended up.
    offsetInChunk = 0;
    // The current text position (measured in code units)
    get position() {
        return this.currentChunkPosition + this.offsetInChunk;
    }
    constructor(chunker) {
        this.chunker = chunker;
        // Walk to the start of the first non-empty chunk inside the scope.
        this.seekTo(0);
    }
    read(length, roundUp = false, lessIsFine = false) {
        return this._readOrSeekTo(true, this.position + length, roundUp, lessIsFine);
    }
    readTo(target, roundUp = false) {
        return this._readOrSeekTo(true, target, roundUp);
    }
    seekBy(length) {
        this.seekTo(this.position + length);
    }
    seekTo(target) {
        this._readOrSeekTo(false, target);
    }
    seekToChunk(target, offset = 0) {
        this._readOrSeekToChunk(false, target, offset);
    }
    readToChunk(target, offset = 0) {
        return this._readOrSeekToChunk(true, target, offset);
    }
    _readOrSeekToChunk(read, target, offset = 0) {
        const oldPosition = this.position;
        let result = '';
        // Walk to the requested chunk.
        if (!this.chunker.precedesCurrentChunk(target)) {
            // Search forwards.
            while (!chunkEquals(this.currentChunk, target)) {
                const [data, nextChunk] = this._readToNextChunk();
                if (read)
                    result += data;
                if (nextChunk === null)
                    throw new RangeError(E_END);
            }
        }
        else {
            // Search backwards.
            while (!chunkEquals(this.currentChunk, target)) {
                const [data, previousChunk] = this._readToPreviousChunk();
                if (read)
                    result = data + result;
                if (previousChunk === null)
                    throw new RangeError(E_END);
            }
        }
        // Now we know where the chunk is, walk to the requested offset.
        // Note we might have started inside the chunk, and the offset could even
        // point at a position before or after the chunk.
        const targetPosition = this.currentChunkPosition + offset;
        if (!read) {
            this.seekTo(targetPosition);
        }
        else {
            if (targetPosition >= this.position) {
                // Read further until the target.
                result += this.readTo(targetPosition);
            }
            else if (targetPosition >= oldPosition) {
                // We passed by our target position: step back.
                this.seekTo(targetPosition);
                result = result.slice(0, targetPosition - oldPosition);
            }
            else {
                // The target precedes our starting position: read backwards from there.
                this.seekTo(oldPosition);
                result = this.readTo(targetPosition);
            }
            return result;
        }
    }
    _readOrSeekTo(read, target, roundUp = false, lessIsFine = false) {
        let result = '';
        if (this.position <= target) {
            while (true) {
                const endOfChunk = this.currentChunkPosition + this.currentChunk.data.length;
                if (endOfChunk <= target) {
                    // The target is beyond the current chunk.
                    // (we use ≤ not <: if the target is *at* the end of the chunk, possibly
                    // because the current chunk is empty, we prefer to take the next chunk)
                    const [data, nextChunk] = this._readToNextChunk();
                    if (read)
                        result += data;
                    if (nextChunk === null) {
                        if (this.position === target || lessIsFine)
                            break;
                        else
                            throw new RangeError(E_END);
                    }
                }
                else {
                    // The target is within the current chunk.
                    const newOffset = roundUp
                        ? this.currentChunk.data.length
                        : target - this.currentChunkPosition;
                    if (read)
                        result += this.currentChunk.data.substring(this.offsetInChunk, newOffset);
                    this.offsetInChunk = newOffset;
                    // If we finish end at the end of the chunk, seek to the start of the next non-empty node.
                    // (TODO decide: should we keep this guarantee of not finishing at the end of a chunk?)
                    if (roundUp)
                        this.seekBy(0);
                    break;
                }
            }
        }
        else {
            // Similar to the if-block, but moving backward in the text.
            while (this.position > target) {
                if (this.currentChunkPosition <= target) {
                    // The target is within the current chunk.
                    const newOffset = roundUp ? 0 : target - this.currentChunkPosition;
                    if (read)
                        result =
                            this.currentChunk.data.substring(newOffset, this.offsetInChunk) +
                                result;
                    this.offsetInChunk = newOffset;
                    break;
                }
                else {
                    const [data, previousChunk] = this._readToPreviousChunk();
                    if (read)
                        result = data + result;
                    if (previousChunk === null) {
                        if (lessIsFine)
                            break;
                        else
                            throw new RangeError(E_END);
                    }
                }
            }
        }
        if (read)
            return result;
    }
    // Read to the start of the next chunk, if any; otherwise to the end of the current chunk.
    _readToNextChunk() {
        const data = this.currentChunk.data.substring(this.offsetInChunk);
        const chunkLength = this.currentChunk.data.length;
        const nextChunk = this.chunker.nextChunk();
        if (nextChunk !== null) {
            this.currentChunkPosition += chunkLength;
            this.offsetInChunk = 0;
        }
        else {
            this.offsetInChunk = chunkLength;
        }
        return [data, nextChunk];
    }
    // Read backwards to the end of the previous chunk, if any; otherwise to the start of the current chunk.
    _readToPreviousChunk() {
        const data = this.currentChunk.data.substring(0, this.offsetInChunk);
        const previousChunk = this.chunker.previousChunk();
        if (previousChunk !== null) {
            this.currentChunkPosition -= this.currentChunk.data.length;
            this.offsetInChunk = this.currentChunk.data.length;
        }
        else {
            this.offsetInChunk = 0;
        }
        return [data, previousChunk];
    }
}
