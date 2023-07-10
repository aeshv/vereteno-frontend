import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
} from '@mantine/core';
import {IconGauge, IconUser, IconCookie} from '@tabler/icons-react';

const mockdata = [
    {
        title: 'Собственное производство',
        description:
            'Наша компания гордится тем, что каждая кепка или шляпа создается в нашем собственном производстве. Мы не только контролируем каждый этап производства, но и уделяем особое внимание выбору качественных материалов.',
        icon: IconGauge,
    },
    {
        title: 'Качественные материалы',
        description:
            ' Мы выбираем уникальные детали, такие как плиссировка, вышивка или шелковые ленточки, чтобы добавить изысканный штрих каждому изделию.',
        icon: IconUser,
    },
    {
        title: 'Вековые традиции',
        description:
            'Мы соблюдаем старинные техники и методы, чтобы создавать шляпы и головные уборы, которые отражают элегантность и роскошь прошлого',
        icon: IconCookie,
    },
];

const useStyles = createStyles((theme) => ({
    title: {
        fontSize: rem(34),
        fontWeight: 900,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(24),
        },
    },

    description: {
        maxWidth: 600,
        margin: 'auto',

        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    card: {
        border: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
        }`,
    },

    cardTitle: {
        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
        },
    },
}));

export function FeaturesCards() {
    const {classes, theme} = useStyles();
    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()}/>
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <Container size="lg" py="xl">
            <Group position="center">
                <Badge variant="filled" size="lg">
                    Отзывы
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
                Добро пожаловать на сайт элегантных <br/> головных уборов и шляп!
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                Наша компания гордится тем, что каждая кепка или шляпа создается в нашем собственном производстве.
                Мы не только контролируем каждый этап производства, но и уделяем особое внимание выбору качественных
                материалов.
            </Text>

            <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{maxWidth: 'md', cols: 1}]}>
                {features}
            </SimpleGrid>
        </Container>
    );
}