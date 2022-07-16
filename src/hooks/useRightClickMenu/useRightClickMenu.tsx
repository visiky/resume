import React, { useEffect, useState, useRef } from 'react';
import { useAppendRootNode } from '../useAppendRootNode';

export const useRightClickMenu = (menu: null | JSX.Element) => {
  const [contextMenu, setContextMenu] = useState({
    x: 0,
    y: 0,
    visible: false,
  });
  const ref = useRef(null);

  useAppendRootNode('right-click-context-menu', () => (
    <div
      className="absolute"
      ref={ref}
      style={{
        position: 'absolute',
        left: contextMenu.x,
        top: contextMenu.y,
        display: contextMenu.visible ? 'flex' : 'none',
      }}
    >
      {menu}
    </div>
  ));
  useEffect(() => {
    const handleContextMenuClick = (e: PointerEvent) => {
      e.preventDefault();
      const { clientX, clientY } = e;

      const { clientHeight, clientWidth } = ref.current;
      const {
        clientHeight: windowHeight,
        clientWidth: windowWidth,
      } = document.body;

      if (clientHeight > windowHeight || clientWidth > windowWidth) {
        throw new Error('the menu is longer than the browser');
      }

      const x =
        clientWidth + clientX > windowWidth ? clientX - clientWidth : clientX;

      const y =
        clientHeight + clientY > windowHeight
          ? clientY - clientHeight
          : clientY;
      setContextMenu({
        x,
        y,
        visible: true,
      });
    };
    const handleOutsideClick = (
      e: PointerEvent & { path: Array<HTMLElement> }
    ) => {
      e.preventDefault();
      if (e.path.includes(ref.current)) {
        return;
      }
      setContextMenu({
        ...contextMenu,
        visible: false,
      });
    };

    document.addEventListener('contextmenu', handleContextMenuClick);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenuClick);
      document.removeEventListener('click', handleOutsideClick);
    };
  });
};

export default useRightClickMenu;
