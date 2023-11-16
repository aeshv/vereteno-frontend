import React from "react";
import Image from "next/image";
import noImage from "../../../../public/noimage.png";
import {
  BackgroundImage,
  Box,
  Center,
  createStyles,
  getStylesRef,
  Group,
  rem,
  Text,
} from "@mantine/core";
import Link from "next/link";
import categoryPlaceholder from "@/components/shared/BluredBlock/categoryPlaceholder.png";

const blurredBlockClasses = createStyles((theme) => ({
  box: {
    borderRadius: "22px",
    minHeight: "255px",
    minWidth: "255px",
    padding: "18px",
    overflow: "hidden",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",

    [theme.fn.smallerThan("sm")]: {
      minHeight: "186px",
      minWidth: "186px",
      padding: "12px",
    },
  },
  link: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "18px",
    borderRadius: "22px",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      [`.${getStylesRef("textRef")}`]: {
        scale: "1.1",
      },
      boxShadow: theme.shadows.sm,
      transform: "scale(0.99)",
    },
  },
  content: {
    ref: getStylesRef("contentRef"),
    transition: "all 0.3s ease-in-out",
    background: " rgba(0, 0, 0, 0.2)",
    borderRadius: " 10px",
    width: "100%",
  },
  text: {
    ref: getStylesRef("textRef"),
    transition: "all 0.3s ease-in-out",
  },
}));

const BlurredBlock = ({ title = "Шляпы", id, ...other }) => {
  const { classes } = blurredBlockClasses();

  return (
    <>
      <Box mx="auto" className={classes.box}>
        <Link href={`/products?categories=${id}`}>
          <BackgroundImage
            src={`${process.env.NEXT_PUBLIC_IMAGE}/${other.image}`}
            radius="xs"
            className={classes.link}
          >
            <Center p="md" className={classes.content}>
              <Text color="#fff" className={classes.text}>
                {title}
              </Text>
            </Center>
          </BackgroundImage>
        </Link>
      </Box>
    </>
  );
};
export default BlurredBlock;
