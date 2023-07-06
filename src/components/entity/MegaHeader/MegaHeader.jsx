import {
    createStyles,
    Header,
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    Autocomplete,
    Loader,
    ActionIcon,
    Flex,
} from '@mantine/core';

import {useDisclosure} from '@mantine/hooks';
import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
    IconSearch,
    IconShirt,
    IconShoppingCart,
    IconLogin,
    IconUser,
    IconMenu2,
} from '@tabler/icons-react';
import Link from "next/link";
import Search from "@/components/shared/search/Search";
import React from "react";
import Icon from "@/components/shared/icon/Icon";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

const useStyles = createStyles((theme) => ({
    container: {
        width: "100%",
        maxWidth: "1220px",
        display: "flex",
        flexDirection: "row",
        flexWrap: 'nowrap',
        alignItems: "center",
        margin: "0 auto",
        padding: `0 ${theme.spacing.xs}`,
        zIndex: 1001
    },

    header: {
        borderBottom: "none", width: '100%',
    }, wrapper: {
        width: '100%',

    },

    link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,

        [theme.fn.smallerThan('sm')]: {
            height: rem(42), display: 'flex', alignItems: 'center', width: '100%',
        },

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        }),
    },

    subLink: {
        width: '100%',
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        borderRadius: theme.radius.md,
        textDecoration: 'none', ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        }),

        '&:active': theme.activeStyles,
    },

    dropdownFooter: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        margin: `calc(${theme.spacing.md} * -1)`,
        marginTop: theme.spacing.sm,
        padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
        paddingBottom: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]}`,
    },

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    search: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    button: {
        background: "#6F73EE",
        border: "1.5px solid #6F73EE",
        borderRadius: "5px",
        padding: "8px 18px",
        height: "100%",
        maxHeight: "46px",

    },

    flexGrow: {
        flexGrow: 111
    },
}));

const mockdata = [{
    icon: IconShirt, title: 'Большие', description: 'These hats are handmade from quality materials',
}, {
    icon: IconShirt, title: 'Женские', description: 'These caps are made with modern technology for a comfortable fit',
}, {
    icon: IconShirt, title: 'Мужские', description: 'These beanies are knitted with love and care',
}, {
    icon: IconShirt, title: 'Винтаж', description: 'These scarves are carefully made with vintage techniques',
}, {icon: IconShirt, title: 'Детские', description: 'These bonnets are made with natural and organic materials',},];

export function MegaHeader() {
    const [drawerOpened, {toggle: toggleDrawer, close: closeDrawer}] = useDisclosure(false);
    const [linksOpened, {toggle: toggleLinks}] = useDisclosure(false);
    const {classes, theme} = useStyles();
    const isLoggedIn = useSelector((state) => !!state.auth.token);

    const links = mockdata.map((item) => (<UnstyledButton className={classes.subLink} key={item.title}>
        <Group noWrap align="flex-start">
            <Link href="/">
                <Text size="sm" fw={500}>
                    {item.title}
                </Text>
                <Text size="xs" color="dimmed">
                    {item.description}
                </Text>
            </Link>
        </Group>
    </UnstyledButton>));

    return (<Box className={classes.container}>
        <Header height={70} px="md" className={classes.header}>
            <Flex sx={{height: '90%'}} className={classes.wrapper} gap={{base: 'sm', sm: 'lg'}}
                  justify={{sm: 'center'}} align={"center"}>
                <Link href="/" className={classes.link}>
                    <span>Веретено</span>
                </Link>
                <Group className={`${classes.hiddenMobile} `}>
                    <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                        <HoverCard.Target>
                            <Link href="/products" className={classes.link}>
                                <Button className={classes.button} leftIcon={<IconMenu2/>}>
                                    Каталог
                                </Button>
                            </Link>
                        </HoverCard.Target>

                        <HoverCard.Dropdown sx={{overflow: 'hidden'}}>

                            <SimpleGrid cols={2} spacing={0}>
                                {links}
                            </SimpleGrid>

                            <div className={classes.dropdownFooter}>
                                <Group position="apart">
                                    <div>
                                        <Text fw={500} fz="sm">
                                            Начните с каталога
                                        </Text>
                                        <Text size="xs" color="dimmed">
                                            Найдите лучший головной убор
                                        </Text>
                                    </div>
                                    <Link href={'/products'}>
                                        <Button variant="default">В каталог</Button>
                                    </Link>
                                </Group>
                            </div>
                        </HoverCard.Dropdown>
                    </HoverCard>
                </Group>
                <div className={classes.hiddenMobile} style={{flexGrow: 111}}>
                    <Search/>
                </div>
                <Group className={classes.hiddenMobile}>
                    <Link href="/cart">
                        <ActionIcon color="indigo" size="40px" radius="xl" variant="light">
                            <IconShoppingCart size="20px"/>
                        </ActionIcon>
                    </Link>

                    {isLoggedIn ? <Link href="/lk">
                        <ActionIcon color="indigo" size="40px" radius="xl" variant="light">
                            <IconUser size="20px"/>
                        </ActionIcon>
                    </Link> : <Link href="/auth">
                        <ActionIcon color="indigo" size="40px" radius="xl" variant="light">
                            <IconLogin size="20px"/>
                        </ActionIcon>
                    </Link>}

                </Group>
                <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop}/>
            </Flex>
        </Header>

        {/*Мобильное меню*/}
        <Drawer
            opened={drawerOpened}
            onClose={closeDrawer}
            size="100%"
            padding="md"
            title="Navigation"
            className={classes.hiddenDesktop}
            zIndex={1000000}
        >
            <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
                <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}/>

                <Link href="/" className={classes.link}>
                    Главная страница
                </Link>
                <UnstyledButton className={classes.link} onClick={toggleLinks}>
                    <Center inline>
                        <Box component="span" mr={5}>
                            Категории
                        </Box>
                        <IconChevronDown size={16} color={theme.fn.primaryColor()}/>
                    </Center>
                </UnstyledButton>
                <Collapse in={linksOpened}>{links}</Collapse>
                <Link href="/lk" className={classes.link}>
                    Личный кабинет
                </Link>
                <Link href="/about" className={classes.link}>
                    О Нас
                </Link>

                <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}/>

                <Group position="center" grow pb="xl" px="md">
                    <Link href="/cart">
                        <Button variant="default">Корзина</Button>
                    </Link>
                    <Link href="/auth">
                        <Button>Войти</Button>
                    </Link>
                </Group>
            </ScrollArea>
        </Drawer>
    </Box>);
}