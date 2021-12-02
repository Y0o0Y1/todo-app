import axios from "axios";

let baseURL = "https://api-nodejs-todolist.herokuapp.com/user";

export const userSignUp = (data) => {
	axios
		.post(`${baseURL}/register`, data)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
			console.log(error);
		});
};
