import { Paper, Box, Container } from "@mui/material";
import { useSelector } from "react-redux";
const AuthContainer = (props) => {
	let dimensions = useSelector((state) => {
		return state.dimensionsReducer.dimensions;
	});
	const AuthContainerStyle = {
		maxWidth: `${dimensions.width}px`,
		minHeight: `100%`,
	};
	return (
		<Container style={AuthContainerStyle}>
			<Box>
				<Paper
					elevation={7}
					sx={{
						height: `${dimensions.height}`,
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
