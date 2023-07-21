import {Box, Card, createStyles, Flex, Stack, Text, Title} from "@mantine/core";
import {useContext} from "react";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";
import ColorDot from "@/components/shared/ColorDot/ColorDot";

const VendorStyles = createStyles((theme) => ({
    card: {
        background: theme.colors.indigo[0],
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
    const product = useContext(ProductInfoContext)
    const {classes} = VendorStyles();
    const {vendor_code} = product || []
    const {color, material, size} = vendor_code || []
    console.log(color, material, size)

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
                            <Text className={classes.text} size={'md'}>{material?.name}</Text>
                        </Flex>
                    </Box>

                    {/*Размер*/}
                    <Box>
                        <Title className={classes.title} size={'xs'} color="dimmed" weight={400}>Размер</Title>
                        <Flex align={'center'} gap={'xs'}>
                            <Text className={classes.text} size={'md'}>{size?.number}</Text>
                        </Flex>
                    </Box>
                </Stack>
            </Card>
        </>
    )
}
