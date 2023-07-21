import React from 'react'
import PageHead from "@/components/SEO/PageHead";
import {Container, createStyles, rem, Tabs} from "@mantine/core";
import {LegalPageConf} from "@/components/features/LegalPage/LegalPageConf";

const useStyles = createStyles((theme) => ({
    header: {
        paddingTop: theme.spacing.sm,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        borderBottom: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
        }`,
        marginBottom: rem(120),
    },

    mainSection: {
        paddingBottom: theme.spacing.sm,
    },

    user: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        transition: 'background-color 100ms ease',

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        },

        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('xs')]: {
            display: 'none',
        },
    },

    userActive: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    tabs: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    tabsList: {
        borderBottom: '0 !important',
    },

    tab: {
        fontWeight: 500,
        height: rem(38),
        backgroundColor: 'transparent',

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },

        '&[data-active]': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
            borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
        },
    },
}));
const Index = () => {


    const {classes, theme, cx} = useStyles();
    const tabs = [
        "Политика конфиденциальности",
    ]

    const items = tabs.map((tab) => (
        <Tabs.Tab value={tab} key={tab}>
            {tab}
        </Tabs.Tab>
    ));


    return (


        <>
            <Container>
                <Tabs
                    radius="xs" defaultValue="Политика конфиденциальности"
                    classNames={{
                        root: classes.tabs,
                        tabsList: classes.tabsList,
                        tab: classes.tab,
                    }}
                >
                    <Tabs.List>{items}</Tabs.List>


                    <Tabs.Panel value="Политика конфиденциальности" pt="0">
                        <LegalPageConf/>
                    </Tabs.Panel>


                </Tabs>
            </Container>
        </>


    )
}

export default Index