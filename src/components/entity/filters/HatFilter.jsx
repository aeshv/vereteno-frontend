import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "./HatFilter.module.scss";
import PriceRange from "@/components/features/filters/PriceRange/PriceRange";
import { Button, Collapse } from "@mantine/core";
import { GenderRadio } from "@/components/features/filters/GenderRadio/GenderRadio";
import { ColorSelect } from "@/components/features/filters/ColorSelect/ColorSelect";
import { MaterialSelect } from "@/components/features/filters/MaterialSelect/MaterialSelect";
import { SizeRadio } from "@/components/features/filters/SizeRadio/SizeRadio";
import { AttributesSelect } from "@/components/features/filters/AttributesSelect/AttributesSelect";
import { CategorySelect } from "@/components/features/filters/CategorySelect/CategorySelect";
import { useMediaQuery } from "@mantine/hooks";

const HatFilter = ({ onSubmit }) => {
  const [opened, setOpened] = React.useState(false);

  // Используем хук для определения, является ли экран мобильным
  const isMobile = useMediaQuery("(max-width: 768px");

  return (
    <div className={styles.container}>
      {/* Показываем кнопку только на мобильном */}
      {isMobile && (
        <Button
          onClick={() => setOpened((prev) => !prev)}
          variant="outline"
          style={{ marginBottom: "10px" }}
        >
          {opened ? "Скрыть фильтры" : "Показать фильтры"}
        </Button>
      )}

      {/* Всегда показываем фильтры на планшетах и ПК */}
      <Collapse in={isMobile ? opened : true}>
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
            <h2 className={styles.block__title}>Особенности</h2>
            <AttributesSelect />
          </div>
          {/*<button type="submit" className={styles.submit}>*/}
          {/*    Применить*/}
          {/*</button>*/}
        </div>
      </Collapse>
    </div>
  );
};

export default HatFilter;
