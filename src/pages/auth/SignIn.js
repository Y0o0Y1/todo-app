import React from "react";
import AuthContainer from "./components/AuthContainer";
import { TextField, Grid, Typography, Button } from "@mui/material";
import logo from "../../assets/google-keep.png";

const SignIn = () => {
	return (
		<AuthContainer>
			<Grid container direction="row">
				<Grid item mt={4.3} xs={12} align="center">
					<img width="110" height="104" src={logo} alt="logo" />
				</Grid>
				<Grid item mt={2.5} xs={12} align="center">
					<Typography
						variant="h4"
						sx={{
							fontSize: "30px",
							fontWeight: "bold",
						}}
					>
						Sign In
					</Typography>
					<Typography
						variant="h4"
						sx={{
							fontSize: "20px",
							fontWeight: "medium",
						}}
					>
						Please enter your credentials{" "}
					</Typography>
				</Grid>
				<Grid
					mt={9.5}
					ml={4.3}
					item
					container
					direction="row"
					rowSpacing={2}
					xs={8}
					alignItems="flex-start"
				>
					<Grid item xs={10}>
						<TextField
							label="Email"
							sx={{
								width: "120%",
							}}
						/>
					</Grid>
					<Grid item xs={10}>
						<TextField
							label="Password"
							type="password"
							sx={{
								width: "120%",
							}}
						/>
					</Grid>{" "}
					<Grid item align="center" ml={1.5} xs={10}>
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
							>
								{" "}
								Sign-up here!
							</Typography>
						</Typography>{" "}
					</Grid>{" "}
				</Grid>
				<Grid item xs={12} align="right" mr={6} mb={6}>
					<Button
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
			</Grid>
		</AuthContainer>
	);
};

export default SignIn;
