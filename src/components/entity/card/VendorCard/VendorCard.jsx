import { createStyles, Paper, Text, ThemeIcon, rem } from "@mantine/core";
import { IconColorSwatch } from "@tabler/icons-react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xs,
    paddingLeft: `calc(${theme.spacing.xs} * 2)`,

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },
  },
}));

export function VendorCard({
  index,
  currentActive,
  material,
  size,
  color,
  handleChangeVendor = () => {},
}) {
  const { classes } = useStyles();

  return (
    <Paper
      onClick={handleChangeVendor}
      withBorder={index !== currentActive}
      radius={index !== currentActive ? "md" : 0}
      className={classes.card}
      sx={{
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: rem(6),
          backgroundColor: color?.hex,
        },
      }}
    >
      <Text size="md" color="dimmed">
        Материал: <b>{material}</b>
      </Text>
      {/*<Text size="md" color="dimmed">*/}
      {/*  Размеры:{" "}*/}
      {/*  <b>*/}
      {/*    {size?.map(({ size, index }) => (*/}
      {/*      <span key={index}>{size} </span>*/}
      {/*    ))}*/}
      {/*  </b>*/}
      {/*</Text>*/}
      <Text size="md" color="dimmed">
        Цвет: <b>{color?.name}</b>
      </Text>
    </Paper>
  );
}
