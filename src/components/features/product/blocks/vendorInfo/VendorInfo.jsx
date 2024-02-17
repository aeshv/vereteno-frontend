import {Box, Card, createStyles, Flex, Stack, Text, Title} from "@mantine/core";
import {useContext} from "react";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";
import ColorDot from "@/components/shared/ColorDot/ColorDot";
import {SizeSelectorOrder} from "@/components/features/product/blocks/vendorInfo/SizeSelector";

const VendorStyles = createStyles((theme) => ({
    card: {
        background: theme.colors.brand[0],
    },

    title: {
        fontFamily: 'Jost',
        fontStyle: "normal",
        fontSize: "14px",
        lineHeight: "20px",
    },

    text: {
        fontFamily: 'Jost',
        fontStyle: "normal",
        fontSize: "16px",
        lineHeight: "24px",
        color: "#282739"
    },

}));

export const VendorInfo = () => {
    const ctx = useContext(ProductInfoContext)
    const {classes} = VendorStyles();
    const {vendorCode} = ctx.product || []

    const {color, material} = vendorCode || []


    return (
        <>
            <Card className={classes.card} mt={'md'} radius="md" miw={'16rem'}>
                <Stack spacing={'xl'}>
                    {/*Цвет*/}
                    <Box>
                        <Title className={classes.title} size={'xs'} color="dimmed" weight={400}>Цвет</Title>
                        <Flex align={'center'} gap={'xs'}>
                            <ColorDot color={color?.hex}/>
                            <Text className={classes.text} size={'md'}>{color?.name}</Text>
                        </Flex>
                    </Box>

                    {/*Материал*/}
                    <Box>
                        <Title className={classes.title} size={'xs'} color="dimmed" weight={400}>Материал</Title>
                        <Flex align={'center'} gap={'xs'}>
                            <Text className={classes.text} size={'md'}>{material}</Text>
                        </Flex>
                    </Box>

                    {/*Размер*/}
                    <Box>
                        <Title className={classes.title} size={'xs'} color="dimmed" weight={400}>Размер</Title>
                        <SizeSelectorOrder sizes={ctx.product?.sizes}/>
                        <Flex align={'center'} gap={'xs'}>
                            <Text className={classes.text} size={'md'}></Text>
                        </Flex>
                    </Box>
                </Stack>
            </Card>
        </>
    )
}
