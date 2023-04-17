import {
  UnstyledButton,
  Checkbox,
  Text,
  Image,
  SimpleGrid,
  createStyles,
  rem,
} from "@mantine/core";
import { useUncontrolled } from "@mantine/hooks";

const useStyles = createStyles((theme, { checked, color }) => ({
  button: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    transition: "background-color 150ms ease, border-color 150ms ease",
    border: `${rem(1)} solid ${
      checked
        ? theme.fn.variant({ variant: "outline", color: theme.primaryColor })
            .border
        : theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[3]
    }`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
    backgroundColor: checked
      ? theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .background
      : theme.colorScheme === "dark"
      ? theme.colors.dark[8]
      : theme.white,
  },

  body: {
    flex: 1,
    marginLeft: theme.spacing.xs,
  },
  circle: {
    width: 40,
    height: 40,
    background: color,
  },
}));

export function ImageCheckbox({
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  className,
  color,
  ...others
}) {
  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  const { classes, cx } = useStyles({ checked: value, color: color });

  return (
    <UnstyledButton
      {...others}
      onClick={() => handleChange(!value)}
      className={cx(classes.button, className)}
    >
      <div className={classes.circle} />

      <div className={classes.body}>
        <Text weight={500} size="sm" sx={{ lineHeight: 1 }}>
          {title}
        </Text>
      </div>

      <Checkbox
        checked={value}
        onChange={() => {}}
        tabIndex={-1}
        styles={{
          input: { cursor: "pointer" },
          body: { marginLeft: "0.625rem" },
        }}
      />
    </UnstyledButton>
  );
}

const mockdata = [
  { title: "Красный", color: "#dddd" },
  { title: "Белый", color: "#00cacc" },
  { title: "Вельветовый", color: "#12aacc" },
  { title: "Зеленый", color: "#0bbbba" },
  { title: "Бежевый", color: "#10bc" },
  { title: "Голубой", color: "#11111f" },
  { title: "Коричневый", color: "#1661" },
  { title: "Бирюзовый", color: "#ddddbb" },
];

export function ColorSelect() {
  const items = mockdata.map((item) => (
    <ImageCheckbox {...item} key={item.title} />
  ));
  return <SimpleGrid cols={1}>{items}</SimpleGrid>;
}
