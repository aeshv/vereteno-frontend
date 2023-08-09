import {Avatar, createStyles, Flex, Group, Paper, Tabs, Text} from "@mantine/core";
import React from "react";
import UserPageLayout from "@/components/Layouts/UserPageLayout";
import {IconAt, IconMapPin, IconPhoneCall, IconUserSearch} from "@tabler/icons-react";
import noimage from "../../../public/noimage.png";
import {useSelector} from "react-redux";
import {ProfileEdit} from "@/components/entity/ProfileEdit/ProfileEdit";
import NoDataCart from "@/components/features/cart/NoDataCart/NoDataCart";

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

    const getFullUserName = () => {

        const noName = 'Имя не указано';
        const result = `${user?.surname || ''} ${user?.name || ''} ${user?.patronymic || ''} `

        return result.length > 3 ? result : noName
    }

    return (
        <>
            <Paper>
                <Tabs defaultValue="profile">
                    <Tabs.List grow>
                        <Tabs.Tab value="profile">Профиль</Tabs.Tab>
                        {user &&
                            <Tabs.Tab value="edit">Редактировать</Tabs.Tab>
                        }
                    </Tabs.List>
                    <Tabs.Panel value={'profile'}>
                        {user ? <Flex p={'xs'} direction={"column"} gap={'sm'}>
                                <Group noWrap>
                                    <Avatar src={user?.profile_image || noimage} size={94} radius="md"/>
                                    <div>
                                        <Text fz="lg" fw={500} className={classes.name}>
                                            {getFullUserName()}
                                        </Text>
                                    </div>
                                </Group>
                                <Group noWrap spacing={10} mt={3}>
                                    <IconAt stroke={1.5} size="2rem" className={classes.icon}/>
                                    <Text fz="sm" c="dimmed">
                                        Эл. Почта
                                    </Text>
                                    <Text fz="sm">
                                        {user?.email ? user?.email : 'Почта не указана'}
                                    </Text>
                                </Group>

                                <Group noWrap spacing={10} mt={5}>
                                    <IconPhoneCall stroke={1.5} size="2rem" className={classes.icon}/>
                                    <Text fz="sm" c="dimmed">
                                        Номер телефона
                                    </Text>
                                    <Text fz="sm">
                                        {user?.phone ? user?.phone : 'Номер не указан'}
                                    </Text>
                                </Group>
                                <Group noWrap spacing={10} mt={5}>
                                    <IconUserSearch stroke={1.5} size="2rem" className={classes.icon}/>
                                    <Text fz="sm" c="dimmed">
                                        Логин
                                    </Text>
                                    <Text fz="sm">
                                        {user?.login ? user?.login : 'Логин не указан'}
                                    </Text>
                                </Group>

                            </Flex> :
                            <NoDataCart title={'Вы не авторизованы'}
                                        description={'Вы можете совершать покупки, но для удобного доступа - авторизуйтесь или зарегистрируйтесь'}
                                        btnText={'На страницу авторизации'} link={'/auth'}/>}
                    </Tabs.Panel>
                    <Tabs.Panel value={'edit'}>
                        <ProfileEdit/>
                    </Tabs.Panel>
                </Tabs>

            </Paper>
        </>
    );
};

Index.Layout = UserPageLayout;

export default Index;
