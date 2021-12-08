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
			alignSelf="center"
			item
			justifyContent="center"
			elevation={7}
			component={Paper}
			sx={{
				margin: "1vh",
				padding: "1rem 0.5vw",
				borderRadius: "15px",
				width: {
					xs: "90vw",
					sm: "70vw",
					md: "50vw",
					lg: "40vw",
					xl: "30vw",
				},
				paddingBottom: "1rem",
				minWidth: "max-content",
				height: "max-content",
			}}
		>
			<Grid
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
