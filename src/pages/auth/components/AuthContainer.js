import {
	Paper,
	Alert,
	AlertTitle,
	Container,
	Typography,
	Grid,
} from "@mui/material";

import { useSelector } from "react-redux";
import logo from "../../../assets/google-keep.png";

//----------------------------------------------------------------------------------------------
const AuthContainer = (props) => {
	const user = useSelector((state) => {
		return state.userReducer;
	});
	return (
		<Grid
			elevation={10}
			component={Paper}
			sx={{
				margin: "10vh auto",
				padding: "1rem 0.5vw",
				borderRadius: "15px",
				width: {
					xs: "90vmax",
					sm: "70vmax",
					md: "50vmax",
					lg: "40vmax",
					xl: "30vmax",
				},
				paddingBottom: "2rem",
				maxWidth: "100vw",
				minWidth: "max-content",
				minHeight: "40vh",
				height: {
					xs: "max-content",
				},
			}}
		>
			<Grid
				item
				align="center"
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
