import { useState, useEffect } from "react";
import { Paper, Box } from "@mui/material";

const AuthContainer = (props) => {
	const [dimensions, setDimensions] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});
	const handleResize = () => {
		setDimensions({
			height: window.innerHeight,
			width: window.innerWidth,
		});
	};
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});
	console.log(dimensions);
	const AuthContainerStyle = {
		width: `${dimensions.width / 3}px`,
		height: `${dimensions.height / 3}px`,
	};
	return (
		<Box
			style={AuthContainerStyle}
			mt={dimensions.height / 8 / 8}
			mb={dimensions.height / 8 / 8}
		>
			<Paper elevation={5}>{props.children}</Paper>
		</Box>
	);
};

export default AuthContainer;
