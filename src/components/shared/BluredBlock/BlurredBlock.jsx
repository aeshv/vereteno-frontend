import React from 'react'
import Image from "next/image";
import noImage from '../../../../public/noimage.png'
import {BackgroundImage, Box, Center, createStyles, Group, rem, Text} from "@mantine/core";
import Link from "next/link";
import {useRouter} from "next/router";

const blurredBlockClasses = createStyles((theme) => ({
    box: {
        borderRadius: '22px',
        minHeight: '255px',
        minWidth: '255px',
        padding: '18px',
        overflow: 'hidden',
        transition: 'all 0.2s ease-in-out',
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.9
        },
    }, link: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '18px',
        borderRadius: '22px',
    }, content: {
        background: ' rgba(0, 0, 0, 0.2)', backdropFilter: ' blur(5px)', borderRadius: ' 10px', width: '100%',
    }
}));


const BlurredBlock = ({title = 'Шляпы', link}) => {
    const {classes} = blurredBlockClasses();

    const router = useRouter()
    const {query} = router


    const onCatalogChange = () => {
        if (title) {
            delete router.query.categories
            router.pathname = '/products'

            router.query.categories = title
            router.push(router)
        }
    }

    return (<>
        <Box mx="auto" className={classes.box} onClick={(e) => onCatalogChange()}>
            <BackgroundImage
                src="https://images.unsplash.com/photo-1606343131164-ab932aeffdaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                radius="xs"
                className={classes.link}
            >
                <Center p="md" className={classes.content}>
                    <Text color="#fff">
                        {title}
                    </Text>
                </Center>
            </BackgroundImage>
        </Box>
    </>)
}
export default BlurredBlock
