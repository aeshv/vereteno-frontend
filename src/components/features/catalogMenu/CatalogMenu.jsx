import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import animationStyle from "./CatalogMenuAnimations.module.scss";
import styles from "./CatalogMenuStyles.module.scss";
import { useClickOutside } from "@mantine/hooks";
import DefaultButton from "../../shared/buttons/DefaultButton/DefaultButton";
import Link from "next/link";

const CatalogMenu = () => {
  const nodeRef = useRef(null);
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  const menuItems = [
    { label: "Каталог", url: "/products" },
    { label: "О нас", url: "/about" },
    { label: "Личный кабинет", url: "/lk" },
  ];

  const menuItems2 = [
    { label: "Домой", url: "/" },
    { label: "О нас", url: "/about" },
    { label: "Личный кабинет", url: "/lk" },
  ];

  const menuItems3 = [
    { label: "Домой", url: "/" },
    { label: "О нас", url: "/about" },
    { label: "Личный кабинет", url: "/lk" },
  ];
  const contentAnimation = {
    enter: animationStyle.menuContainerEnterActive,
    enterActive: animationStyle.menuContainerEnterDone,
    exit: animationStyle.menuContainerExitActive,
    exitActive: animationStyle.menuContainerExitDone,
  };

  return (
    <>
      <DefaultButton onClick={() => setOpened((prev) => !prev)}>
        Каталог
      </DefaultButton>

      {opened && (
        <CSSTransition
          nodeRef={nodeRef}
          in={opened}
          timeout={300}
          classNames={contentAnimation}
        >
          <div
            ref={nodeRef}
            className={styles.container}
          >
            <div className={styles.content} ref={ref}>
              <div className={`${styles.col} ${styles.col_main}`}>
                {menuItems.map((menuItem) => (
                  <Link key={menuItem.url} href={menuItem.url}>
                    {menuItem.label}
                  </Link>
                ))}
              </div>
              <div className={[styles.col]}>
                {menuItems2.map((menuItem) => (
                  <Link key={menuItem.url} href={menuItem.url}>
                    {menuItem.label}
                  </Link>
                ))}
              </div>
              <div className={[styles.col]}>
                {menuItems3.map((menuItem) => (
                  <Link key={menuItem.url} href={menuItem.url}>
                    {menuItem.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </CSSTransition>
      )}
    </>
  );
};

export default CatalogMenu;
