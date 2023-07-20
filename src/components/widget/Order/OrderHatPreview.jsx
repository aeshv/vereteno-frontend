import {createStyles, Image, Skeleton, Tooltip} from "@mantine/core";
import React from "react";
import {returnNoImage} from "@/components/widget/Order/noImage";

const useStyles = createStyles((theme) => ({
    container: {
        color: theme.black,
        backgroundColor: 'transparent',
        border: '1px solid black',
        borderRadius: theme.radius.md,
        padding: `${theme.spacing.xs}`,
        maxWidth: '64px',
        maxHeight: '64px',
        width: '100%',
        height: '100%',
    },

    image: {
        width: '100%',
        height: '100%',


    }
}));


//     {
//         "id": 101,
//         "product": {
//             "id": 4,
//             "name": "non",
//             "description": "Deserunt et alias sit ad nostrum.",
//             "images": []
//         },

export const OrderHatPreview = ({id, product}) => {
    const {classes} = useStyles();


    return (<>
        <Tooltip label={product.name ? product.name : 'Товар'}>
            <div className={classes.container}>
                {product.images.length ? <Image src={product.images?.[0]?.src} alt={product.name}/> :
                    <Skeleton height={30}/>
                }
            </div>
        </Tooltip>
    </>)
}