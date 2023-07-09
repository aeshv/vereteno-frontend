import SpecRow from "@/components/shared/SpecRow/SpecRow";
import React, {useContext} from "react";
import styles from "./sectionSpecs.module.scss";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";

const ProductSectionSpecs = () => {
  const specs = [
    {
      title: "Модель",
      value: "fh84",
    },
    {
      title: "Наличие",
      value: "Да",
    },
    {
      title: "Высота",
      value: "10 см",
    },
    {
      title: "Обод",
      value: "Прошитые",
    },
    {
      title: "Материал",
      value: "Фетровые",
    },
    {
      title: "Козырек",
      value: "С регулировкой",
    },
    {
      title: "Подкладка",
      value: "Нет",
    },
    {
      title: "Сезон",
      value: "Круглогодичный",
    },
    {
      title: "Стиль",
      value: "Федора",
    },
    {
      title: "Характеристика фетра",
      value: "Мягкий",
    },
    {
      title: "Цвет",
      value: "Черный",
    },
    {
      title: "Ширина поля",
      value: "4,5 см",
    },
    {
      title: "Материал состав",
      value: "100% шерсть",
    },
  ];
  const {attributes} = useContext(ProductInfoContext)
  return (
    <div className={styles.container}>
      {attributes.map((spec, index) => (
        <SpecRow key={index} {...spec} />
      ))}
    </div>
  );
};

export default ProductSectionSpecs;
