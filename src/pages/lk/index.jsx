import {Avatar, createStyles, Flex, Group, Paper, Text} from "@mantine/core";
import React from "react";
import UserPageLayout from "@/components/Layouts/UserPageLayout";
import {IconAt, IconMapPin, IconPhoneCall} from "@tabler/icons-react";
import noimage from "../../../public/noimage.png";
import {useSelector} from "react-redux";

const useStyles = createStyles((theme) => ({
    icon: {
        color: theme.colorScheme === 'dark' ? theme.colors.gray[3] : theme.colors.gray[5],
    },

    name: {
        color: theme.colors.brand[5],
    },
}));


const Index = ({name, email, phone}) => {
    const {classes} = useStyles();
    const {user} = useSelector((state) => state.auth)

    return (
        <>
            <Paper>
                <Flex direction={"column"} gap={'sm'}>
                    <Group noWrap>
                        <Avatar src={noimage} size={94} radius="md"/>
                        <div>
                            <Text fz="lg" fw={500} className={classes.name}>
                                {user?.name ? user?.name : 'Имя не указано'}
                            </Text>
                        </div>
                    </Group>
                    <Group noWrap spacing={10} mt={3}>
                        <IconAt stroke={1.5} size="2rem" className={classes.icon}/>
                        <Text fz="sm" c="dimmed">
                            {user?.email ? user?.email : 'Почта не указана'}
                        </Text>
                    </Group>

                    <Group noWrap spacing={10} mt={5}>
                        <IconPhoneCall stroke={1.5} size="2rem" className={classes.icon}/>
                        <Text fz="sm" c="dimmed">
                            {user?.phone ? user?.phone : 'Номер не указан'}
                        </Text>
                    </Group>

                    <Group noWrap spacing={10} mt={5}>
                        <IconMapPin stroke={1.5} size="2rem" className={classes.icon}/>
                        <Text fz="sm" c="dimmed">
                            {user?.phone ? user?.phone : 'Адрес не указан'}
                        </Text>
                    </Group>
                </Flex>
            </Paper>
        </>
    );
};

Index.Layout = UserPageLayout;

export default Index;
