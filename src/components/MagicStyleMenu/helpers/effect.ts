import { getXPath } from './xpath';
import { useEffect } from 'react';

export interface ReplaceEffect {
  xpath: string;
  insertID: string;
  html: string;
  text: string;
}

const mountEffectList = [];
const unmountEffectList = [];

const getReplaceEffect = (
  ele: HTMLElement,
  id: string,
  html: string,
  text: string
): ReplaceEffect => ({
  xpath: getXPath(ele),
  insertID: id,
  html,
  text,
});
const getElementByEffect = (effect: ReplaceEffect) =>
  document.evaluate(effect.xpath, document).iterateNext() as HTMLElement;

const effectReplace = (effect: ReplaceEffect) => {
  const baseNode = getElementByEffect(effect);
  baseNode.parentElement.outerHTML = effect.html;
};
const effectReback = (effect: ReplaceEffect) => {
  const parentElement = document.getElementById(effect.insertID);
  parentElement.innerHTML = effect.text;
};

const mountEffect = (
  baseNode: HTMLElement,
  id: string,
  html: string,
  text: string
) => {
  const effect = getReplaceEffect(baseNode, id, html, text);
  mountEffectList.push(effect);
};

const useReplaceEffect = () => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { key, ctrlKey, metaKey, shiftKey } = e;
      const ControlKey = metaKey || ctrlKey;
      if (!['z'].includes(key) || !ControlKey) {
        return;
      }
      if (!shiftKey) {
        if (mountEffectList.length === 0) return;
        const effect = mountEffectList.pop();
        unmountEffectList.push(effect);
        effectReback(effect);
      } else {
        if (unmountEffectList.length === 0) return;
        const effect = unmountEffectList.pop();
        mountEffectList.push(effect);
        effectReplace(effect);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return [mountEffectList, unmountEffectList];
};

export {
  getReplaceEffect,
  getElementByEffect,
  mountEffect,
  effectReplace,
  effectReback,
  useReplaceEffect,
};
