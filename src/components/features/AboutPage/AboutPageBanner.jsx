import {createStyles, Title, Text, Button, Container, rem} from '@mantine/core';
import Link from "next/link";
import {useRouter} from "next/router";

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        paddingTop: rem(120),
        paddingBottom: rem(80),

        [theme.fn.smallerThan('sm')]: {
            paddingTop: rem(0),
            paddingBottom: rem(60),
        },
    },

    inner: {
        position: 'relative',
        zIndex: 1,
    },


    title: {
        textAlign: 'center',
        fontWeight: 800,
        fontSize: rem(40),
        letterSpacing: -1,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        marginBottom: theme.spacing.xs,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
            textAlign: 'left',
        },
    },

    highlight: {
        color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
    },

    description: {
        textAlign: 'center',

        [theme.fn.smallerThan('xs')]: {
            textAlign: 'left',
            fontSize: theme.fontSizes.md,
        },
    },

    controls: {
        marginTop: theme.spacing.lg,
        display: 'flex',
        justifyContent: 'center',

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    control: {
        '&:not(:first-of-type)': {
            marginLeft: theme.spacing.md,
        },

        [theme.fn.smallerThan('xs')]: {
            height: rem(42),
            fontSize: theme.fontSizes.md,

            '&:not(:first-of-type)': {
                marginTop: theme.spacing.md,
                marginLeft: 0,
            },
        },
    },
}));

export function AboutPageBanner() {
    const {classes} = useStyles();
    const router = useRouter()

    return (
        <Container className={classes.wrapper}>

            <div className={classes.inner}>
                <Title className={classes.title}>
                    Магазин{' '}
                    <Text component="span" className={classes.highlight} inherit>
                        головных уборов
                    </Text>{' '}
                    любого фасона
                </Title>

                <Container p={0} size={600}>
                    <Text size="lg" color="dimmed" className={classes.description}>
                        Ателье-магазин шляп предлагает вам широкий выбор высококачественных головных уборов на любой
                        вкус и стиль.

                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button className={classes.control} size="lg" variant="default" color="gray"
                            onClick={() => router.push('/reviews')}>
                        Посмотреть отзывы
                    </Button>

                    <Button className={classes.control} size="lg" onClick={() => router.push('/products')}>
                        Перейти в каталог
                    </Button>
                </div>
            </div>
        </Container>
    );
}