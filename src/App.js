import React, { useEffect } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Grid } from "@mui/material";

import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Main from "./pages/main/Main";
import Header from "./pages/main/Header";

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
		<>
			{user.loggedIn && <Header />}
			<Grid
				container
				direction="row"
				justifyContent="center"
				sx={{
					height: "100vh",
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
			</Grid>
		</>
	);
};

export default App;
