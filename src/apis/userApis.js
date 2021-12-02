import axios from "axios";

let baseURL = "https://api-nodejs-todolist.herokuapp.com/user";

export const userRegister = (data) => {
	axios
		.post(`${baseURL}/register`, data)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
			console.log(error);
		});
};

export const userLogin = (data) => {
	axios
		.post(`${baseURL}/login`, data)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
			return response;
		})
		.catch(function (error) {
			console.log(error);
			return error;
		});
};
