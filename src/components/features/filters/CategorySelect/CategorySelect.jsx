import {
  UnstyledButton,
  Checkbox,
  Text,
  Image,
  SimpleGrid,
  createStyles,
  rem,
  MultiSelect,
  Loader,
} from "@mantine/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelectStyles } from "@/components/features/filters/MaterialSelect/MaterialSelect";
import { useCategories } from "@/utils/hooks/useCategories";

export function CategorySelect() {
  const router = useRouter();
  const { query } = router;
  const [value, setValue] = useState([]);
  const { classes } = useSelectStyles();

  const getCategoriesSelect = useCategories();

  const { isLoading, isError, data, error } = getCategoriesSelect;

  const categoriesToSelectArray = data?.data?.categories?.map((item) => ({
    ...item,
    label: item.name,
    value: item.id,
    group: item.level,
  }));
  const onCategoryChange = (e) => {
    let selectValue = Array.isArray(e) ? e : [e];
    if (selectValue.length >= 1) {
      setValue(selectValue);
      delete router.query?.categories;
      router.query.categories = selectValue;
      router.push(router);
    } else {
      setValue([]);
      if (router.query.categories) {
        delete router.query.categories;
        router.push(router);
      }
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <MultiSelect
      classNames={classes}
      value={value}
      onChange={onCategoryChange}
      data={categoriesToSelectArray}
      placeholder="Категории"
      clearable
      nothingFound="Список пуст"
    />
  );
}
