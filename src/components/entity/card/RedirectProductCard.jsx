import React from "react";
import ColorDot from "../../shared/ColorDot/ColorDot";
import CardGallery from "./CardGallery/CardGallery";
import Link from "next/link";
import noimage from "../../../../public/noimage.png";
import { createStyles, Text } from "@mantine/core";
import styles from "@/components/features/product/ProductOrder.module.scss";

const CardStyles = createStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    border: "solid 2px #EAEBED",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "all 0.2s ease-in",
    height: "100%",
    minWidth: "255px",
    "&:hover": { boxShadow: theme.shadows.lg },

    [theme.fn.smallerThan("sm")]: {
      minHeight: "420px",
    },
  },
  gallery: { flexGrow: 1 },
  content: {
    marginTop: "8px",
    padding: "0 8px 12px 8px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",

    "@media screen and (max-width: 768px)": { padding: "0 2px 8px" },
  },
  title: {
    fontSize: ["14px", "18px"],
    fontWeight: [400, 600],
    lineHeight: ["20px", "26px"],
    display: "block",
    overflow: "hidden",
    position: "relative",
    textAlign: "center",
    textOverflow: "ellipsis",
    fontFamily: '"Jost"',
    fontStyle: "normal",
    color: "#282739",
  },
  price: {
    fontSize: ["18px", "18px"],
    fontWeight: [400, 400],
    lineHeight: ["24px", "20px"],
    display: "inline-block",
    verticalAlign: "middle",
    fontStyle: "normal",
    color: "#5d6c7b",
  },
  row: {
    fontSize: "0",
    lineHeight: "18px",
    position: "relative",
    whiteSpace: "nowrap",
    gap: "6px",
  },
  labels: {
    position: "absolute",
    zIndex: 9,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
  },
  colors: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "4px 0",
  },
  old: {
    fontFamily: '"Jost"',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "24px",
    textDecorationLine: "line-through",
    color: "#5d6c7b",
    marginLeft: "8px",
  },
  current: {
    fontFamily: '"Jost"',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "24px",
    textTransform: "uppercase",
    color: "#282739",
  },
}));

const RedirectProductCard = () => {
  const { classes, theme } = CardStyles(undefined, undefined);

  return (
    <Link className={classes.card} href={"/products"}>
      <div className={classes.content}>
        <div className={classes.row}>
          <span className={classes.title}>Найдите подходящие товары</span>
          <span className={classes.title}>
            <Text
              variant="gradient"
              gradient={{
                from: theme.colors.brand[4],
                to: theme.colors.brand[8],
                deg: 45,
              }}
              ta="center"
              fz="xl"
              fw={700}
            >
              В каталоге
            </Text>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RedirectProductCard;
