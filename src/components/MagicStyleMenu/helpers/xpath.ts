function getXPath(element) {
  if (element.id) return 'id("' + element.id + '")';
  if (element === document.body) return element.tagName;

  let ix = 0;
  const siblings = element.parentNode.childNodes;
  for (var i = 0; i < siblings.length; i++) {
    const sibling = siblings[i];
    if (sibling === element) {
      if (element.nodeType === Node.TEXT_NODE) {
        return `${getXPath(element.parentNode)}/text()[${ix + 1}]`;
      }
      return `${getXPath(element.parentNode)}/${element.tagName}[${ix + 1}]`;
    }
    if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++;
  }
}

export { getXPath };
