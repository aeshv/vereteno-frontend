import SmallInfoBlock from "@/components/shared/SmallInfoBlock/SmallInfoBlock";
import React from "react";
import styles from "./guarantee.module.scss";

const ProductSectionGuarantee = () => {
  return (
    <div>
      {/* Если Вам необходимо измерить размер головы для выбора подходящего
      головного убора, то понадобится рулетка или метр из гибкого материала. Вы
      можете использовать ткань, гнущийся пластик или металл. Начните с того,
      чтобы отступить 2 пальца над бровями. Оберните ленту вокруг головы в этой
      области, убедившись, что она проходит над ушами. Если Вы хотите получить
      наиболее точный результат, измерьте несколько раз. При измерении лента
      должна быть натянута, чтобы не произошло перекоса. Если Вы попадаете между
      двумя размерами, рекомендуется выбрать меньший. Стандартные размеры головы
      и формы отличаются у мужчин и женщин. Например, у мужчин наиболее
      распространенный размер головы составляет 57 см, а средний размер шляпы
      для женщин - 55 см. Размер головного убора может зависеть от материала
      шляпы. Например, шляпа из мягкого фетра может соответствовать сразу двум
      размерам. Регулируемые головные уборы помечаются буквами S, M, L, XL, а
      нерегулируемые - числами, например, 54, 55, 56 и т.д. Если Вам не подходит
      доступный размер головного убора, то Вы можете его уменьшить. Для этого
      подложите под налобник фетровую вставку или мягкий шнурок. Это поможет
      Вам, если Вы любите шляпы, но не можете найти идеальную по размеру. */}
      <div className={styles.blocks}>
        <SmallInfoBlock
          title="14 дней на обмен и возврат"
          description="Если вас, что-то не устроит в товаре, мы обменяем его на новый или вернем деньги"
        />
        <SmallInfoBlock
          title="1 год на головные уборы"
          description="Обеспечиваем гарантийные обязательства на весь ассортимент"
        />
        <SmallInfoBlock
          title="Бесплатный ремонт в течение гарантийного периода"
          description="Мы производим бесплатный ремонт товара, если он неисправен из-за заводского брака в течение гарантийного периода."
        />
        <SmallInfoBlock
          title="Гарантия качества на 2 года"
          description="Наши товары соответствуют высоким стандартам качества и мы гарантируем их работоспособность в течение 2 лет."
        />
      </div>
    </div>
  );
};

export default ProductSectionGuarantee;