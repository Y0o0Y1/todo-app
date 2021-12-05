import { Paper, Box, Container, Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";

import logo from "../../../assets/google-keep.png";

const AuthContainerStyle = {
	minWidth: `90vh`,
};

//----------------------------------------------------------------------------------------------
const AuthContainer = (props) => {
	return (
		<Grid
			item
			justifyContent="center"
			elevation={7}
			component={Paper}
			sx={{
				margin: "1vh",
				padding: "1em 0.5vw",
				borderRadius: "15px",
				width: {
					xs: "90vw",
					sm: "70vw",
					md: "50vw",
					lg: "40vw",
					xl: "30vw",
				},
				paddingBottom: "10px",
				height: {
					xs: "200vmin",
					sm: "90vmax",
					md: "80vmin",
					lg: "80vmin",
					xl: "75vmin",
				},
			}}
		>
			<Grid
				container
				direction="column"
				sx={{
					flexWrap: "wrap",
				}}
			>
				<Grid item align="center">
					<img width="110" height="104" src={logo} alt="logo" />
				</Grid>{" "}
				<Grid item xs={12} align="center">
					<Typography
						variant="h4"
						sx={{
							fontSize: "30px",
							fontWeight: "bold",
						}}
					>
						{props.header}
					</Typography>
					<Typography
						variant="h4"
						sx={{
							fontSize: "20px",
							fontWeight: "medium",
						}}
					>
						{props.subHeader}
					</Typography>
				</Grid>
				<Container>{props.children}</Container>
			</Grid>
		</Grid>
	);
};
export default AuthContainer;
