import { Paper, Box, Container } from "@mui/material";
import { useSelector } from "react-redux";
const AuthContainer = (props) => {
	let dimensions = useSelector((state) => {
		return state.dimensionsReducer.dimensions;
	});
	console.log(dimensions);
	const AuthContainerStyle = {
		width: `${dimensions.width * (70 / 100)}px`,
		height: `${dimensions.height * (50 / 100)}px`,
	};
	return (
		<Container>
			<Box
				style={AuthContainerStyle}
				mt={dimensions.height / 9 / 8}
				mb={dimensions.height / 9 / 8}
			>
				<Paper elevation={5}>{props.children}</Paper>
			</Box>
		</Container>
	);
};

export default AuthContainer;
