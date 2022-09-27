import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { isBrowser } from '@/helpers/isBrowser';

interface AppendRootNodeInstance {
  show: () => void;
  destory: () => void;
}

type AppendRootNodeResult = [string, AppendRootNodeInstance];

export const useAppendRootNode = (
  id: string,
  render: (() => JSX.Element) | JSX.Element,
  createElement?: () => HTMLElement,
  parent: HTMLElement = isBrowser() ? document.body : null
): AppendRootNodeResult => {
  const show = () => {
    if (document.getElementById(id)) {
      return;
    }
    const ele = createElement?.() ?? document.createElement('div');
    ele.id = id;
    parent.append(ele);
  };
  const destory = () => {
    const ele = document.getElementById(id);
    if (!ele) return;
    parent.removeChild(ele);
  };

  useEffect(() => {
    show();
    return () => {
      destory();
    };
  }, []);

  useEffect(() => {
    ReactDOM.render(
      render instanceof Function ? render() : render,
      document.getElementById(id)
    );
  }, [render, id]);
  return [id, { show, destory }];
};

export default useAppendRootNode;
