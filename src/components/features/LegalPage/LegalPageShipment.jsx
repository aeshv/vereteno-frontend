import {
  Box,
  Card,
  createStyles,
  Flex,
  Paper,
  Text,
  Title,
} from "@mantine/core";

export const legalTextStyles = createStyles((theme) => ({
  list: {
    color: theme.black,
    fontSize: 16,
    fontFamily: `Jost, ${theme.fontFamily}`,
  },

  text: {
    color: theme.black,
    fontSize: 16,
    fontFamily: `Jost, ${theme.fontFamily}`,
  },

  title1: {
    color: theme.black,
    fontSize: 28,
    fontFamily: `Jost, ${theme.fontFamily}`,
  },
}));

export const LegalPageShipment = () => {
  const { classes } = legalTextStyles();
  return (
    <>
      <Paper shadow="xs" p="md">
        <Flex direction={"column"} gap={"xl"}>
          <Title order={1}>Доставка и оплата</Title>
          <Text className={classes.text}>
            Наш менеджер подтверждает заказы по телефону в рабочие дни ( пн – сб
            с 9:00 до 19:00) Заказы отправляются после 100% оплате на сайте
            САМОВЫВОЗ В ГОРОДЕ РОСТОВ-НА-ДОНУ: Забрать выбранный вами товар
            можно самостоятельно по адресам:
          </Text>
          <Flex direction={"row"} wrap={"nowrap"} gap={"md"}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className={classes.text}
            >
              1) ул .Большая Садовая , д.46/30 «ЦУМ» , 2 этаж ,отдел Головные
              Уборы «ВЕРЕТЕНО» время работы: пн-сб с 10:00 до 20:00 , вс с 10:00
              до 19:00 тел. 8(903)4331144
            </Card>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className={classes.text}
            >
              2) ул.Курская, д.15,магазин Головные Уборы «ВЕРЕТЕНО» время
              работы: пн-пт с 9:00 до 18:00, сб с 10:00 до 16:00,вс-выходной
              тел.8(909)4351234
            </Card>
          </Flex>
          <Box>
            <Text className={classes.title1}>
              ДОСТАВКА ПО ГОРОДУ РОСТОВ-НА-ДОНУ
            </Text>
            <Text className={classes.text}>
              {" "}
              Доставка осуществляется любой удобной для Покупателя транспортной
              компанией представленной в городе Ростове-на-Дону. Доставку
              оплачивает Покупатель.{" "}
            </Text>
          </Box>
          <Box>
            <Text className={classes.title1}> ДОСТАВКА ПО РОССИИ</Text>
            <Text className={classes.text}>
              {" "}
              Доставка осуществляется любой удобной для Покупателя транспортной
              компанией представленной в городе Ростове-на-Дону. Доставку
              оплачивает Покупатель.{" "}
            </Text>
          </Box>
          <Box>
            <Text className={classes.title1}>Оплата</Text>
            <Text className={classes.text}>
              Оплата производится с использованием российских банковских карт
              следующих платежных систем: Visa, MasterCard, МИР.
            </Text>
          </Box>
        </Flex>
      </Paper>
    </>
  );
};
