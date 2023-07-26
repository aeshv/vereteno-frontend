import {Text} from "@mantine/core";

export const WebAuthors = () => {

    return (
        <>
            <Text
                variant="gradient"
                gradient={{from: 'indigo', to: 'cyan'}}
                sx={{fontFamily: 'sans-serif'}}
                ta="center"
                fz="md"
                fw={700}
            >
                разработано в {' '}
                <a href="https://aeshv.ru" target="_blank">aeshv</a>
            </Text>
        </>
    )
}
