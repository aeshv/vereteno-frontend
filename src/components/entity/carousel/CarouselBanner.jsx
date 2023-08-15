import React from "react";
import {
    createStyles,
    Image,
    Text,
    Button,
    getStylesRef,
    rem,
    Grid, Center, Loader, Space,
} from "@mantine/core";
import {Carousel} from "@mantine/carousel";
import styles from "./CarouselBanner.module.scss";
import Label from "@/components/shared/label/Label";
import {useCarts} from "@/utils/hooks/useCarts";
import {useBanners} from "@/utils/hooks/useBanners";

const useStyles = createStyles((theme) => ({
    price: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },

    carousel: {
        "&:hover": {
            [`& .${getStylesRef("carouselControls")}`]: {
                opacity: 1,
            },
        },
    },

    carouselControls: {
        ref: getStylesRef("carouselControls"),
        transition: "opacity 150ms ease",
        opacity: 0,
    },

    carouselIndicator: {
        width: rem(4),
        height: rem(4),
        transition: "width 250ms ease",

        "&[data-active]": {
            width: rem(16),
        },
    },
}));

export function CarouselBanner() {
    const {classes} = useStyles();
    const getBanner = useBanners();

    const {isLoading, isError, data, error, refetch} = getBanner
    const bannerData = data?.data

    const slides = bannerData?.map((item, index) => (
        <Carousel.Slide key={`${item.id}_${index}`}>
            <div className={styles.sliderContent}>
                <Image src={process.env.NEXT_PUBLIC_IMAGE + '/' + item?.image} height={420} className={styles.image}
                       alt={item.subtitle}/>
                <div className={styles.content}>
                    <Grid>
                        <Grid.Col md={12} lg={6} align="center" justify="center">
                            <div className={styles.colContent}>
                                {/*{item.label && <Label type={item.label}>Новика</Label>}*/}
                                <Text
                                    component="span"
                                    variant="gradient"
                                    gradient={{from: "#A6A9FF", to: "#6F73EE"}}
                                    inherit
                                    className={styles.title}
                                >
                                    {item.title}
                                </Text>
                                <Text className={styles.subtitle}>{item.content}</Text>

                                {/*{item.buttonText && (*/}
                                {/*    <Button*/}
                                {/*        variant="gradient"*/}
                                {/*        gradient={{from: "#8185f9", to: "cyan"}}*/}
                                {/*    >*/}
                                {/*        {item.buttonText}*/}
                                {/*    </Button>*/}
                                {/*)}*/}
                            </div>
                        </Grid.Col>
                        <Grid.Col md={12} lg={6}></Grid.Col>
                    </Grid>
                </div>
            </div>
        </Carousel.Slide>
    ));

    if (isError) {
        return <div/>
    }

    if (!bannerData?.length) return <Space/>

    return (
        <div
            style={{marginBottom: "1rem", borderRadius: "16px", overflow: "hidden"}}
        >
            <Carousel
                withIndicators
                loop
                height={421}
                classNames={{
                    root: classes.carousel,
                    controls: classes.carouselControls,
                    indicator: classes.carouselIndicator,
                }}
            >
                {isLoading && !isError ? <Center><Loader/></Center> : slides}
            </Carousel>
        </div>
    );
}
