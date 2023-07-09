import Image from "next/image";
import React, {useContext} from "react";
import noimage from "../../../../public/noimage.png";
import styles from "./SingleProduct.module.scss";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";

const ProductImage = () => {
  // NEXT_PUBLIC_IMAGE
  const { images } = useContext(ProductInfoContext)
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE}${images[0]?.path}`}
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
