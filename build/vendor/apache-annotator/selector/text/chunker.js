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
/**
 * Test two {@link Chunk}s for equality.
 *
 * Equality here means that both represent the same piece of text (i.e. at the
 * same position) in the file. It compares using the custom {@link Chunk.equals}
 * method if either chunk defines one, and falls back to checking the objects’
 * identity (i.e. `chunk1 === chunk2`).
 *
 * @public
 */
export function chunkEquals(chunk1, chunk2) {
    if (chunk1.equals)
        return chunk1.equals(chunk2);
    if (chunk2.equals)
        return chunk2.equals(chunk1);
    return chunk1 === chunk2;
}
/**
 * Test two {@link ChunkRange}s for equality.
 *
 * Equality here means equality of each of their four properties (i.e.
 * {@link startChunk}, {@link startIndex},
 * {@link endChunk}, and {@link endIndex}).
 * For the `startChunk`s and `endChunk`s, this function uses the custom
 * {@link Chunk.equals} method if defined.
 *
 * Note that if the start/end of one range points at the end of a chunk, and the
 * other to the start of a subsequent chunk, they are not considered equal, even
 * though semantically they may be representing the same range of characters. To
 * test for such semantic equivalence, ensure that both inputs are normalised:
 * typically this means the range is shrunk to its narrowest equivalent, and (if
 * it is empty) positioned at its first equivalent.
 *
 * @public
 */
export function chunkRangeEquals(range1, range2) {
    return (chunkEquals(range1.startChunk, range2.startChunk) &&
        chunkEquals(range1.endChunk, range2.endChunk) &&
        range1.startIndex === range2.startIndex &&
        range1.endIndex === range2.endIndex);
}
