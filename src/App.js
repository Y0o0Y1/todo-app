import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Backdrop, CircularProgress } from "@mui/material";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Main from "./pages/main/Main";

const App = () => {
	const navigate = useNavigate();
	const user = useSelector((state) => {
		return state.userReducer;
	});
	useEffect(() => {
		if (user.loggedIn) {
			navigate("/main");
		}
	}, [navigate, user.loggedIn]);
	return (
		<Box
			sx={{
				align: "center",
				justifyContent: "center",
			}}
		>
			<Routes>
				{!user.loggedIn ? (
					<>
						<Route path="/" exact element={<SignIn />} />
						<Route path="/sign-up" exact element={<SignUp />} />
					</>
				) : (
					<>
						<Route path="/main" exact element={<Main />} />
					</>
				)}
			</Routes>
			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={user.logging}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Box>
	);
};

export default App;
