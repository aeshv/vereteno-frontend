import React from 'react'
import styles from './sectionAbout.module.scss'

const hat = {
    model: "fh84",
    available: true,
    height: "10 см",
    brim: "прошитые",
    material: "фетровые",
    visor: "с регулировкой",
    lining: "нет",
    season: "круглогодичный",
    style: "федора",
    feltCharacteristic: "мягкий",
    color: "черный",
    fieldWidth: "4,5 см",
    materialComposition: "100% шерсть"
  };

const ProductSectionAbout = () => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.info}>
            <h1 className={styles.title}>Черная шляпа Федора Blixen Edition с узкими полями</h1>
            <p className={styles.description}>Классическая Федора черного цвета из мягкого фетра с маленькими полями</p>
        </div>
        <div className={styles.additional}>
            <div className={styles.tags}>
                <div className={styles.tag}>Демисезонная</div>
                <div className={styles.tag}>Крепкая</div>
                <div className={styles.tag}>На каждый день</div>
                <div className={styles.tag}>Мужская</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductSectionAbout