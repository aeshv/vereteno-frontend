import React from "react";
import SmallFeatureBlock from "../SmallFeatureBlock/SmallFeatureBlock";
import styles from "./MainPageFeaturesContainer.module.scss";
import RatingBlock from "../../RatingBlock/RatingBlock";
import {Center, SimpleGrid} from "@mantine/core";

const MainPageFeaturesContainer = () => {
    const data = [
        {id: 1, title: "Бесплатная доставка", description: "по всей стране"},
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

            <SimpleGrid cols={4} spacing="lg" breakpoints={[
                {maxWidth: '68rem', cols: 3, spacing: 'md'},
                {maxWidth: '48rem', cols: 2, spacing: 'sm'},
                {maxWidth: '36rem', cols: 1, spacing: 'sm'},
            ]}>
                {data.map((item, index) => (
                    <>
                        <div>
                            <Center>
                                <SmallFeatureBlock {...item} position={index}/>
                            </Center>
                        </div>
                    </>
                ))}
                <div className="">
                    <Center>
                        <RatingBlock/>
                    </Center>
                </div>
            </SimpleGrid>
        </>
    );
};

export default MainPageFeaturesContainer;
