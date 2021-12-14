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
				paddingBottom: "2rem",
				minWidth: "max-content",
				width: {
					xs: "90vw",
					sm: "50vw",
					md: "40vw",
					lg: "30vw",
					xl: "20vw",
				},
				maxWidth: "80vw",
				minHeight: "40vh",
				height: {
					xs: "80vh",
					sm: "80vh",
					md: "80vh",
					lg: "80vh",
					xl: "80vh",
				},
				maxHeight: "70vh",
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
				</Grid>
				<Container>{props.children}</Container>
			</Grid>
		</Grid>
	);
};
export default AuthContainer;
