import {createStyles, Image, Tooltip} from "@mantine/core";
import React from "react";

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
export const OrderHatPreview = ({id, name, image_src}) => {
    const {classes} = useStyles();


    return (<>
        <Tooltip label={name ? name : 'Товар'}>
            <div className={classes.container}>
                {image_src && (<Image src={image_src}/>)}
            </div>
        </Tooltip>
    </>)
}