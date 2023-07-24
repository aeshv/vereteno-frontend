import React from "react";
import ColorDot from "../../shared/ColorDot/ColorDot";
import CardGallery from "./CardGallery/CardGallery";
import Link from "next/link";
import noimage from "../../../../public/noimage.png";
import {createStyles} from "@mantine/core";
import styles from "@/components/features/product/ProductOrder.module.scss";

const CardStyles = createStyles(() => ({
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
        "&:hover": {border: "2px solid #EAEBED"}
    },
    gallery: {flexGrow: 1},
    content: {
        marginTop: "8px",
        padding: "0 8px 12px 8px",
        position: "relative",
        "@media screen and (max-width: 768px)": {padding: "0 2px 8px"}
    },
    title: {
        fontSize: ["14px", "18px"],
        fontWeight: [400, 600],
        lineHeight: ["20px", "26px"],
        display: "block",
        overflow: "hidden",
        position: "relative",
        textAlign: "left",
        textOverflow: "ellipsis",
        fontFamily: '"Jost"',
        fontStyle: "normal",
        color: "#282739"
    },
    price: {
        fontSize: ["18px", "18px"],
        fontWeight: [400, 400],
        lineHeight: ["24px", "20px"],
        display: "inline-block",
        verticalAlign: "middle",
        fontStyle: "normal",
        color: "#5d6c7b"
    },
    row: {
        fontSize: "0",
        lineHeight: "18px",
        position: "relative",
        whiteSpace: "nowrap",
        gap: '6px'
    },
    labels: {
        position: "absolute",
        zIndex: 9,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "16px"
    },
    colors: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "4px 0"
    },
    old: {
        fontFamily: '"Jost"',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "24px",
        textDecorationLine: "line-through",
        color: "#5d6c7b",
        marginLeft: '8px'
    },
    current: {
        fontFamily: '"Jost"',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "24px",
        textTransform: "uppercase",
        color: "#282739"
    },
}));


const Card = (props) => {

    const noimageArray = [{src: noimage}]
    const {classes} = CardStyles(undefined, undefined);

    return (<Link className={classes.card} href={props?.href}>



        {props?.vendorCodes?.[0]?.images
          ?
          (<div className={classes.gallery}>
                    <CardGallery images={props?.vendorCodes?.[0]?.images}/>
                </div>)
          :
            (<div className={classes.gallery}>
                <CardGallery images={noimageArray}/>
            </div>)
        }

        <div className={classes.content}>
            <div className={classes.row}>
                <span className={classes.title}>{props?.title || props?.name}</span>
            </div>
            {/*<div className={classes.row}>*/}
            {/*    <span className={classes.price}>{props?.description.slice(0, 35)}...</span>*/}
            {/*</div>*/}
            {props?.vendorCodes?.map((item, index) => (

                <ColorDot key={index} color={item?.color?.hex}/>
            ))}
            {/*{props?.colors?.length && (<>*/}
            {/*    <div className={classes.row}>*/}
            {/*  <span className={classes.colors}>*/}
            {/*              {props?.vendor_code?.color?.map(({hex}) => (<>*/}
            {/*                  <ColorDot color={hex}/>*/}
            {/*              </>))}*/}
            {/*  </span>*/}
            {/*    </div>*/}
            {/*</>)}*/}
            <div className={classes.row}>
                {!props?.discount ?
                    <>
                        <span className={classes.current}>{props?.vendorCodes?.[0]?.price} ₽</span>
                    </>
                    :
                    <>
                        <span className={classes.current}>{props?.vendorCodes?.[0]?.price} руб.</span>
                        <span
                            className={classes.old}>{props?.vendorCodes?.[0]?.price * props?.vendorCodes?.[0]?.discount} руб.</span>
                    </>
                }
            </div>
        </div>
    </Link>);
};

export default Card;

{
    /* <div className={classes.labels}>
                    <Label type={'green'}>Новинка</Label>
                    <Label type={'red'}>Хит</Label>
                    <Label type={'yellow'}>Рассрочка</Label>
                </div> */
}

{
}
