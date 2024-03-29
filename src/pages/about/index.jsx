import React from "react";
import PageHead from "@/components/SEO/PageHead";
import { Container, createStyles, rem, Text } from "@mantine/core";
import { AboutPageBanner } from "@/components/features/AboutPage/AboutPageBanner";
import { FaqWithBg } from "@/components/entity/faq/FaqWithBg";

const useStyles = createStyles((theme) => ({
  text: {
    fontFamily: '"Jost"',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: theme.fontSizes.md,
    lineHeight: "20px",
    color: "#282739",
  },
}));

const Index = () => {
  const { classes } = useStyles();

  return (
    <>
      <PageHead title={"О нас - Веретено, магазин головных уборов"} />
      <Container pb={"xl"}>
        <AboutPageBanner />
        <Text mt={"md"} className={classes.text}>
          Веретено - это магазин специализирующийся на продаже головных уборов,
          мужских шляп, женских шляп и аксессуаров. В нашем ассортименте
          представлены головные уборы со всех стран мира и все они наилучшего
          качества. Мы предоставляем широкий выбор головных уборов разных
          национальностей - это американские ковбойские шляпы, вьетнамские и
          британские пробковые шлемы, известные во всем мире соломенные шляпы
          канотье, мексиканские сомбреро, баварские фетровые шляпы и даже
          афганские шапки пуштунки. Так же у нас можно купить стильные опорные
          трости для ходьбы, сделанные вручную лучшими индийскими мастерами.
        </Text>
        <Text mt={"md"} className={classes.text}>
          Все наши изделия проходят контроль качества как со стороны фабрик, так
          и с нашей стороны - мы тщательно осматриваем товар перед отправкой его
          вам. Перепроверяем соответствие размеров, осматриваем на наличие
          вмятин, пятен и прочих дефектов. Мы гарантируем, что вы получите шляпу
          в надежной упаковке, в идеальном состоянии. Все способы доставки,
          оплаты, точный срок и стоимость отобразятся при оформлении заказа.
          Нужно добавить товар в корзину, нажать оформить заказ и ввести ваш
          город.
        </Text>
        <Text mt={"md"} className={classes.text} mb={"xl"}>
          Наши принципы: Закон о защите прав потребителей говорит, что
          покупатель имеет право вернуть товар в течение 14 дней со дня покупки.
          Мы отменяем это правило и даем всем нашим покупателям 30 дней на
          возврат товара! В нашем магазине действует бесплатная доставка по
          России. При покупке от 4000 рублей (при оплате через сайт) вы
          оплачиваете только ваш заказ, а доставку мы берем на себя. 100%
          возврат денег в случае неудовлетворения качеством нашего товара.
          Индивидуальный подход к покупателем. Предоставляем подробную
          консультацию по шляпам и остальным товарам, помогаем в выборе. Так же
          всегда отправляем фото и видео товара по запросу.
        </Text>

        <FaqWithBg />
      </Container>
    </>
  );
};

export default Index;
