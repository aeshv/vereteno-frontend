import {
  createStyles,
  Flex,
  getStylesRef,
  Group,
  List,
  Paper,
  rem,
  Space,
  Text,
  Title,
} from "@mantine/core";
import PageHead from "@/components/SEO/PageHead";

const useStyles = createStyles((theme) => ({
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

export const LegalPageOferta = () => {
  const { classes } = useStyles();
  return (
    <>
      <PageHead
        title={"Оферта - Веретено"}
        description={"Правовая информация - Оферта"}
      />
      <Paper shadow="xs" p="md">
        <Title order={1}>
          УСЛОВИЯ ПРОДАЖИ ТОВАРОВ ИНТЕРНЕТ-МАГАЗИНА &#34;Веретено&#34;
        </Title>
        <Space h={"xl"} />
        <Flex direction={"column"} gap={"xl"}>
          <Flex direction={"column"} gap={"md"}>
            <Title order={2} className={classes.title1} mb={"md"}>
              Термины
            </Title>
            <Space />
            <Flex direction={"column"} pl={"md"}>
              <Title order={3}>Продавец</Title>
              <Space />
              <Text className={classes.text}>
                Индивидуальный предприниматель Савченко Д. Н. оператор сайта
                vereteno-hats.ru ОГРН 307616104500078, ИНН 616400036661 адрес:
                г. Ростов-на-дону, ул. Курская д.15 Адрес магазина розничной
                торговли &#34;Веретено&#34; г. Ростов-на-дону. ул Курская д. 15
              </Text>
            </Flex>

            <Flex direction={"column"} pl={"md"}>
              <Title order={3}>Сайт</Title>
              <Space />
              <Text className={classes.text}>
                веб-сайт продавца, www.vereteno-hats.ru
              </Text>
            </Flex>

            <Flex direction={"column"} pl={"md"}>
              <Title order={3}>Заказ</Title>
              <Space />
              <Text className={classes.text}>
                соответствующим образом оформленный и размещённый заказ Клиента
                (заполнены соответствующие поля на сайте в разделе «Корзина»,
                «оформление заказа»), адресованный Продавцу, на продажу и
                доставку выбранного на Сайте Товара по указанному Клиентом
                адресу.
              </Text>
            </Flex>
          </Flex>

          <Flex direction={"column"}>
            <Title order={2} className={classes.title1} mb={"md"}>
              Общие положения
            </Title>
            <Space />
            <List
              className={classes.list}
              withPadding
              sx={{
                listStyle: "disc !important",
                paddingLeft: "1rem !important",
              }}
            >
              <List.Item>
                {" "}
                Настоящие Условия продажи товара (Далее — Условия, Оферта), а
                также информация о Товаре, представленная на Сайте, являются
                публичной офертой в соответствии со статьей 435 и частью 2
                статьи 437 ГК РФ
              </List.Item>
              <List.Item>
                {" "}
                Заказывая Товар через Сайт, оформляя Заказ по телефону, Клиент
                подтверждает ознакомление, понимание, принятие и безоговорочное
                согласие с настоящими Условиями, изложенными ниже
              </List.Item>
              <List.Item>
                Продажа Товара регулируется: Федеральным Законом от 07.02.1992
                г. N 2300-1 «О защите прав потребителей », Постановлением
                Правительства РФ от 27.09.2007г. N 612 «Об утверждении правил
                продажи товаров дистанционным способом», Постановлением
                Правительства от 19.01.1998 г. N 55 «Об утверждении Правил
                продаж отдельных видов товаров, перечня товаров длительного
                пользования, на которые не распространяется требование
                покупателя о безвозмездном предоставлении ему на период ремонта
                или замены аналогичного товара, перечня непродовольственных
                товаров надлежащего качества, не подлежащих возврату или обмену
                на аналогичный товар других размера, формы, габарита, фасона,
                расцветки или комплектации»
              </List.Item>
              <List.Item>
                Продавец имеет право без предварительного уведомления вносить
                изменения в данные Условия. Изменения вступают в силу по их
                публикации на Сайте и применяются к любому Заказу, сделанному
                после публикации.
              </List.Item>
              <List.Item>
                {" "}
                Вся текстовая информация и графические изображения товаров,
                размещаемых на Сайте, являются собственностью Продавца или его
                контрагентов. Просмотр информации или распечатка страниц Сайта
                разрешается только для личного использовани
              </List.Item>
            </List>
          </Flex>

          <Flex direction={"column"}>
            <Title order={2} className={classes.title1} mb={"md"}>
              {" "}
              Информация о Товаре
            </Title>
            <Space />
            <List
              className={classes.list}
              withPadding
              sx={{
                listStyle: "disc !important",
                paddingLeft: "1rem !important",
              }}
            >
              <List.Item>
                Информация о Товаре размещается на Сайте и предоставляется
                Продавцом. Для уточнения информации, касающейся свойств и
                характеристик Товара можно обратиться по следующим контактам:
                для Клиентов из России, Казахстана, Белоруссии в русской версии
                Сайта — https://veretenohats.ru/page/contacts
              </List.Item>
              <List.Item>
                Доставка товаров предусмотрена для территории Российской
                Федерации, Белоруссии, Казахстана
              </List.Item>
              <List.Item>
                Продавец вправе в одностороннем порядке ограничить количество
                товарных позиций в одном заказе, сумму одного заказа, форму
                возможной оплаты заказа, а также количество заказов,
                единовременно отправляемых на один адрес одному Клиенту
              </List.Item>
            </List>
          </Flex>

          <Flex direction={"column"}>
            <Title order={2} className={classes.title1} mb={"md"}>
              Регистрация на Сайте
            </Title>
            <Space />
            <List
              className={classes.list}
              withPadding
              sx={{
                listStyle: "disc !important",
                paddingLeft: "1rem !important",
              }}
            >
              <List.Item>
                Для оформления Заказов Клиенту необходимо зарегистрироваться на
                Сайте (создать учетную запись) и оформить заказ самостоятельно
                либо с помощью специалиста по работе с клиентами способами,
                доступными для клиентов соответствующих стран
              </List.Item>
              <List.Item>
                Продавец не несет ответственности за неисполнение Заказа
                (задержку в исполнении) по причине сообщения или указания
                Покупателем неточных или недостоверных данных о себе
              </List.Item>
              <List.Item>
                Клиент обязуется не сообщать третьим лицам логин и пароль,
                указанные при регистрации. В случае возникновения у Клиента
                подозрений относительно безопасности его логина и пароля или
                возможности их несанкционированного использования третьими
                лицами, Клиент обязуется незамедлительно уведомить об этом
                Продавца по адресу электронной почты laboratoriy-hat@yandex.ru
                или по телефонам службы по ра с клиентами + 7 9034331144, + 7 9094331144 с 11:00
                до 19:00 по московскому времени. До принятия мер Продавцом,
                Клиент может самостоятельно изменить пароль
              </List.Item>
              <List.Item>
                Продавец оставляет за собой право в одностороннем порядке
                удалить учетную запись Клиента на Сайте или ограничить доступ к
                сайту через учетную запись, если в отношении учётной записи есть
                подозрения о ее компрометации либо использовании для
                осуществления массовых рассылок (спама)
              </List.Item>
            </List>
          </Flex>

          <Flex direction={"column"}>
            <Title order={2} className={classes.title1} mb={"md"}>
              {" "}
              Оформление заказа. Оплата Товара. Подтверждение заказа
            </Title>
            <Space />
            <List
              className={classes.list}
              withPadding
              sx={{
                listStyle: "disc !important",
                paddingLeft: "1rem !important",
              }}
            >
              <List.Item>
                Клиент оформляет Заказа самостоятельно через Сайт либо через
                Клиентский центр (по телефону)
              </List.Item>
              <List.Item>
                Покупатель осуществляет 100% предоплату стоимости Товара.
              </List.Item>
              <List.Item>
                При оформлении заказа через сайт: Покупатель осуществляет 100%
                предоплату стоимости Товара онлайн. После чего Продавец
                направляет Покупателю на указанный им электронный адрес
                подтверждение заказа с информацией о Товаре, иными параметрами
                заказа (стоимость товаров, доставки и иных услуг, в тех случаях,
                когда эти услуги оплачиваются) (Далее — Подтверждение заказа)
              </List.Item>
              <List.Item>
                При возникновении дополнительных, непредусмотренных (превышающих
                стандартную стоимость доставки Товара по территории Российской
                Федерации) расходов на доставку, таможенное оформление Товара, в
                том числе налогов, таможенных пошлин, продавец уведомляет
                Клиента о таких дополнительных затратах и их размере в
                двухдневный срок. Клиент вправе оплатить такие дополнительные
                затраты либо отказаться от заказа
              </List.Item>
              <List.Item>
                Оплата производится Покупателем путем оплаты банковской картой
                через онлайн кассу (заказ через сайт) либо по выставленному
                электронному счету (заказ через Клиентский центр). В случае если
                оплату банковской картой невозможно осуществить, оплата
                производится путем безналичного перевода денежных средств на
                банковский счет Продавца. Оплата наличными, либо через платежные
                терминалы, с использованием альтернативных средств платежа, не
                предусмотрена. Виды банковских карт, принимаемые к оплате: Visa,
                MasterCard, Мир. Оплата производится в рублях Российской
                Федерации.
              </List.Item>
              <List.Item>
                Моментом заключения договора розничной купли-продажи и
                вступления его в силу является оплата Покупателем Товара и
                поступление денежных средств на расчетный счет Продавца, что
                является одновремен моментом получения Продавцом сообщения о
                намерении Покупателя приобрести Товар. Осуществление Покупателем
                оплаты является подтверждением его согласия с Офертой, порядком
                оплаты, условиями доставки и возврата Товара, а также
                подтверждением того, что указанные свойства Товара соответствуют
                его заказу
              </List.Item>
              <List.Item>
                Продавец не собирает и не сохраняет платежную информацию
                Покупателя (в том числе номер банковской карты, банк-эмитент
                банковской карты, срок её действия, секретный код, т.д.)
              </List.Item>
              <List.Item>
                Заказ считается принятым Продавцом после получения Клиентом
                сообщения по адресу электронной почты, указанному в
                регистрационной форме, с Подтверждением заказ Продавец оставляет
                за собой право аннулировать Заказ на этапе Подтверждения заказа.
                Продавец оставляет за собой право согласовать, уточнить с
                Клиентом данные Заказа по телефону. При невозможности связаться
                с Клиентом в течение 2 (двух) дней, сделанный клиентом Заказ
                аннулируется, денежные средства возвращаются Продавцом по тем
                банковским реквизитам, с которых был осуществлен платеж.
              </List.Item>
              <List.Item>
                Дата доставки Заказа указывается в Подтверждении заказа. Дата
                зависит от наличия заказанных Товаров на складе Продавца и
                времени, необходимого на обработку и доставку Заказа
              </List.Item>
              <List.Item>
                В случае отсутствия заказанных товаров полностью или частично на
                складе Продавца, Продав связывается с Покупателем способами,
                указанными при оформлении Заказа. Покупатель информирует
                Продавца либо о согласии принять Товар в ином количестве либо
                аннулировать Заказ. При невозможности связаться с Клиентом,
                отсутствии ответа от Клиента в течение 2 (двух) дней Заказ, в
                полном объеме может быть аннулирован Продавцом, о чем Продавец
                направляет электронное письмо на адрес Клиента, указанный при
                регистрации. Денежные средства возвращаются Продавцом по тем
                банковским реквизитам, с которых был осуществлен платеж.
              </List.Item>
              <List.Item>
                Продавец имеет право в одностороннем порядке без предупреждения
                изменять цену на Товар до Подтверждения заказа
              </List.Item>
              <List.Item>
                Клиент обязуется по запросу Продавца предоставить копию паспорта
                владельца банковской карты (дв страниц: разворота с фотографией
                и со штампом о регистрации по месту постоянного пребывания — для
                общегражданского паспорта гражданина Российской Федерации) или
                иного идентифицирующего документа согласно праву страны
                Покупателя, копию банковской карты с обеих сторон (с
                отображением последних четырех цифр) согласно Правилам
                международных платежных систем, в целях проверки личности
                владельца и его правомочности на использование карты. Продавец
                вправе аннулировать Заказ при непредставлении указанных
                документов, либо при наличии сомнений в их подлинности.
              </List.Item>
              <List.Item>
                Продавец вправе аннулировать Заказ по причинам указанным выше,
                либо без объяснения причин. Денежные средства возвращаются
                Продавцом по тем банковски реквизитам, с которых был осуществлен
                платеж.
              </List.Item>
            </List>
          </Flex>

          <Flex direction={"column"}>
            <Title order={2} className={classes.title1} mb={"md"}>
              Доставка товара
            </Title>
            <Space />
            <List
              className={classes.list}
              withPadding
              sx={{
                listStyle: "disc !important",
                paddingLeft: "1rem !important",
              }}
            >
              <List.Item>
                Клиент обязуется принять Заказ в согласованные сроки доставк
              </List.Item>
              <List.Item>
                Доставка Товара осуществляется любой транспортной компанией,
                удобной Покупателю, из представленных в Ростове-на-Дону. Расходы
                по доставке Товара несет Покупатель. Передача Товара
                Транспортной компании для доставки Покупателю осуществляется
                только после поступления полной стоимости Товара на счет
                Продавца
              </List.Item>
              <List.Item>
                Доставка Товара осуществляется лично в руки Покупателю
                (Получателю) либо уполномоченному им лицу по адресу, указанному
                Покупателем в зак Представитель Транспортной компании
                связывается с Покупателем (Получателем) для уточнения времени
                доставки Товара. Представитель Транспортной компании вправе
                считать лицо, принимающее заказ от имени Покупателя (Получателя)
                по указанному адресу, надлежаще уполномоченным без
                предоставления доверенности и документа, удостоверяющего
                личность.
              </List.Item>
              <List.Item>
                При получении Товара Покупатель (Получатель) вправе вскрыть
                посылку и проверить ее содержимое. Примерка, а также возврат не
                подошедшего Товара сотруднику транспортной службы не
                предусмотрены.
              </List.Item>{" "}
              <List.Item>
                Подписывая документ о получении Товара, Покупатель подтверждает,
                целостность упаковки, надлежащ состояние Товара, получение
                Сопутствующих документов.
              </List.Item>
              <List.Item>
                В случае отсутствия Покупателя, Получателя, их представителей в
                месте получения Товара в согласованное время, отказа от доставки
                (до вскрытия упаковки), представитель транспортной службы
                возвращает Товар Продавцу. Продавец возвращает Покупателю
                средства, уплаченные за Товар за вычетом расходов Продавца на
                доставку и возврат Товара. Возврат средств осуществляется не
                позднее, чем через три банковских дня с момента получения
                возвращенного Товара Продавцом
              </List.Item>
              <List.Item>
                Право собственности на Товар, риск его случайной гибели или
                повреждения переходит к Клиенту в момент передачи Товара
                транспортной компании. Подтверждением перехода права
                собственности на Тов является номер транспортной накладной,
                выданной Продавцом или Курьерской службой.
              </List.Item>
            </List>
          </Flex>

          <Flex direction={"column"}>
            <Title order={2} className={classes.title1} mb={"md"}>
              Возврат товара
            </Title>
            <Space />
            <List
              className={classes.list}
              withPadding
              sx={{
                listStyle: "disc !important",
                paddingLeft: "1rem !important",
              }}
            >
              <List.Item>
                {" "}
                Условия описывают порядок возврата Товара, приобретенного на
                Сайте. Возврат Товара, приобретенного в розничных магазинах,
                осуществляется в ином порядке
              </List.Item>
              <List.Item>
                Покупатель вправе отказаться от Товара в любое время до его
                передачи, в момент передачи товара курьером и после его передачи
                — в течение 7 календарных дней
              </List.Item>
              <List.Item>
                Возврат Товара надлежащего качества возможен в случае, если
                сохранены его товарный вид, пломбы, фабричные ярлыки,
                оригинальная упако потребительские свойства, а также документ,
                подтверждающий факт и условия покупки указанного Товара.
              </List.Item>
              <List.Item>
                {" "}
                При наличии спора о причинах возникновения недостатков, факте
                употребления товара и сохранности его товарного вида будет
                проведена независимая экспертиза товара.
              </List.Item>
              <List.Item>
                {" "}
                Покупатель не вправе отказаться от товара надлежащего качества,
                имеющего индивидуальноопределенные свойства
              </List.Item>
              <List.Item>
                Возврат Товара ненадлежащего качества возможен в сроки и в
                порядке, предусмотренные законодательством{" "}
              </List.Item>
              <List.Item>
                Возврат суммы, уплаченной Покупателем, осуществляется тем же
                способом, которым была совер оплата Товара, не позднее чем через
                10 (десять) дней с даты предъявления Покупателем
                соответствующего требования. Датой предъявления Покупателем
                требования о возврате является дата получения Продавцом
                возвращаемого Товара и подтверждение сохранности его товарного
                вида и потребительских свойств, а в случае возврата Товара
                ненадлежащего качества — дата получения Товара Продавцом при
                условии наличия подтверждения его ненадлежащего качества.
              </List.Item>
              <List.Item>
                {" "}
                Возврат Товара (как надлежащего так и ненадлежащего качества)
                осуществляется путем подачи заявления в Клиентский центр
                Продавца по телефону: +79034331144, +79094331144 либо по адресу электронной
                почты laboratoriyhat@yandex.r Возврат Товара может быть
                осуществлен лично по адресу: г. Ростов-на-Дону ул. Курская 15
              </List.Item>
              <List.Item>
                {" "}
                Клиент возвращает Товар со всеми принадлежностями и полным
                комплектом аксессуаров, указанным в документации на Товар.
                Возвращаемый Товар должен быть упакован обеспечивающим
                сохранность при доставке образом
              </List.Item>
              <List.Item>
                {" "}
                В случае возврата товара надлежащего качества, расходы по
                возврату товара несет Покупатель. В случае возврата товара
                ненадлежащего качества, расходы по возврату товара несет Продаве
              </List.Item>
              <List.Item>
                Продавец возвращает денежные средства Покупателю за удержанием
                расходов на транспортировку Товара надлежащего качества.
                Представит транспортной компании информирует клиента о стоимости
                транспортировки в момент оформления возврата.
              </List.Item>
              <List.Item>
                {" "}
                Товары надлежащего качества, которые не подлежат возврату или
                обмену на аналогичный товар других размера, формы, габарита,
                фасона, расцветки или комплектации, указаны в перечне,
                утверждённом Правительством Российской Федерации
              </List.Item>
              <List.Item>
                {" "}
                Товаром ненадлежащего качества является товар, который имеет
                недостатки и не может обеспечить исполнение своих функциональных
                качеств. Отличие элементов дизайна, оформления от заявленных в
                описании на сайте, расхождение оттенков не относится к
                неисправности или не функциональности товара
              </List.Item>
            </List>
          </Flex>

          <Flex direction={"column"}>
            <Title order={2} className={classes.title1} mb={"md"}>
              Конфиденциальность и защита персональных данных Клиентов
            </Title>
            <Space />
            <List
              className={classes.list}
              withPadding
              sx={{
                listStyle: "disc !important",
                paddingLeft: "1rem !important",
              }}
            >
              <List.Item>
                {" "}
                Продавец признает важность конфиденциальности предоставленной
                Покупателем личной информации. Продавец обеспечивает
                конфиденциальность персональных данных о покупателе в
                соответствии с законодательством Российской Федерации в области
                персональных данных
              </List.Item>
              <List.Item>
                Осуществляя заказ Товара, создавая учетную запись, Покупатель
                дает Продавцу согласие на обработку его персональных данных,
                указанных в заказе, учётной записи любым разрешенным
                законодательством РФ способом, включая трансграничную передачу,
                для целей исполне договора розничной купли-продажи с правом
                передачи таких данных Транспортной компании в объеме,
                необходимом для доставки Товара. Покупатель также дает согласие
                Продавцу на использование данных для направления Покупателю
                рекламной информации о Продавце, его товарах и услугах,
                проведения электронных и sms опросов, проведение конкурсов и
                иных промоакций, анализа результатов маркетинговых акций,
                контроля удовлетворенности клиентов качеством оказываемых
                Продавцом услуг. Такое согласие действует бессрочно до тех пор,
                пока не будет отозвано Покупателем.
              </List.Item>
              <List.Item>
                {" "}
                При регистрации на Сайте или передаче данных специалисту по
                работе с клиентами по телефону Покупатель предоставляет ИП
                Савченко Д. Н. следующие данные: имя, фамилию адрес электронной
                почты, пол, дату рождения, номер телефона, адрес для доставки
                Товара, данные об аккаунтах в социальных сетях. При возврате
                Товара, для перечисления Продавцом денежных средств, Покупатель
                предоставляет паспортные данные и данные банковской карты.
                Данную информацию Продавец вправе использовать для выполнения
                своих обязательств перед Покупателем, в том числе путем
                предоставления информации третьим лицам на основании договора в
                целях соблюдения обязательств перед Покупателем либо требований
                законодательства.
              </List.Item>
              <List.Item>
                {" "}
                Покупатели, а также лица, посещающие сайт, соглашаются с тем,
                что с целью проведения маркетинговых исследований, формирования
                аналитических отчетов и других маркетинговых действий Продаве
                может поручить третьим лицам обработку персональных данных, в
                том числе таких как: дата рождения, адрес электронной почты,
                данные об аккаунтах в социальных сетях, сведения об истории
                покупок, сведения об интересах на основании договора,
                заключенного с такими лицами, при условии соблюдения требований
                законодательства РФ об обеспечении конфиденциальности
                персональных данных и безопасности персональных данных при их
                обработке.
              </List.Item>
              <List.Item>
                {" "}
                Отказ от получения рассылок, рекламной и иной информации
                осуществляется одним из способов
              </List.Item>
              <List.Item>
                {" "}
                выбрать параметры рассылки или отказаться от нее в настройках
                учётной записи
              </List.Item>
              <List.Item>
                обратиться в Клиентский центр по телефону + 79034331144, + 7 9094331144 или
                направить электронное письмо на адрес laboratoriy-hat@yandex.ru
              </List.Item>
              <List.Item>
                {" "}
                Продавец вправе использовать технологию «cookies». «Cookies» не
                содержат конфиденциальную информацию. Посетитель сайта или
                клиент настоящим дает согласие на сбор, анализ и использование
                cookies, в том числе третьими лицами для целей формирования
                статистики и оптимизации рекламных сообщений. Продавец получает
                информацию об ipадресе посетителя Сайта https://vereteno-hats.ru
                Данная информация не используется для установления личности
                посетителя
              </List.Item>
              <List.Item>
                {" "}
                Продавец вправе осуществлять записи телефонных разговоров с
                Клиентом. При этом Продавец обязуется принимать разумные меры
                для предотвращения несанкционированного досту к информации,
                полученной в ходе телефонных переговоров, и/или передачи ее
                третьим лицам, не имеющим непосредственного отношения к
                исполнению Заказов.
              </List.Item>
            </List>
          </Flex>

          <Flex direction={"column"}>
            <Title order={2} className={classes.title1} mb={"md"}>
              Прочие условия
            </Title>
            <Space />
            <List
              className={classes.list}
              withPadding
              sx={{
                listStyle: "disc !important",
                paddingLeft: "1rem !important",
              }}
            >
              <List.Item>
                {" "}
                К отношениям между Покупателем, посетителями сайта и Продавцом
                применяется право Российской Федераци
              </List.Item>
              <List.Item>
                Все претензии, связанные с заключением, исполнением или
                расторжением договора розничной купли-продажи, принимаются ИП
                Савченко Д. Н. по адресу, указанному в настоящих Услови
              </List.Item>
            </List>
          </Flex>

          <Flex direction={"column"}>
            <Title order={2} className={classes.title1} mb={"md"}>
              Реквизиты
            </Title>
            <Space />
            <List
              className={classes.list}
              withPadding
              sx={{
                listStyle: "disc !important",
                paddingLeft: "1rem !important",
              }}
            >
              <List.Item>Индивидуальный предприниматель</List.Item>
              Савченко Дмитрий Николаевич
              <List.Item>ИНН 61640036661</List.Item>
              <List.Item>ОГРН 307616104500078</List.Item>
              <List.Item>Юр. адрес: 344039 г. Ростов-на-Дону</List.Item>
              ул. Курская д. 15
              <List.Item>
                Почтовый адрес: 344039 г. Ростов-на-Дону, ул. Курская д. 15
              </List.Item>
              <List.Item>Р/сч No 40802810052090032224</List.Item>
              <List.Item>БИК No 046015602</List.Item>
              <List.Item>К/с No 30101810600000000602</List.Item>
              <List.Item>Юго-Западный банк ПАО Сбербанк</List.Item>
              г. Ростов-на-Дону ИНН/КПП 7707083893 / 616443001
            </List>
          </Flex>
        </Flex>
      </Paper>
    </>
  );
};
