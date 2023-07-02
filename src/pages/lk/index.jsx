import {Avatar, createStyles, Flex, Group, Paper, Text} from "@mantine/core";
import React from "react";
import UserPageLayout from "@/components/Layouts/UserPageLayout";
import {IconAt, IconMapPin, IconPhoneCall} from "@tabler/icons-react";
import noimage from "../../../public/noimage.png";
import {useSelector} from "react-redux";
import User from "@/assets/icons/user";
import {cartApi} from "@/api/cart";
import {userApi} from "@/api/auth";

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

	React.useEffect(() => {
		const data = userApi.loginByToken().then((data) => {
			if (data) {
				console.log('datadatadata', data)
			}
		});
	}, [])

	// loginByToken

	return (
		<>
			<Paper>
				<Flex direction={"column"} gap={'sm'}>
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
							{user?.email ? user?.email : 'Почта не указана'}
						</Text>
					</Group>

					<Group noWrap spacing={10} mt={5}>
						<IconPhoneCall stroke={1.5} size="2rem" className={classes.icon}/>
						<Text fz="sm" c="dimmed">
							{user?.phone ? user?.phone : 'Номер не указан'}
						</Text>
					</Group>

					{/*<Group noWrap spacing={10} mt={5}>*/}
					{/*	<IconMapPin stroke={1.5} size="2rem" className={classes.icon}/>*/}
					{/*	<Text fz="sm" c="dimmed">*/}
					{/*		{user?.phone ? user?.phone : 'Адрес не указан'}*/}
					{/*	</Text>*/}
					{/*</Group>*/}
				</Flex>
			</Paper>
		</>
	);
};

Index.Layout = UserPageLayout;

export default Index;
