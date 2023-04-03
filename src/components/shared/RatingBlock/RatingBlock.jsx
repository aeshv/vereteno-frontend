import React from "react";
import styles from "./RatingBlock.module.scss";
import Image from "next/image";
import noimage from "@/assets/noimage.png";
import { IconStarFilled } from "@tabler/icons-react";

const RatingBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Image src={noimage} alt="Рейтинг Сайта" />
      </div>
      <div className={styles.textblock}>
        <h2 className={styles.title}>Яндекс отзывы</h2>
        <div className={styles.starContainer}>
          <div className={styles.star}>
            <IconStarFilled fill="FFD12E" width={14} height={14} />
          </div>
          <span>4,9</span>
        </div>
      </div>
    </div>
  );
};

export default RatingBlock;
