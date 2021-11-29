import React from "react";
import AuthContainer from "./components/AuthContainer";
import { TextField, Grid, Typography, Button } from "@mui/material";
import logo from "../../assets/google-keep.png";

import { userSignUp } from "../../apis/userApis";
import { useNavigate } from "react-router-dom";

//Form and Validation Utils
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

const validationSchema = yup.object({
	name: yup.string().required(),
	email: yup
		.string()
		.email("Please Enter a valid Email")
		.required("Please Enter Your Email"),
	password: yup.string().required("Please Enter Your Password"),
});

const SignUp = () => {
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({
		resolver: yupResolver(validationSchema),
	});
	const onSubmit = (data) => {
		console.log("submitting", data);
		userSignUp(data);
	};

	return (
		<AuthContainer>
			<Grid container direction="column">
				<Grid item align="center" mt={0.5}>
					<img width="110" height="104" src={logo} alt="logo" />
				</Grid>
				<Grid item mt={2.5} align="center">
					<Typography
						variant="h4"
						sx={{
							fontSize: "30px",
							fontWeight: "bold",
						}}
					>
						Create Your Free Account{" "}
					</Typography>
					<Typography
						variant="h4"
						sx={{
							fontSize: "20px",
							fontWeight: "medium",
						}}
					>
						Please Fill the following form{" "}
					</Typography>
				</Grid>
				<form onSubmit={handleSubmit(onSubmit)} noValidate>
					<Grid
						mt={2}
						item
						container
						direction="column"
						alignItems="center"
						rowSpacing={2}
					>
						<Grid item align="center">
							<Controller
								control={control}
								name="name"
								defaultValue=""
								render={({ field }) => {
									return (
										<TextField
											inputProps={{
												form: {
													autocomplete: "off",
												},
											}}
											{...field}
											label="Name"
											fullWidth
											type="name"
											error={!!errors.name}
											helperText={
												errors.name ? errors.name?.message : ""
											}
										/>
									);
								}}
							/>
						</Grid>
						<Grid item>
							<Controller
								control={control}
								name="email"
								defaultValue=""
								render={({ field }) => {
									return (
										<TextField
											inputProps={{
												form: {
													autocomplete: "off",
												},
											}}
											{...field}
											label="Email"
											fullWidth
											type="email"
											error={!!errors.email}
											helperText={
												errors.email ? errors.email?.message : ""
											}
										/>
									);
								}}
							/>
						</Grid>
						<Grid item>
							<Controller
								control={control}
								name="password"
								defaultValue=""
								render={({ field }) => {
									return (
										<TextField
											inputProps={{
												form: {
													autocomplete: "off",
												},
											}}
											{...field}
											label="Password"
											fullWidth
											type="password"
											error={!!errors.password}
											helperText={
												errors.password
													? errors.password?.message
													: ""
											}
										/>
									);
								}}
							/>
						</Grid>
						<Grid item mb={2}>
							<Button type="submit" variant="contained">
								Submit
							</Button>
						</Grid>
					</Grid>
				</form>
			</Grid>
		</AuthContainer>
	);
};

export default SignUp;
