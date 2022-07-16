const getPageXY = ele => {
  let sumTop = 0,
    sumLeft = 0;
  while (ele.offsetParent) {
    sumTop += ele.offsetTop;
    sumLeft += ele.offsetLeft;
    ele = ele.offsetParent;
  }
  return [sumLeft, sumTop];
};

const getOffsetEle = (lowEle, heightEle = document.body) => {
  const [lowX, lowY] = getPageXY(lowEle);
  const [hX, hY] = getPageXY(heightEle);
  return [lowX - hX, lowY - hY];
};

function eleCanScroll(ele, direction = 'y') {
  if (!(ele instanceof HTMLElement)) {
    console.error("eleCanScroll(ele:HTMLElement,direction:'y'|'x'| undefined)");
    return;
  }
  if (direction === 'y') {
    if (ele.scrollTop > 0) {
      return true;
    } else {
      ele.scrollTop++;
      const top = ele.scrollTop;
      top && (ele.scrollTop = 0);
      return top > 0;
    }
  } else if (direction === 'x') {
    if (ele.scrollLeft > 0) {
      return true;
    } else {
      ele.scrollLeft++;
      const left = ele.scrollLeft;
      left && (ele.scrollLeft = 0);
      return left > 0;
    }
  }
}

const findScrollEle = (ele, direction = 'y') => {
  if (!ele) {
    return null;
  }
  if (eleCanScroll(ele, direction)) {
    return ele;
  }
  return findScrollEle(ele.parentElement, direction);
};

export { findScrollEle, eleCanScroll, getPageXY, getOffsetEle };
