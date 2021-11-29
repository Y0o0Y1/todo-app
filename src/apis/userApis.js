import axios from "axios";

export const userSignUp = (data) => {
	axios
		.post("https://powerful-fjord-38103.herokuapp.com/user/signup", {
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
			proxy: {
				host: "104.236.174.88",
				port: 3128,
			},
			data: {
				name: data.name,
				email: data.email,
				password: data.password,
				confirmPassword: data.password,
			},
		})
		.then((response) => {
			console.log(response);
			return response;
		})
		.catch((error) => {
			console.log(error);
			return error;
		});
};
