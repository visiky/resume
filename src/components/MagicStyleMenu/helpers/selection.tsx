import React from 'react';
import { convertHTML } from '@/components/MagicStyleMenu/helpers/convertHTML';
import { renderToString } from 'react-dom/server';
import { mountEffect } from './effect';

export const selectionReplace = (
  baseNode: HTMLElement,
  baseOffset: number,
  text: string,
  render: ((arg0: string) => JSX.Element) | JSX.Element | string
): [string, string] => {
  const id = `selection-replace-${Date.now()}`;

  // debugger;
  const baseText = baseNode.textContent.slice(
    baseOffset,
    baseOffset + text.length
  );
  const baseHTML = baseNode.innerHTML ?? convertHTML(baseText);
  const html = baseNode.parentElement.outerHTML;
  const headLength = html.split(baseHTML).at(0).length;

  let newOuterHTML = null;
  const content = (
    <span id={id}>
      {render instanceof Function ? render(baseText) : render}
    </span>
  );

  const contentHTML = renderToString(content);
  if (headLength === html.length) {
    newOuterHTML = html.replace(baseHTML, contentHTML);
  } else {
    const headHTML = html.slice(0, headLength);
    const tailHTML = html.split(headHTML)[1].replace(baseHTML, contentHTML);
    newOuterHTML = `${headHTML}${tailHTML}`;
  }

  return [id, newOuterHTML];
};

export const handleSelectionReplace = (
  selection: Selection & {
    baseNode: HTMLElement;
    baseOffset: number;
    extentNode: HTMLElement;
    extentOffset: number;
  },
  render: ((arg0: string) => JSX.Element) | JSX.Element | string
) => {
  const { baseNode, extentNode } = selection;
  // if (baseNode !== extentNode) {
  //   console.warn("一次选中多个分片，暂未处理该部分")
  //   return;
  // }
  const [id, html] = selectionReplace(
    baseNode,
    selection.baseOffset,
    selection.toString(),
    render
  );
  // debugger;
  mountEffect(baseNode, id, html, selection.toString());
  baseNode.parentElement.outerHTML = html;
};
