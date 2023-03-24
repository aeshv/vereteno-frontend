import React from "react";
import {
  createStyles,
  Image,
  Card,
  Text,
  Group,
  Button,
  getStylesRef,
  rem,
  Grid,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconStar } from "@tabler/icons-react";
import styles from "./CarouselBanner.module.scss";
import Label from "@/components/shared/label/Label";

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  carousel: {
    "&:hover": {
      [`& .${getStylesRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: "width 250ms ease",

    "&[data-active]": {
      width: rem(16),
    },
  },
}));

const content = [
  {
    id: 1,
    image_src:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
    title: "ОСЕНЬ / ЗИМА",
    subtitle: "Коллекция",
    buttonText: "Перейти",
    buttonLink: "/",
  },
  {
    id: 2,
    image_src:
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
    title: "Новое поступление",
    subtitle: "Успей купить прямо сейчас",
  },
  {
    id: 3,
    image_src:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
    title: "Скоро открытие",
    subtitle: "Новый магазин в ТЦ Мытыщи",
    buttonText: "Посмотреть на карте",
    buttonLink: "/",
  },
  {
    id: 4,
    image_src:
      "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
    title: "Финальная распродажа",
    subtitle: "Купи со скидками до -50%",
  },
  {
    id: 5,
    image_src:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
    title: "Гарантия 2 года",
    subtitle:
      "На любую продукцию нашего веселого магазина, от производителя, длинный текст",
    buttonText: "Перейти",
    buttonLink: "/",
    label: "green",
  },
];

export function CarouselBanner() {
  const { classes } = useStyles();

  const slides = content.map((item, index) => (
    <Carousel.Slide key={`${item.id}_${index}`}>
      <div className={styles.sliderContent}>
        <Image src={item.image_src} height={420} className={styles.image} alt={item.subtitle}/>
        <div className={styles.content}>
          <Grid>
            <Grid.Col md={12} lg={6} align="center" justify="center">
              <div className={styles.colContent}>
                {item.label && <Label type={item.label}>Новика</Label>}
                <Text
                  component="span"
                  variant="gradient"
                  gradient={{ from: "#A6A9FF", to: "#6F73EE" }}
                  inherit
                  className={styles.title}
                >
                  {item.title}
                </Text>
                <Text className={styles.subtitle}>{item.subtitle}</Text>

                {item.buttonText && (
                  <Button
                    variant="gradient"
                    gradient={{ from: "#8185f9", to: "cyan" }}
                  >
                    {item.buttonText}
                  </Button>
                )}
              </div>
            </Grid.Col>
            <Grid.Col md={12} lg={6}></Grid.Col>
          </Grid>
        </div>
      </div>
    </Carousel.Slide>
  ));

  return (
    <div
      style={{ marginBottom: "1rem", borderRadius: "16px", overflow: "hidden" }}
    >
      <Carousel
        withIndicators
        loop
        height={421}
        classNames={{
          root: classes.carousel,
          controls: classes.carouselControls,
          indicator: classes.carouselIndicator,
        }}
      >
        {slides}
      </Carousel>
    </div>
  );
}
