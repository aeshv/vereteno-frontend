import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "./HatFilter.module.scss";
import PriceRange from "@/components/features/filters/PriceRange/PriceRange";
import { RangeSlider, Slider, Switch } from "@mantine/core";
import { GenderRadio } from "@/components/features/filters/GenderRadio/GenderRadio";
import { ColorSelect } from "@/components/features/filters/ColorSelect/ColorSelect";
import { MaterialSelect } from "@/components/features/filters/MaterialSelect/MaterialSelect";
import { SizeRadio } from "@/components/features/filters/SizeRadio/SizeRadio";

const HatFilter = ({ onSubmit }) => (
  <div className={styles.container}>
    <Formik
      initialValues={{
        priceMin: "",
        priceMax: "",
        forWhom: "",
        colors: [],
        materials: [],
        sizes: [],
      }}
      onSubmit={onSubmit}
    >
      {(formikProps) => (
        <Form
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
            <h2 className={styles.block__title}>Для кого</h2>
            <GenderRadio title={"Для Мужчин"} description={"Всех возрастов"} />
            <GenderRadio title={"Для Женщин"} description={"Всех возрастов"} />
            <GenderRadio title={"Унисекс"} description={"Всех возрастов"} />
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
          <button type="submit" className={styles.submit}>
            Применить
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default HatFilter;
