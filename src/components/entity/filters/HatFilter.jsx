import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "./HatFilter.module.scss";
import PriceRange from "@/components/features/filters/PriceRange/PriceRange";
import { RangeSlider, Slider, Switch } from "@mantine/core";
import { GenderRadio } from "@/components/features/filters/GenderRadio/GenderRadio";
import { ColorSelect } from "@/components/features/filters/ColorSelect/ColorSelect";
import { MaterialSelect } from "@/components/features/filters/MaterialSelect/MaterialSelect";
import { SizeRadio } from "@/components/features/filters/SizeRadio/SizeRadio";
import { AttributesSelect } from "@/components/features/filters/AttributesSelect/AttributesSelect";
import { CategorySelect } from "@/components/features/filters/CategorySelect/CategorySelect";

const HatFilter = ({ onSubmit }) => (
  <div className={styles.container}>
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "flex-start",
      }}
    >
      <div className={styles.block}>
        <h2 className={styles.block__title}>Цена</h2>
        <PriceRange />
      </div>
      <div className={styles.block}>
        <h2 className={styles.block__title}>Категории</h2>
        <CategorySelect />
      </div>
      <div className={styles.block}>
        <h2 className={styles.block__title}>Цвет</h2>
        <ColorSelect />
      </div>
      <div className={styles.block}>
        <h2 className={styles.block__title}>Материал</h2>
        <MaterialSelect />
      </div>
      <div className={styles.block}>
        <h2 className={styles.block__title}>Размеры</h2>
        <SizeRadio />
      </div>
      <div className={styles.block}>
        <h2 className={styles.block__title}>Особености</h2>
        <AttributesSelect />
      </div>
      {/*<button type="submit" className={styles.submit}>*/}
      {/*    Применить*/}
      {/*</button>*/}
    </div>
  </div>
);

export default HatFilter;
