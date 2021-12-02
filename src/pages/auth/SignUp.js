import React from "react";
import AuthContainer from "./components/AuthContainer";
import { TextField, Grid, Typography, Button } from "@mui/material";

import { userRegister } from "../../apis/userApis";
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
	const navigate = useNavigate();
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({
		resolver: yupResolver(validationSchema),
	});
	const onSubmit = (data) => {
		console.log("submitting", data);
		userRegister(data);
	};

	return (
		<AuthContainer
			header="Sign Up"
			subHeader="Please Fill The following Form"
		>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<Grid
					mt={1}
					item
					container
					direction="column"
					rowSpacing={2}
					justifyContent="center"
					align="center"
				>
					<Grid item align="center" xs={12} sm={10} md={8} lg={12}>
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
					<Grid item align="center" xs={12} sm={10} md={8} lg={6}>
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
					<Grid item align="center" xs={12} sm={10} md={8} lg={7}>
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
											errors.password ? errors.password?.message : ""
										}
									/>
								);
							}}
						/>
					</Grid>
					<Grid item align="center" xs={12} sm={10} md={8} lg={7}>
						<Controller
							control={control}
							name="age"
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
										label="Age"
										fullWidth
										type="age"
										error={!!errors.age}
										helperText={errors.age ? errors.age?.message : ""}
									/>
								);
							}}
						/>
					</Grid>
					<Grid item align="center" xs={12} sm={10} md={8} lg={10}>
						<Button
							type="submit"
							variant="contained"
							sx={{
								width: "120px",
								fontSize: "20px",
								fontWeight: "medium",
								height: "50",
								backgroundColor: "#00A3FF",
								borderRadius: "15px",
								textTransform: "none",
							}}
						>
							Submit
						</Button>
					</Grid>
					<Grid item align="center" xs={12} sm={10} md={8} lg={7}>
						<Typography
							variant="h4"
							sx={{
								fontSize: "14px",
								fontWeight: "medium",
							}}
						>
							Already Have account?{" "}
							<Typography
								variant="span"
								color="#00A3FF"
								sx={{
									cursor: "pointer",
								}}
								onClick={() => navigate("../")}
							>
								{" "}
								Sign-In here!
							</Typography>
						</Typography>{" "}
					</Grid>
				</Grid>
			</form>
		</AuthContainer>
	);
};

export default SignUp;
