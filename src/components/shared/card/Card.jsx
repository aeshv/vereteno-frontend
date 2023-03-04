import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";
import noimage from "../../../../public/noimage.png";
import Label from './../label/Label';


const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.labels}>
          <Label type={'green'}>Новинка</Label>
          <Label type={'red'}>Хит</Label>
          <Label type={'yellow'}>Рассрочка</Label>
        </div>
        <div className={styles.gallery}>
          <Image src={noimage} alt="no image" fill/>
        </div>
      </div>
      <div className={styles.body}></div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default Card;
