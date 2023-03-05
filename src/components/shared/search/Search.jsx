import React from "react";
import { SlMagnifier } from "react-icons/sl";
import styles from "./Search.module.scss";

const Search = () => {
  const options = [
    { label: "Везде 🍇", value: "grapes" },
    { label: "Женские 🥭", value: "mango" },
    { label: "Мужские 🍓", value: "strawberry", disabled: true },
    { label: "Десткие 🍓", value: "strawberry", disabled: false },
  ];

  const translate = {
    allItemsAreSelected: "Все элементы выбраны.",
    clearSearch: "Очистить поиск",
    clearSelected: "Очистить выбранное",
    noOptions: "Нет опций",
    search: "Поиск",
    selectAll: "Выбрать все",
    selectAllFiltered: "Выбрать все (отфильтрованное)",
    selectSomeItems: "Выбрать...",
    create: "Создать",
  };

  const [selected, setSelected] = React.useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.searchinput}>
        <input type="text" />
      </div>
      <div className={styles.submit}>
        <SlMagnifier color={"white"} />
      </div>
    </div>
  );
};

export default Search;
