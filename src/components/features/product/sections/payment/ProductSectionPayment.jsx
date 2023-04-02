import React from "react";
import styles from "./payment.module.scss";

const ProductSectionPayment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <h2 className={styles.title}>Доставка</h2>
        <p className={styles.description}>
          Выберите нужные товары и добавьте их в корзину. Наша команда готова
          связаться с вами после оформления заказа, чтобы уточнить все детали и
          гарантировать максимальный уровень сервиса. В течение 1-3 рабочих дней
          ваш заказ будет отправлен, и вы получите его уже в ближайшее время.
          Обратите внимание, что сроки доставки могут варьироваться в
          зависимости от вашего региона. Но не переживайте, мы сделаем все
          возможное, чтобы доставить вам покупки максимально быстро и
          качественно!
        </p>
      </div>
      <div className={styles.block}>
        <h2 className={styles.title}>Доставка с примеркой</h2>
        <p className={styles.description}>
          Осуществляется с 11:00 до 20:00. Возможна оплата картой или наличными.
          (доступна только для Ростова-на-Дону)
        </p>
      </div>
      <div className={styles.block}>
        <h2 className={styles.title}>Самовывоз</h2>
        <p className={styles.description}>
          Самовывоз доступен в Ростове-на-дону по адресу: г. Ростов-на-Дону, ул.
          Курская д.1
        </p>
      </div>
      <div className={styles.block}>
        <h2 className={styles.title}>Возврат</h2>
        <p className={styles.description}>
          Вы можете осуществить возврат товара в течение 7-ми календарных дней
          после получения заказа.
        </p>
      </div>
    </div>
  );
};

export default ProductSectionPayment;
