import React from "react";
import {IconMoodEmptyFilled} from "@tabler/icons-react";
import {createStyles} from "@mantine/core";
import Link from "next/link";

const currentStyles = createStyles((theme) => ({
    container: {
        background: `${theme.colors.brand[1]}`,
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1rem",
        margin: "2rem 0",
        "& h1": {
            fontFamily: '"Jost"',
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "36px",
            textTransform: "uppercase",
            color: "#282739"
        },
        "& p": {
            fontFamily: '"Jost"',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#282739"
        }
    },
    image: {color: `${theme.colors.brand[8]}`},
    button: {
        background: `${theme.colors.brand[8]}`,
        fontFamily: '"Jost"',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "17px",
        textAlign: "center",
        color: "#ffffff",
        border: `1.3px solid ${theme.colors.brand[8]}`,
        borderRadius: "5px",
        padding: "10px 20px",
        cursor: "pointer",
        "&:hover": {opacity: 0.7}
    }

}));

const NoDataBlock = ({
                         title = 'ВАША КОРЗИНА ПУСТА',
                         description = 'Добавьте в нее товары из каталога',
                         link = '/products',
                         btnText = 'Перейти к каталог',
                         hideButton = false,
                         icon = <IconMoodEmptyFilled size="85px"/>,
                     }) => {

    const {classes: styles} = currentStyles();

    return (
        <>
            <div>
                <div className={styles.container}>
                    <div className={styles.image}>
                        {icon}
                    </div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    {!hideButton &&
                        <Link href={link}>
                            <button className={styles.button}>{btnText}</button>
                        </Link>
                    }
                </div>
            </div>

            {/*<BuyingWith title={"Рекомендуем вам"} />*/}
        </>
    );
};

export default NoDataBlock;
