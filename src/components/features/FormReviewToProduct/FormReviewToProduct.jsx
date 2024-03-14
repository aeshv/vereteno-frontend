import { useForm } from "@mantine/form";
import {
  Button,
  Center,
  createStyles,
  Rating,
  Space,
  Text,
  Textarea,
} from "@mantine/core";
import React, { useContext } from "react";
import { notifications } from "@mantine/notifications";
import { productApi } from "@/api";
import { ProductInfoContext } from "@/components/shared/Contexts/ProductContext";

const useStyles = createStyles((theme) => ({
  text: {
    fontFamily: "Jost",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#282739",
  },

  formBox: {
    maxWidth: "500px",
    width: "100%",
    placeSelf: "center",
  },
}));

export const FormReviewToProduct = () => {
  const { classes } = useStyles();
  const ctx = useContext(ProductInfoContext);
  const { product } = ctx;
  const form = useForm({
    initialValues: {
      productVendorCodeId: product?.id,
      rating: 5,
      comment: "",
    },
  });

  const handleCustomOrderForm = (data) => {
    const successEdit = () => {
      notifications.show({
        title: "Успешно отправлено",
        message: "Ваш отзыв скоро появится на странице",
        color: "green",
      });
      form.reset();
    };
    const errorEdit = (message = "Попробуйте позже") => {
      notifications.show({
        title: "Произошла ошибка",
        message: message,
        color: "red",
      });
    };

    productApi.postProductReviews(data).then(
      (response) => successEdit(),
      ({ response }) => errorEdit(response?.data?.message),
    );
  };

  return (
    <>
      <form
        className={classes.formBox}
        onSubmit={form.onSubmit((fullFormData) => {
          handleCustomOrderForm(fullFormData);
        })}
      >
        <Text fz="lg" className={classes.text}>
          Оцените товар
        </Text>
        <Rating defaultValue={5} {...form.getInputProps("rating")} />
        <Space h="md" />
        <Text fz="lg" className={classes.text}>
          Напишите отзыв
        </Text>
        <Textarea
          mb="md"
          placeholder="Введите ваши отзыв"
          {...form.getInputProps("comment")}
        />
        <Center>
          <Button type={"submit"}>Отправить</Button>
        </Center>
      </form>
    </>
  );
};
