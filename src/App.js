import React from "react";
import SignIn from "./pages/auth/SignIn";

const appStyle = {
	display: "grid",
  justifyContent:"center",
  height:"555555px"
};
const App = () => {
	return (
		<div style={appStyle}>
			<SignIn />
		</div>
	);
};

export default App;
