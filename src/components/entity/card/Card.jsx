import React from "react";
import ColorDot from "../../shared/ColorDot/ColorDot";
import CardGallery from "./CardGallery/CardGallery";
import Link from "next/link";
import noimage from "../../../../public/noimage.png";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    border: "solid 2px transparent",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "border 0.2s ease-in",
    height: "100%",
    minWidth: "255px",
    "&:hover": { border: "2px solid #EAEBED" },
  },
  gallery: { flexGrow: 1 },
  content: {
    marginTop: "8px",
    padding: "0 8px 12px 8px",
    position: "relative",
    "@media screen and (max-width: 768px)": { padding: "0 2px 8px" },
  },
  title: {
    fontSize: ["14px", "18px"],
    fontWeight: [400, 600],
    lineHeight: ["20px", "26px"],
    display: "block",
    overflow: "hidden",
    textAlign: "left",
    textOverflow: "ellipsis",
    fontFamily: '"Jost"',
    color: "#282739",
  },
  price: {
    fontSize: "18px",
    lineHeight: "24px",
    verticalAlign: "middle",
    color: "#5d6c7b",
  },
  row: {
    fontSize: "0",
    lineHeight: "18px",
    position: "relative",
    whiteSpace: "nowrap",
    gap: "6px",
    display: "flex",
    alignItems: "center",
  },
  labels: {
    position: "absolute",
    zIndex: 9,
    display: "flex",
    gap: "16px",
  },
  colors: {
    display: "flex",
    padding: "4px 0",
  },
  old: {
    fontFamily: '"Jost"',
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "24px",
    textDecoration: "line-through",
    color: "#5d6c7b",
    marginLeft: "8px",
  },
  current: {
    fontFamily: '"Jost"',
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "24px",
    textTransform: "uppercase",
    color: "#282739",
  },
}));

const Card = ({ href, images, title, name, vendorCode, price, discount }) => {
  const { classes } = useStyles();
  const displayImages = images?.length ? images : [{ src: noimage }];

  const finalPrice = discount ? price * discount : price;

  return (
    <Link className={classes.card} href={href}>
      <div className={classes.gallery}>
        <CardGallery images={displayImages} />
      </div>
      <div className={classes.content}>
        <div className={classes.row}>
          <span className={classes.title}>{title || name}</span>
        </div>
        <ColorDot color={vendorCode?.color?.hex} />
        <div className={classes.row}>
          <span className={classes.current}>{finalPrice} руб.</span>
          {discount && <span className={classes.old}>{price} руб.</span>}
        </div>
      </div>
    </Link>
  );
};

export default Card;
