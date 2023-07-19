import SmallInfoBlock from "@/components/shared/SmallInfoBlock/SmallInfoBlock";
import React from "react";
import styles from "./guarantee.module.scss";

const ProductSectionGuarantee = () => {
    return (
        <div>
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
