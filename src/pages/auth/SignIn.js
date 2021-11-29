import React from "react";
import AuthContainer from "./components/AuthContainer";
import { TextField, Grid, Typography, Button } from "@mui/material";
import logo from "../../assets/google-keep.png";

const SignIn = () => {
	return (
		<AuthContainer>
			<Grid container direction="row">
				<Grid item align="center" mt={3.3} xs={12}>
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
					pl={2.15}
					pr={2.15}
					item
					container
					direction="row"
					rowSpacing={2}
					xs={12}
				>
					<Grid item xs={12} sm={10} md={8} lg={7}>
						<TextField label="Email" fullWidth />
					</Grid>
					<Grid item xs={12} sm={10} md={8} lg={7}>
						<TextField label="Password" type="password" fullWidth />
					</Grid>{" "}
					<Grid item ml={1.5} xs={12} sm={10} md={8} lg={7}>
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
				<Grid item align="center" mt={5} mb={6} xs={12}>
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
