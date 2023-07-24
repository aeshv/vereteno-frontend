import Image from "next/image";
import React, {useContext, useState} from "react";
import noimage from "../../../../public/noimage.png";
import styles from "./SingleProduct.module.scss";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";
import {Carousel} from "@mantine/carousel";
import {createStyles, getStylesRef, rem, useMantineTheme} from "@mantine/core";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


const useStyles = createStyles((theme) => ({
    price: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },

    carousel: {
        maxWidth: '100%',
        '&:hover': {
            [`& .${getStylesRef('carouselControls')}`]: {
                opacity: 1,
            },
        },
    },

    carouselControls: {
        ref: getStylesRef('carouselControls'),
        transition: 'opacity 150ms ease',
        opacity: 0,
    },

    carouselIndicator: {
        width: rem(4),
        height: rem(4),
        transition: 'width 250ms ease',

        '&[data-active]': {
            width: rem(16),
        },
    },

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
}));

const ProductImage = () => {
    const {product, vendorIndex} = useContext(ProductInfoContext)
    const {images} = product?.vendorCodes?.[vendorIndex.currentVendorIndex] || []
    const {classes} = useStyles();
    const theme = useMantineTheme();

    const toggleImageViewer = () => {
        setOpen(true)
    }
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>

                    {images?.length ? <>
                            <Carousel withIndicators align="center" draggable={images?.length > 1}
                                      withControls={images?.length > 1} classNames={{
                                root: classes.carousel,
                                controls: classes.carouselControls,
                                indicator: classes.carouselIndicator,
                            }}>
                                {images?.map((image, index) => (
                                    <Carousel.Slide key={index} onClick={() => toggleImageViewer()}>
                                        <div className={styles.image}>
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_IMAGE}${image.path}`}
                                                alt="Изображение"
                                                width={505}
                                                height={505}
                                                style={{
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </div>
                                    </Carousel.Slide>
                                ))}
                            </Carousel>
                        </>

                        :

                        <>
                            <Carousel align="center" draggable={false} withControls={false} classNames={{
                                root: classes.carousel,
                                controls: classes.carouselControls,
                                indicator: classes.carouselIndicator,
                            }}>

                                <Carousel.Slide>
                                    <div className={styles.image}>
                                        <Image
                                            src={noimage}
                                            alt="Изображение товара отсутствует"
                                            width={505}
                                            height={505}
                                            style={{
                                                objectFit: "contain",
                                            }}
                                        />
                                    </div>
                                </Carousel.Slide>

                            </Carousel>

                        </>}


                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={images?.map((item) => ({src: `${process.env.NEXT_PUBLIC_IMAGE}${item.path}`}))}
            />
        </>
    );
};

export default ProductImage;
