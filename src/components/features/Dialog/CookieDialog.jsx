import {useDisclosure} from '@mantine/hooks';
import {Dialog, Group, Button, TextInput, Text, Flex} from '@mantine/core';
import {IconCookie} from "@tabler/icons-react";
import {getCookie, setCookie} from "cookies-next";

export function CookieDialog() {
	const isCookieAccepted = getCookie('isCookieAccepted')
	const onCookieClose = () => {
		close()
		setCookie('isCookieAccepted', 'true')
	}
	const [opened, {close}] = useDisclosure(!!!isCookieAccepted);
	return (<>
		<Dialog opened={opened} withCloseButton onClose={onCookieClose} size="lg" radius="md">
			<Flex align="center" gap={'xs'}>
				<IconCookie/>
				<Text size="sm" mb="xs" mr="xs" weight={500} sx={{flex: 1}}>
					Этот веб-сайт использует cookie, чтобы улучшить ваш пользовательский опыт.
				</Text>
			</Flex>
		</Dialog>
	</>);
}