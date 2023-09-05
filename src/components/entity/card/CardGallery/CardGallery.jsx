import React, { useState } from "react";
import noimage from "../../../../../public/noimage.png";
import styles from "./CardGallery.module.scss";
import Image from "next/image";
import { createStyles } from "@mantine/core";

const CardGalleryStyles = createStyles((theme) => ({
  container: {
    backgroundColor: "#f5f3f3",
    overflow: "hidden",
    paddingTop: "100%",
    position: "relative",
    width: "100%",
    height: "100%",
  },
  slides: {
    bottom: "0",
    left: "0",
    position: "absolute",
    right: "0",
    top: "0",
    display: "block",
  },
  slide: {
    bottom: "0",
    display: "block",
    left: "0",
    position: "absolute",
    right: "0",
    top: "0",
  },
  pointers: {
    bottom: "4px",
    display: "flex",
    flexDirection: "row",
    gap: "2px",
    left: "4px",
    opacity: 1,
    position: "absolute",
    right: "4px",
    transition: "opacity .3s linear,visibility .3s linear",
  },
  pointer: {
    background: theme.colors.brand[2],
    borderRadius: "1px",
    flexGrow: 1,
    flexShrink: 1,
    height: "2px",
    opacity: 0.4,
    width: "100%",
  },
  pointer__active: {
    background: theme.colors.brand[7],
    borderRadius: "1px",
    flexGrow: 1,
    flexShrink: 1,
    height: "2px",
    width: "100%",
    opacity: 1,
  },
  tabs: {
    bottom: "0",
    display: ["block", "flex"],
    left: "0",
    position: "absolute",
    right: "0",
    top: "0",
    flexDirection: "row",
  },
  tab: {
    flexGrow: 1,
    flexShrink: 1,
    height: "100%",
    position: "relative",
    width: "100%",
  },
}));

const CardGallery = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { classes, theme, cx } = CardGalleryStyles(undefined, undefined);
  return (
    <div className={classes.container}>
      <div className={classes.slides}>
        {images.length ? (
          <>
            {images.map((item, index) => (
              <div
                className={classes.slide}
                key={index}
                style={{ display: activeSlide === index ? "block" : "none" }}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE}/${item?.path}`}
                  alt="Изображение"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </>
        ) : (
          <>
            <Image
              src={noimage}
              alt="Изображение"
              fill
              style={{
                objectFit: "cover",
                // filter: `brightness(${100 - 10 * index}%)`,
              }}
            />
          </>
        )}
      </div>
      {images.length && (
        <>
          <div className={classes.pointers}>
            {images.map((item, index) => (
              <div
                className={cx(classes.pointer, {
                  [classes.pointer__active]: index === activeSlide,
                })}
                key={index}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>

          <div className={classes.tabs}>
            {images.map((item, index) => (
              <div
                className={classes.tab}
                key={index}
                onMouseEnter={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardGallery;
