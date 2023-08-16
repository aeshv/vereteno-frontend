import React from "react";
import {createStyles} from "@mantine/core";

const smallInfoStyles = createStyles((theme) => ({
    container: {
        background: "#f4f7fb",
        borderRadius: "10px",
        padding: "40px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        overflow: "hidden"
    },
    text: {
        maxWidth: "258px",
        zIndex: 2,
        h2: {
            fontSize: ["24px", "25px"],
            marginBottom: ["16px", "10px"],
            fontFamily: '"Jost"',
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "36px",
            textTransform: "uppercase",
            color: "#282739"
        },
        p: {
            fontSize: ["16px", "16px"],
            marginBottom: "32px",
            fontFamily: '"Jost"',
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "23px",
            color: "#282739"
        }
    },
    imageSection: {
        zIndex: 1,
        position: "absolute",
        top: "50%",
        right: "-120px",
        img: {maxWidth: "100%", height: "auto"},

    },
    circle: {
        transform: "translateY(-50%)",
        borderRadius: "50%",
        width: "300px",
        height: "300px",
        background: `${theme.colors.brand[9]}`
    }
}));
const SmallInfoBlock = ({title = "", description = ""}) => {

    const {classes: styles} = smallInfoStyles();
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className={styles.imageSection}>

                <div className={styles.circle}></div>
            </div>
        </div>
    );
};

export default SmallInfoBlock;
