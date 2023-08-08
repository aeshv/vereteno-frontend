import React, {useState} from "react";
import {
    createStyles,
    Navbar,
    Group,
    Code,
    getStylesRef,
    rem,
    Title, Tooltip,
} from "@mantine/core";
import {
    IconBellRinging,
    IconFingerprint,
    IconKey,
    IconSettings,
    Icon2fa,
    IconDatabaseImport,
    IconReceipt2,
    IconSwitchHorizontal,
    IconLogout,
    IconGardenCart,
    IconUserCircle,
} from "@tabler/icons-react";
import Link from "next/link";
import {userApi} from "@/api";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "@/redux/features/auth/authSlice";
import {useRouter} from "next/router";
import {Enum} from "@/utils/enum";

const useStyles = createStyles((theme) => ({
    header: {
        paddingBottom: theme.spacing.md,
        marginBottom: `calc(${theme.spacing.md} * 1.5)`,
        borderBottom: `${rem(1)} solid ${
            theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
    },

    footer: {
        paddingTop: theme.spacing.md,
        marginTop: theme.spacing.md,
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
    },

    link: {
        ...theme.fn.focusStyles(),
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        fontSize: theme.fontSizes.sm,
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[1]
                : theme.colors.gray[7],
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
            color: theme.colorScheme === "dark" ? theme.white : theme.black,

            [`& .${getStylesRef("icon")}`]: {
                color: theme.colorScheme === "dark" ? theme.white : theme.black,
            },
        },
    },

    linkIcon: {
        ref: getStylesRef("icon"),
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[2]
                : theme.colors.gray[6],
        marginRight: theme.spacing.sm,


        [theme.fn.smallerThan('sm')]: {
            marginRight: 0,
        },

    },

    linkActive: {
        "&, &:hover": {
            backgroundColor: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).background,
            color: theme.fn.variant({variant: "light", color: theme.primaryColor})
                .color,
            [`& .${getStylesRef("icon")}`]: {
                color: theme.fn.variant({variant: "light", color: theme.primaryColor})
                    .color,
            },
        },
    },

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },
}));

export const lkMenuLinks = [
    {link: "/lk", label: "Персональная информация", icon: IconUserCircle},
    {
        link: "/orders",
        label: "Заказы",
        icon: IconReceipt2,
        protected: true,
    },
    {
        link: "/cart",
        label: "Корзина",
        icon: IconGardenCart,
        protected: false,
    },
];

export function PersonalInfoExpanded() {
    const {classes, cx} = useStyles();
    const dispatch = useDispatch();
    const router = useRouter();
    const {user} = useSelector((state) => state.auth)
    const routeToActiveTab = Enum({lk: 'Персональная информация', orders: 'Заказы', cart: 'Корзина'},
    )

    const [active, setActive] = useState(routeToActiveTab[router.pathname.substring(1)]);
    const links = lkMenuLinks.map((item) => {

        if (!user && !item.protected || user) return (
            <Link
                className={cx(classes.link, {
                    [classes.linkActive]: item.label === active,
                })}
                href={item.link}
                key={item.label}
                onClick={(event) => {
                    // event.preventDefault();
                    setActive(item.label);
                }}
            >
                <Tooltip label={item.label}>
                    <item.icon className={classes.linkIcon} stroke={1.5}/>
                </Tooltip>
                <span>{item.label}</span>
            </Link>
        )

    });

    return (
        <Navbar zIndex={300} height={700} width={{sm: 300}} p="md">
            <Navbar.Section grow>
                <Group classNames={classes.header} position="apart">
                    <Title size={"x-large"}>Личный кабинет</Title>
                </Group>
                {links}
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <a
                    href="#"
                    className={classes.link}
                    onClick={(event) => {
                        event.preventDefault();
                        userApi.logout()
                        dispatch(logout())
                        router.push('/')
                    }}
                >
                    <Tooltip label={'Выйти'}>
                        <IconLogout className={classes.linkIcon} stroke={1.5}/>
                    </Tooltip>
                    <span>Выйти</span>
                </a>
            </Navbar.Section>
        </Navbar>
    );
}
