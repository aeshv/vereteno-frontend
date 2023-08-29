import Link from "next/link";
import {
  Box,
  createStyles,
  Flex,
  getStylesRef,
  Group,
  keyframes,
  rem,
} from "@mantine/core";
import {
  IconBuildingFactory2,
  IconClock,
  IconHistory,
} from "@tabler/icons-react";

export const rotate = keyframes({
  "0%": { transform: "rotate(0turn)" },
  "100%": { transform: "rotate(1turn)" },
});

const useStyles = createStyles((theme) => ({
  box: {
    borderRadius: "22px",
    minHeight: "6rem",
    width: "100%",
    padding: theme.spacing.md,
    overflow: "hidden",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    background: theme.colors.brand[0],
    position: "relative",
    msTransitionDelay: 300,

    "&:hover": {
      background: theme.colors.brand[1],
    },

    [theme.fn.smallerThan("sm")]: {
      minHeight: "186px",
      padding: theme.spacing.xs,
    },
  },

  title: {
    fontFamily: '"Jost"',
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: theme.fontSizes.xl,
    color: "#2c2a4f",
    ref: getStylesRef("title"),
    zIndex: 3,
    position: "relative",
  },

  text: {
    fontFamily: '"Jost"',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: theme.fontSizes.md,
    color: "#282739",
    zIndex: 3,
    position: "relative",
    textDecoration: "underline",
  },

  image: {
    zIndex: 2,
    pointerEvents: "none",
    position: "absolute",
    top: 0,
    right: 0,
    rotate: "0deg",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "9rem",
    height: "9rem",
    ref: getStylesRef("image"),
    animation: `${rotate} 6s ease-in-out infinite`,

    [theme.fn.smallerThan("sm")]: {
      top: "auto",
      bottom: 0,
      opacity: 0.8,
    },
  },
}));

export const AboutAdvertisementBlock = () => {
  const { classes, theme } = useStyles();
  return (
    <>
      <Link href={"/about"}>
        <Box className={classes.box}>
          <Group spacing={"sm"}>
            <IconBuildingFactory2 color={theme.colors.brand[9]} />
            <h2 className={classes.title}>
              Основано в <b>1962</b> году
            </h2>
          </Group>
          <span className={classes.text}>
            Узнайте подробнее о нашей истории
          </span>
          <div className={classes.image}>
            <IconClock size={"full"} color={theme.colors.brand[6]} />
          </div>
        </Box>
      </Link>
    </>
  );
};
