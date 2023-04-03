import React from "react";
import SmallFeatureBlock from "../SmallFeatureBlock/SmallFeatureBlock";
import styles from "./MainPageFeaturesContainer.module.scss";
import RatingBlock from "../../RatingBlock/RatingBlock";

const MainPageFeaturesContainer = () => {
  const data = [
    { id: 1, title: "Бесплатная доставка", description: "по всей стране" },
    {
      id: 2,
      title: "Широкий ассортимент",
      description: "от классических до модных",
    },
    {
      id: 3,
      title: "Гибкая система скидок",
      description: "при покупке нескольких изделий",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        {data.map((item, index) => (
          <>
            <SmallFeatureBlock {...item} position={index} />
          </>
        ))}
        <RatingBlock />
      </div>
    </>
  );
};

export default MainPageFeaturesContainer;
