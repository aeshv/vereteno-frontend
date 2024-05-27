import { useRef, useState } from "react";
import {
  createStyles,
  NumberInput,
  NumberInputHandlers,
  ActionIcon,
  rem,
} from "@mantine/core";
import { IconPlus, IconMinus } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${rem(6)} ${theme.spacing.xs}`,
    borderRadius: theme.radius.sm,
    border: `${rem(1)} solid 'transparent'`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
    maxWidth: "fit-content",
    "&:focus-within": {
      borderColor: theme.colors[theme.primaryColor][6],
    },
  },

  control: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[3]
    }`,

    "&:disabled": {
      borderColor:
        theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[3],
      opacity: 0.8,
      backgroundColor: "transparent",
    },

    "&:hover": {
      borderColor: theme.colors.brand[3],
      backgroundColor: theme.white,
    },
  },

  input: {
    textAlign: "center",
    paddingRight: `${theme.spacing.sm} !important`,
    paddingLeft: `${theme.spacing.sm} !important`,
    height: rem(28),
    flex: 1,
    maxWidth: "40px",
  },
}));

export function QuantityInput({
  min = 1,
  max = 10,
  current,
  handleChange,
  disabled,
}) {
  const { classes } = useStyles();
  const [value, setValue] = useState(current);

  const onClickChange = (value) => {
    handleChange(value);
    setValue(value);
  };
  const onIncrement = () => {
    handleChange(value + 1);
    setValue((prev) => prev + 1);
  };
  const onDecrement = () => {
    handleChange(value - 1);
    setValue((prev) => prev - 1);
  };

  return (
    <div className={classes.wrapper}>
      <ActionIcon
        size={28}
        variant={"transparent"}
        onClick={(e) => onDecrement(e)}
        disabled={value === min || disabled}
        className={classes.control}
        onMouseDown={(event) => event.preventDefault()}
      >
        <IconMinus size="1rem" stroke={1.5} />
      </ActionIcon>

      <NumberInput
        variant="unstyled"
        min={min}
        max={max}
        value={value}
        onChange={onClickChange}
        classNames={{ input: classes.input }}
        readOnly={disabled}
      />
      <ActionIcon
        size={28}
        variant="transparent"
        onClick={() => onIncrement()}
        disabled={value === max || disabled}
        className={classes.control}
        onMouseDown={(event) => event.preventDefault()}
      >
        <IconPlus size="1rem" stroke={1.5} />
      </ActionIcon>
    </div>
  );
}
