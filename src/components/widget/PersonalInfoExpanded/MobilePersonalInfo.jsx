import {useDisclosure} from '@mantine/hooks';
import {Drawer, Button, Group, Tooltip, Title, createStyles, rem, getStylesRef, Flex} from '@mantine/core';
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import React, {useState} from "react";
import Link from "next/link";
import {lkMenuLinks} from "@/components/widget/PersonalInfoExpanded/PersonalInfoExpanded";
import {userApi} from "@/api";
import {logout} from "@/redux/features/auth/authSlice";
import {IconLogout} from "@tabler/icons-react";


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
        gap: theme.spacing.xs,
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

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },
}));

export function MobilePersonalInfo() {
    const [opened, {open, close}] = useDisclosure(false);
    const {classes, cx} = useStyles();
    const dispatch = useDispatch();
    const router = useRouter();

    const [active, setActive] = useState("Персональная информация");
    const links = lkMenuLinks.map((item) => (

        <Link
            className={cx(classes.link)}
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

    ));


    return (
        <>
            <Drawer position={'bottom'} opened={opened} onClose={close} withCloseButton={false}>
                <Group classNames={classes.header} position="apart">
                    <Title size={"x-large"} mb={'xl'}>Личный кабинет</Title>
                </Group>
                {links}
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
            </Drawer>

            <Flex sx={{width: '100%'}} direction={'row'} align={'center'} justify={'space-between'} px={'xs'}
                  position="center">
                <Title size={"x-large"}>{active}</Title>
                <Button onClick={open}>Открыть меню</Button>
            </Flex>
        </>
    );
}