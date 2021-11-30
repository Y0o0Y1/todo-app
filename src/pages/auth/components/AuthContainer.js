import { Paper, Box, Container, Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";

import logo from "../../../assets/google-keep.png";

const AuthContainerStyle = {
	minWidth: `90vh`,
};

//----------------------------------------------------------------------------------------------
const AuthContainer = (props) => {
	return (
		<Grid item container justifyContent="center">
			<Paper
				elevation={7}
				sx={{
					borderRadius: "15px",
					// xs, extra-small: 0px
					// sm, small: 600px
					// md, medium: 900px
					// lg, large: 1200px
					// xl, extra-large: 1536px
					margin: {
						xs: "2vh 1vh",
						sm: "0",
					},
					padding: {
						xs: "10vh 0",
					},
					width: {
						xs: "45vh",
						sm: "50vh",
						md: "70vh",
						lg: "70vh",
						xl: "70vh",
					},
					maxHeight: {
						xs: "100%",
					},
					height: {
						xs: "95vh",
						sm: "85vh",
						md: "80vh",
						lg: "80vh",
						xl: "60vh",
					},
				}}
			>
				<Grid item container direction="column" pt={4} spacing={2}>
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
					<Container
						sx={{
							maxHeight: "80vh",
							width: "40vh",
						}}
					>
						{props.children}
					</Container>
				</Grid>
			</Paper>
		</Grid>
	);
};
export default AuthContainer;
