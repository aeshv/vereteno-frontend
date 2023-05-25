import React from 'react'
import Image from "next/image";
import noImage from '../../../../public/noimage.png'
import {BackgroundImage, Box, Center, createStyles, Group, rem, Text} from "@mantine/core";
import Link from "next/link";

const blurredBlockClasses = createStyles((theme) => ({
    box: {
        borderRadius: '22px',
        minHeight: '255px',
        minWidth: '255px',
        padding: '18px',
        overflow: 'hidden',
        transition: 'all 0.2s ease-in-out',
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
    return (<>
        <Box mx="auto" className={classes.box}>
            <Link href={link || '#'}>
                <BackgroundImage
                    src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
                    radius="xs"
                    className={classes.link}
                >
                    <Center p="md" className={classes.content}>
                        <Text color="#fff">
                            {title}
                        </Text>
                    </Center>
                </BackgroundImage>
            </Link>
        </Box>
    </>)
}
export default BlurredBlock
