import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Loader,
  ActionIcon,
  Flex,
  Stack,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronDown,
  IconShoppingCart,
  IconLogin,
  IconUser,
  IconMenu2,
} from "@tabler/icons-react";
import Link from "next/link";
import Search from "@/components/shared/search/Search";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useCategories } from "@/utils/hooks/useCategories";
import MainLogo from "@/assets/icons/MainLogo";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: "1220px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    margin: "0 auto",
    padding: `0 ${theme.spacing.xs}`,
    zIndex: 150,
  },

  header: {
    borderBottom: "none",
    width: "100%",
    display: "flex",
  },
  wrapper: {
    width: "100%",
    placeSelf: "center",
  },

  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,
    textDecoration: "none",
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  button: {
    background: theme.colors.brand[9],
    border: `1.5px solid ${theme.colors.brand[9]}`,
    borderRadius: "5px",
    padding: "8px 18px",
    height: "100%",
    maxHeight: "46px",
  },

  flexGrow: {
    flexGrow: 111,
  },

  logo: {
    width: "4rem",
  },

  subButtonText: {
    fontFamily: "Jost",
    marginTop: "2px",
  },
}));

export function MegaHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const isLoggedIn = useSelector((state) => !!state.auth.token);

  const router = useRouter();
  const { query } = router;

  const getAvailableCategories = useCategories();

  const { isLoading, isError, data, error, refetch } = getAvailableCategories;
  const firstGradeCategories =
    data?.data?.categories.filter((category) => category.level === 1) || [];

  const handlePageChange = (routeId) => {
    closeDrawer();
    if (routeId) {
      delete router.query.category;
      router.pathname = "/products";

      router.query.categories = routeId;
      router.push(router);
    }
  };

  const catalogLinks = firstGradeCategories?.map((item, index) => (
    <UnstyledButton className={classes.subLink} key={index}>
      <Stack
        align="flex-start"
        spacing="xs"
        onClick={() => handlePageChange(item?.id)}
      >
        <Text size="sm" fw={500} pl={"xs"}>
          {item.name}
        </Text>
        <Text size="xs" color="dimmed" pl={"xs"}>
          {item.description}
        </Text>
      </Stack>
    </UnstyledButton>
  ));

  return (
    <Box className={classes.container}>
      <Header height={75} px="md" className={classes.header}>
        <Flex
          sx={{ height: "90%" }}
          className={classes.wrapper}
          gap={{ base: "sm", sm: "lg" }}
          justify={{ sm: "center" }}
          align={"center"}
        >
          <Link href="/">
            <div className={`${classes.logo} `}>
              <MainLogo />
            </div>
          </Link>
          <Group className={`${classes.hiddenMobile} `}>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <Link href="/products" className={classes.link}>
                  <Button className={classes.button} leftIcon={<IconMenu2 />}>
                    Каталог
                  </Button>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                {isLoading ? (
                  <>
                    <Loader />
                  </>
                ) : (
                  <>
                    <SimpleGrid cols={2} spacing={0}>
                      {catalogLinks}
                    </SimpleGrid>
                  </>
                )}

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
                    <Link href={"/products"}>
                      <Button variant="default">В каталог</Button>
                    </Link>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
          <div style={{ flexGrow: 111 }}>
            <Search />
          </div>
          <Group className={classes.hiddenMobile}>
            <Link
              href="/cart"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ActionIcon
                color="inherit"
                size="40px"
                radius="xl"
                variant="light"
              >
                <IconShoppingCart size="20px" />
              </ActionIcon>
              <Text
                size={"xs"}
                c={"dimmed"}
                className={classes.subButtonText}
                sx={{ lineHeight: 1 }}
              >
                Корзина
              </Text>
            </Link>

            {isLoggedIn ? (
              <Link
                href="/lk"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ActionIcon
                  color="inherit"
                  size="40px"
                  radius="xl"
                  variant="light"
                >
                  <IconUser size="20px" />
                </ActionIcon>
                <Text
                  size={"xs"}
                  c={"dimmed"}
                  className={classes.subButtonText}
                  sx={{ lineHeight: 1 }}
                >
                  Профиль
                </Text>
              </Link>
            ) : (
              <Link
                href="/auth"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ActionIcon
                  color="inherit"
                  size="40px"
                  radius="xl"
                  variant="light"
                >
                  <IconLogin size="20px" />
                </ActionIcon>
                <Text
                  size={"xs"}
                  c={"dimmed"}
                  className={classes.subButtonText}
                  sx={{ lineHeight: 1 }}
                >
                  Войти
                </Text>
              </Link>
            )}
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Flex>
      </Header>

      {/*Мобильное меню*/}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Меню - Веретено"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Link href="/" className={classes.link} onClick={() => closeDrawer()}>
            Главная страница
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Категории
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{catalogLinks}</Collapse>
          <Link
            href="/about"
            className={classes.link}
            onClick={() => closeDrawer()}
          >
            О Нас
          </Link>
          <Link
            href="/reviews"
            className={classes.link}
            onClick={() => closeDrawer()}
          >
            Отзывы
          </Link>
          <Link
            href="/products"
            className={classes.link}
            onClick={() => closeDrawer()}
          >
            Продукты
          </Link>
          <Link
            href="/legal"
            className={classes.link}
            onClick={() => closeDrawer()}
          >
            Правовая информация
          </Link>
          <Link
            href="/info"
            className={classes.link}
            onClick={() => closeDrawer()}
          >
            Как узнать размер
          </Link>
          <Link
            href="/custom"
            className={classes.link}
            onClick={() => closeDrawer()}
          >
            Пошив на заказ
          </Link>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow px="md">
            <Center>
              <Link href="/cart" onClick={() => closeDrawer()}>
                <Button variant="default">Корзина</Button>
              </Link>
            </Center>

            {isLoggedIn ? (
              <Link href="/lk" onClick={() => closeDrawer()}>
                <Button>Профиль</Button>
              </Link>
            ) : (
              <Link href="/auth" onClick={() => closeDrawer()}>
                <Button>Войти</Button>
              </Link>
            )}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
