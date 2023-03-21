import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import animationStyle from "./CatalogMenuAnimations.module.scss";
import styles from "./CatalogMenuStyles.module.scss";

const CatalogMenu = () => {
  const [showMenu, setShowMenu] = useState(true);
  const nodeRef = useRef(null);

  const menuItems = [
    { label: "Menu Item 1", url: "/menu-item-1" },
    { label: "Menu Item 2", url: "/menu-item-2" },
    { label: "Menu Item 3", url: "/menu-item-3" },
  ];
  const contentAnimation = {
    enter: animationStyle.menuContainerEnterActive,
    enterActive: animationStyle.menuContainerEnterDone,
    exit: animationStyle.menuContainerExitActive,
    exitActive: animationStyle.menuContainerExitDone,
  };

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={showMenu}
        timeout={300}
        classNames={contentAnimation}
      >
      <div
        ref={nodeRef}
        className={styles.container}
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <div className={styles.content}>
          <div className={`${styles.col} ${styles.col_main}`}>
            {menuItems.map((menuItem) => (
              <a key={menuItem.url} href={menuItem.url}>
                {menuItem.label}
              </a>
            ))}
          </div>
          <div className={[styles.col]}>
            {menuItems.map((menuItem) => (
              <a key={menuItem.url} href={menuItem.url}>
                {menuItem.label}
              </a>
            ))}
          </div>
          <div className={[styles.col]}>
            {menuItems.map((menuItem) => (
              <a key={menuItem.url} href={menuItem.url}>
                {menuItem.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      </CSSTransition>
    </>
  );
};

export default CatalogMenu;
