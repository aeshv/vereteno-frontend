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
    rem, Autocomplete, Loader,
} from '@mantine/core';

import {useDisclosure} from '@mantine/hooks';
import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown, IconSearch, IconShirt,
} from '@tabler/icons-react';
import Link from "next/link";
import Search from "@/components/shared/search/Search";
import React from "react";

const useStyles = createStyles((theme) => ({
    container: {
        width: "100%",
        maxWidth: "1220px",
        // display: "flex",
        // flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
        padding: `0 ${theme.spacing.xs}`,
        zIndex: 1001
    },

    header: {
        borderBottom: "none"
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
            height: rem(42),
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        }),
    },

    subLink: {
        width: '100%',
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        borderRadius: theme.radius.md,
        textDecoration: 'none',
        ...theme.fn.hover({
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
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
        }`,
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
}));

const mockdata = [
    {
        icon: IconShirt,
        title: 'Handcrafted',
        description: 'These hats are handmade from quality materials',
    }, {
        icon: IconShirt,
        title: 'High-tech',
        description: 'These caps are made with modern technology for a comfortable fit',
    }, {
        icon: IconShirt,
        title: 'Knitted',
        description: 'These beanies are knitted with love and care',
    }, {
        icon: IconShirt,
        title: 'Vintage',
        description: 'These scarves are carefully made with vintage techniques',
    },
    {icon: IconShirt, title: 'Organic', description: 'These bonnets are made with natural and organic materials',},
];

export function MegaHeader() {
    const [drawerOpened, {toggle: toggleDrawer, close: closeDrawer}] = useDisclosure(false);
    const [linksOpened, {toggle: toggleLinks}] = useDisclosure(false);
    const {classes, theme} = useStyles();

    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group noWrap align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon size={rem(22)} color={theme.fn.primaryColor()}/>
                </ThemeIcon>
                <Link href="/">
                    <Text size="sm" fw={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" color="dimmed">
                        {item.description}
                    </Text>
                </Link>
            </Group>
        </UnstyledButton>
    ));

    return (
        <Box className={classes.container}>
            <Header height={70} px="md" className={classes.header}>
                <Group position="apart" sx={{height: '100%'}}>
                    <span>Logo</span>

                    <Group sx={{height: '100%'}} spacing={0} className={classes.hiddenMobile}>
                        <Link href="/" className={classes.link}>
                            Главная
                        </Link>
                        <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                            <HoverCard.Target>
                                <a href="#" className={classes.link}>
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                            Категории
                                        </Box>
                                        <IconChevronDown size={16} color={theme.fn.primaryColor()}/>
                                    </Center>
                                </a>
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
                                        <Button variant="default">В каталог</Button>
                                    </Group>
                                </div>
                            </HoverCard.Dropdown>
                        </HoverCard>
                        <Link href="/about" className={classes.link}>
                            О Нас
                        </Link>
                        <Link href="/lk" className={classes.link}>
                            Личный кабинет
                        </Link>
                    </Group>


                    <Search/>
                    
                    {/*<Autocomplete*/}
                    {/*    className={classes.search}*/}
                    {/*    placeholder="Поиск"*/}
                    {/*    icon={<IconSearch size="1rem" stroke={1.5}/>}*/}
                    {/*    data={['шляпы', 'головные уборы', 'кепки', 'шапки', 'ушанки', 'шелковые штуки',]}*/}
                    {/*/>*/}


                    <Group className={classes.hiddenMobile}>
                        <Button variant="default">Корзина</Button>
                        <Button>Войти</Button>
                    </Group>


                    <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop}/>
                </Group>
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

                    <a href="#" className={classes.link}>
                        Home
                    </a>
                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                Features
                            </Box>
                            <IconChevronDown size={16} color={theme.fn.primaryColor()}/>
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    <a href="#" className={classes.link}>
                        Learn
                    </a>
                    <a href="#" className={classes.link}>
                        Academy
                    </a>

                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}/>

                    <Group position="center" grow pb="xl" px="md">
                        <Button variant="default">Корзина</Button>
                        <Button>Войти</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}