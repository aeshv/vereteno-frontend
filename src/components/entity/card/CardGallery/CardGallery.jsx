import React, { useState } from "react";
import noimage from "../../../../../public/noimage.png";
import styles from "./CardGallery.module.scss";
import Image from "next/image";

const CardGallery = ({ images }) => {
    const [activeSlide, setActiveSlide] = useState(0)

  return (
    <div className={styles.container}>


      <div className={styles.slides}>
        {images.map((item, index) => (
          <div className={styles.slide} key={index} style={{display: activeSlide === index ? 'block' : 'none'}}>
            <Image
              src={item}
              alt="no image"
              fill
              style={{ objectFit: "cover", filter: `brightness(${100 - 10*index}%)`}}
            />
          </div>
        ))}
      </div>


      <div className={styles.pointers}>
        {images.map((item, index) => (
          <div className={styles.pointer} key={index} onClick={()=>setActiveSlide(index)}/>
        ))}
      </div>


      <div className={styles.tabs}>
        {images.map((item, index) => (
          <div className={styles.tab} key={index} onMouseEnter={()=>setActiveSlide(index)}/>
        ))}
      </div>
    </div>
  );
};

export default CardGallery;
