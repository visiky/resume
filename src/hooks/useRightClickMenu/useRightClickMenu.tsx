import React, { useEffect, useState, useRef } from 'react';
import { useAppendRootNode } from '../useAppendRootNode';
import { throttle } from 'lodash-es';

type RightClickMenuInstance = [number, number, (visible: boolean) => void];
export const useRightClickMenu = (
  menu: JSX.Element | (() => JSX.Element),
  target:
    | HTMLElement
    | (() => HTMLElement)
    | React.MutableRefObject<HTMLElement> = document.body
): RightClickMenuInstance => {
  const [contextMenu, setContextMenu] = useState({
    x: 0,
    y: 0,
    visible: true,
  });
  const memoAttr = useRef(null);
  const ref = useRef(null);
  const container = (() => {
    if (!target) return null;
    if (target instanceof Function) {
      return target();
    }
    // @ts-ignore
    if (target.current !== void 0) {
      // @ts-ignore
      return target.current;
    }
    return target;
  })();

  useAppendRootNode(
    'right-click-context-menu',
    <div
      className="absolute"
      ref={ref}
      style={{
        position: 'absolute',
        left: contextMenu.x,
        top: contextMenu.y,
        display: contextMenu.visible ? 'flex' : 'none',
        zIndex: 9999999,
        visibility: memoAttr.current === null ? 'hidden' : 'visible',
      }}
    >
      {menu instanceof Function ? menu() : menu}
    </div>
  );

  useEffect(() => {
    if (!ref.current) return;
    const { clientHeight, clientWidth } = ref.current;
    memoAttr.current = {
      clientHeight,
      clientWidth,
    };
    setContextMenu({
      x: 0,
      y: 0,
      visible: false,
    });
  }, [ref.current]);

  useEffect(() => {
    if (!container) return;
    const handleContextMenuClick = (e: PointerEvent) => {
      e.preventDefault();
      const { pageX, pageY } = e;

      const { clientHeight, clientWidth } = memoAttr.current;
      const {
        scrollHeight: windowHeight,
        scrollWidth: windowWidth,
      } = document.body;

      if (clientHeight > windowHeight || clientWidth > windowWidth) {
        throw new Error('the menu is longer than the browser');
      }

      const x = clientWidth + pageX > windowWidth ? pageX - clientWidth : pageX;

      const y =
        clientHeight + pageY > windowHeight ? pageY - clientHeight : pageY;
      setContextMenu({
        x,
        y,
        visible: true,
      });
    };
    const handleOutsideClick = (
      e: PointerEvent & { path: Array<HTMLElement> }
    ) => {
      if (e.path.includes(ref.current)) {
        return;
      }
      setContextMenu({
        ...contextMenu,
        visible: false,
      });
    };
    const handleThrottleOutSideClick = throttle(handleOutsideClick, 800);

    container.addEventListener('contextmenu', handleContextMenuClick);
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('scroll', handleThrottleOutSideClick);
    window.addEventListener('resize', handleThrottleOutSideClick);

    return () => {
      container.removeEventListener('contextmenu', handleContextMenuClick);
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('scroll', handleThrottleOutSideClick);
      window.removeEventListener('resize', handleThrottleOutSideClick);
    };
  }, [container]);

  return [
    contextMenu.x,
    contextMenu.y,
    visible => {
      setContextMenu({
        ...contextMenu,
        visible,
      });
    },
  ];
};

export default useRightClickMenu;
