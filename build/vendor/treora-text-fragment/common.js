export function nextNode(node) {
    const walker = (node.ownerDocument ?? node).createTreeWalker(node.getRootNode());
    walker.currentNode = node;
    return walker.nextNode();
}
export function isElement(node) {
    return node.nodeType === Node.ELEMENT_NODE;
}
