import React from 'react'
import PageHead from "@/components/SEO/PageHead";
import {Container, createStyles, rem, Tabs} from "@mantine/core";
import {LegalPageConf} from "@/components/features/LegalPage/LegalPageConf";
import {LegalPagePayment} from "@/components/features/LegalPage/LegalPagePayment";
import {LegalPageShipment} from "@/components/features/LegalPage/LegalPageShipment";

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

    userActive: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
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
        "Обмен и возврат",
        "Доставка и оплата",
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

                    <Tabs.Panel value="Обмен и возврат" pt="0">
                        <LegalPagePayment/>
                    </Tabs.Panel>

                    <Tabs.Panel value="Доставка и оплата" pt="0">
                        <LegalPageShipment/>
                    </Tabs.Panel>

                </Tabs>
            </Container>
        </>


    )
}

export default Index