import {Breadcrumbs, createStyles, Text} from "@mantine/core";
import {useContext} from "react";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";
import Link from "next/link";

const BreadcrumbsStyles = createStyles((theme) => ({
    link: {
        fontFamily: '"Jost"',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: theme.fontSizes.md,
        lineHeight: "20px",
        color: theme.colors[theme.primaryColor][4],

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        }),
    },

    text: {
        fontFamily: '"Jost"',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: theme.fontSizes.md,
        lineHeight: "20px",
        color: theme.colors.gray[6],
    },

    separator: {
        color: theme.colors.gray[4],
    }
}));


export const ProductBreadcrumbs = () => {
    const {product} = useContext(ProductInfoContext)
    const {classes} = BreadcrumbsStyles();

    const links = [
        {title: 'Главная', href: '/'},
        {title: 'Каталог', href: '/products'},
        {title: product?.category?.name, href: `/products?category=${product?.category?.name}`},
        {title: product?.name, href: null},
    ]

    const items = links.map((link, index) => {

        if (link.href) {
            return (
                <Link href={link.href} key={index}>
                    <Text className={classes.link}>
                        {link.title}
                    </Text>
                </Link>
            )
        } else {
            return (
                <Text className={classes.text} key={index}>
                    {link.title}
                </Text>
            )
        }

    })

    return (
        <>
            <Breadcrumbs classNames={classes} mb={'xs'}>{items}</Breadcrumbs></>
    )
}
