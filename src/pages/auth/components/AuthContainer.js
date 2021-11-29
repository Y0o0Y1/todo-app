import { Paper, Box, Container } from "@mui/material";
import { useSelector } from "react-redux";
const AuthContainer = (props) => {
	let dimensions = useSelector((state) => {
		return state.dimensionsReducer.dimensions;
	});
	const AuthContainerStyle = {
		maxWidth: `${dimensions.width}px`,
		minHeight: `${dimensions.height}px`,
	};
	return (
		<Container style={AuthContainerStyle}>
			<Box>
				<Paper
					elevation={7}
					sx={{
						borderRadius: "15px",
					}}
				>
					{props.children}
				</Paper>
			</Box>
		</Container>
	);
};

export default AuthContainer;
