import {
  Box,
  Center,
  Container,
  createStyles,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import size from "../../assets/images/how-get-head-size.svg";

const useStyles = createStyles((theme) => ({
  text: {
    fontFamily: "Jost",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: theme.fontSizes.md,
    lineHeight: "20px",
    color: theme.colors.gray[7],
  },

  hint: {
    fontFamily: "Jost",
    padding: theme.spacing.md,
    background: theme.colors.brand[5],
    color: theme.white,
    borderRadius: theme.radius.md,
    marginTop: "1rem",
    marginBottom: "1rem",
  },
}));

const Index = () => {
  const { classes, theme } = useStyles();

  return (
    <>
      <Paper p={"xl"}>
        <Container>
          <Title size={"x-large"}>
            Как правильно узнать размер головного убора
          </Title>

          <Text mt={"md"} c="dimmed" className={classes.text}>
            Размер головы является важным этапом при выборе головного убора. От
            того насколько правильно вы сделаете замер зависит ваш комфорт при
            носке. Для этого необходимо выполнить следующие действия:
          </Text>

          <Box className={classes.hint}>
            Для снятия мерок понадобится сантиметровая портновская лента. Если
            ее нет, используют нерастяжимую тесьму или полоску бумаги, на
            которых делают отметку, и затем измеряют с помощью линейки.
          </Box>
          <Center>
            <Image src={size} alt={"Иллюстрация"} />
          </Center>

          <Text
            variant="gradient"
            gradient={{
              from: theme.colors.brand[4],
              to: theme.colors.brand[8],
              deg: 45,
            }}
            mt={"xl"}
            fz="xl"
            fw={700}
          >
            Для того, чтобы правильно замерить голову, необходимо выполнить
            следующие шаги:
          </Text>

          <Text mt={"xs"} pl={"xs"} className={classes.text}>
            1) Измерить обхват головы. <b>Важно!</b> Измерительную ленту
            обернуть вокруг головы так, чтобы она проходила сзади по самой
            выступающей затылочной части,над ушами, а впереди - над бровями.
          </Text>

          <Text mt={"xs"} pl={"xs"} className={classes.text}>
            2) Проверьте, чтобы лента плотно прилегала к голове и не имела
            складок.
          </Text>
          <Text mt={"xs"} pl={"xs"} className={classes.text}>
            3) Запишите полученный результат. Обхват головы в сантиметрах
            является вашим размером.
          </Text>
        </Container>
      </Paper>
    </>
  );
};

export default Index;
