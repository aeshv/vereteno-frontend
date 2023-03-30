import Image from "next/image";
import React from "react";
import noimage from "../../../../public/noimage.png";
import styles from "./SingleProduct.module.scss";

const ProductImage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src={noimage}
              alt="Изображение"
              fill
              style={{
                objectFit: "contain",
                // filter: `brightness(${100 - 10 * index}%)`,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductImage;
