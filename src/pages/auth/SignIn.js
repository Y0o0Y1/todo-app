import AuthContainer from "./components/AuthContainer";
import { TextField, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/actions/user/userActions";
//Form and Validation Utils
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
const validationSchema = yup.object({
	email: yup
		.string()
		.email("Please Enter a valid Email")
		.required("Please Enter Your Email"),
	password: yup.string().required("Please Enter Your Password"),
});

const SignIn = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({
		resolver: yupResolver(validationSchema),
	});
	const onSubmit = (data) => {
		console.log("submitting", data);
		logIn(dispatch, data);
	};
	return (
		<AuthContainer header="Sign In" subHeader="Please Enter your credentials">
			<form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
				<Grid
					mt={3}
					item
					container
					direction="column"
					rowSpacing={2}
					justifyContent="center"
					align="center"
					xs={12}
				>
					<Grid item xs={12}>
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
					<Grid item xs={12} sm={12} md={8} lg={7}>
						<Controller
							control={control}
							name="password"
							defaultValue=""
							render={({ field }) => {
								return (
									<TextField
										{...field}
										label="Password"
										fullWidth
										type="password"
										error={errors.password ? true : false}
										helperText={
											errors.password ? errors.password?.message : ""
										}
									/>
								);
							}}
						/>
					</Grid>
					<Grid item align="center" xs={12}>
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
							Login
						</Button>
					</Grid>
					<Grid item ml={1.5} xs={12} sm={12} md={12} lg={12}>
						<Typography
							variant="h4"
							sx={{
								fontSize: "14px",
								fontWeight: "medium",
							}}
						>
							Don`t have an account?{" "}
							<Typography
								variant="span"
								color="#00A3FF"
								sx={{
									cursor: "pointer",
								}}
								onClick={() => navigate("./sign-up")}
							>
								{" "}
								Sign-up here!
							</Typography>
						</Typography>{" "}
					</Grid>
				</Grid>
			</form>
		</AuthContainer>
	);
};

export default SignIn;
