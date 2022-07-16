import { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface AppendRootNodeInstance {
  show: () => void;
  destory: () => void;
}

type AppendRootNodeResult = [string, AppendRootNodeInstance];

export const useAppendRootNode = (
  id: string,
  render: () => JSX.Element | null,
  createElement?: () => HTMLElement,
  parent: HTMLElement = document.body
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
    ReactDOM.render(render(), document.getElementById(id));
  }, [render]);
  return [id, { show, destory }];
};

export default useAppendRootNode;
