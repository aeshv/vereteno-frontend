import {useToggle, upperFirst, useDisclosure} from "@mantine/hooks";
import {useForm} from "@mantine/form";
import {
	TextInput, PasswordInput, Text, Paper, Group, Button, Checkbox, Anchor, Stack, LoadingOverlay,
} from "@mantine/core";
import {loginUser, registerUser} from "@/redux/features/auth/authSlice";
import {useDispatch} from "react-redux";
import {notifications} from '@mantine/notifications';

const RegisterPage = () => {
	const [type, toggle] = useToggle(["Войти в свой аккаунт", "Зарегистрировать аккаунт",]);
	const form = useForm({
		initialValues: {
			email: "", name: "", password: "", terms: true,
		},

		validate: {
			email: (val) => (/^\S+@\S+$/.test(val) ? null : "Некорректный адрес электронной почты"),
			password: (val) => val.length <= 6 ? "Пароль должен состоять хотя бы из 6 символов" : null,
			terms: (val) => (val === true ? null : "Для регистрации необходимо принять условия использования"),
		},
	});


	const dispatch = useDispatch();
	const [visibleLoading, loadingHandlers] = useDisclosure(false);
	const handleRegister = (data) => {
		notifications.show({message: 'Registration'});
		try {
			// loadingHandlers.toggle()
			dispatch(registerUser(data))
		} catch (error) {
			console.log(error);
		} finally {
			// loadingHandlers.toggle()
		}
	};

	const handleLogin = (data) => {
		try {
			// loadingHandlers.toggle()
			dispatch(loginUser(data))
		} catch (error) {
			console.log('error is', error);
		} finally {
			// loadingHandlers.toggle()
		}
	};

	return (<div style={{maxWidth: '650px', margin: '1rem auto'}}>
		<Paper radius="md" p="xl" withBorder pos="relative">
			<LoadingOverlay visible={visibleLoading} overlayBlur={2}/>
			<Text size="lg" weight={500}>
				{type}
			</Text>

			<form onSubmit={form.onSubmit((fullFormData) => {
				{
					type === "Зарегистрировать аккаунт" ? handleRegister(fullFormData) : handleLogin(fullFormData)
				}
			})}>
				<Stack>
					{type === "Зарегистрировать аккаунт" && (<TextInput
						label="Логин"
						placeholder="Имя"
						value={form.values.name}
						onChange={(event) => form.setFieldValue("name", event.currentTarget.value)}
						radius="md"
					/>)}

					<TextInput
						required
						label="Email"
						placeholder="hello@vereteno.ru"
						value={form.values.email}
						onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
						error={form.errors.email}
						radius="md"
					/>

					<PasswordInput
						required
						label="Пароль"
						placeholder="Ваш пароль"
						value={form.values.password}
						onChange={(event) => form.setFieldValue("password", event.currentTarget.value)}
						error={form.errors.password}
						radius="md"
					/>

					{type === "Зарегистрировать аккаунт" && (<Checkbox
						label="Я согласен со всеми правилами"
						checked={form.values.terms}
						error={form.errors.terms}
						onChange={(event) => form.setFieldValue("terms", event.currentTarget.checked)}
					/>)}
				</Stack>

				<Group position="apart" mt="xl">
					<Anchor
						component="button"
						type="button"
						color="dimmed"
						onClick={() => toggle()}
						size="xs"
					>
						{type === "Зарегистрировать аккаунт" ? "Уже есть аккаунт? Войти" : "Нет аккаунта? Зарегистрироваться"}
					</Anchor>
					<Button type="submit" radius="xl">
						{upperFirst(type)}
					</Button>
				</Group>
			</form>
		</Paper>
	</div>);
};

export default RegisterPage;

// import { Formik } from "formik";
// import React from "react";
// import { useDispatch } from "react-redux";
// import { loginUser, registerUser } from "@/redux/features/auth/authSlice";
// import styles from './auth.module.scss'

// const RegisterPage = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (data) => {
//     try {
//       dispatch(registerUser(data))
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSubmitLogin = (data) => {
//     try {
//       dispatch(loginUser(data))
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//     <div className={styles.container}>
//     <div className={styles.auth}>
//       <h1>Регистрация</h1>
//       <Formik
//         initialValues={{ name: "Alexey", email: "", password: "" }}
//         validate={(values) => {
//           const errors = {};
//           if (!values.email) {
//             errors.email = "Required";
//           } else if (
//             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//           ) {
//             errors.email = "Invalid email address";
//           }
//           return errors;
//         }}
//         onSubmit={(values, { setSubmitting }) => {
//           handleSubmit(values)
//           setSubmitting(false);
//         }}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting,
//           /* and other goodies */
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.name}
//             />
//             {errors.name && touched.name && errors.name}
//             <input
//               type="email"
//               name="email"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.email}
//             />
//             {errors.email && touched.email && errors.email}
//             <input
//               type="password"
//               name="password"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.password}
//             />
//             {errors.password && touched.password && errors.password}
//             <button type="submit" disabled={isSubmitting}>
//               Submit
//             </button>
//           </form>
//         )}
//       </Formik>
//     </div>

//     <div className={styles.auth}>
//       <h1>Авторизация</h1>
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         validate={(values) => {
//           const errors = {};
//           if (!values.email) {
//             errors.email = "Required";
//           } else if (
//             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//           ) {
//             errors.email = "Invalid email address";
//           }
//           return errors;
//         }}
//         onSubmit={(values, { setSubmitting }) => {
//           handleSubmitLogin(values)
//           setSubmitting(false);
//         }}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting,
//           /* and other goodies */
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               name="email"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.email}
//             />
//             {errors.email && touched.email && errors.email}
//             <input
//               type="password"
//               name="password"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.password}
//             />
//             {errors.password && touched.password && errors.password}
//             <button style={{flexGrow: 1}} type="submit" disabled={isSubmitting}>
//               Submit
//             </button>
//           </form>
//         )}
//       </Formik>
//     </div>
//     </div>
//     </>
//   );
// };

// export default RegisterPage;
