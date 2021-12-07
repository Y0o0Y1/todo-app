import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	useMediaQuery,
	TextField,
	Grid,
} from "@mui/material";

import { addTask } from "../apis/taskApis";

//Form and Validation Utils
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

//Validation Schema
const validationSchema = yup.object({
	description: yup.string().required("Description is required"),
});
export const AddTodoDialog = () => {
	const userAuthToken = useSelector((state) => {
		return state.userReducer.userAuthToken;
	});
	console.log(userAuthToken);
	const [open, setOpen] = useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
		clearErrors();
	};
	const {
		handleSubmit,
		formState: { errors },
		control,
		clearErrors,
	} = useForm({
		resolver: yupResolver(validationSchema),
	});
	const onSubmit = (data) => {
		console.log("submitting", data);
		addTask(data, userAuthToken);
	};
	return (
		<>
			<Button variant="outlined" onClick={handleClickOpen}>
				Add Todo
			</Button>
			<Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
				<Grid container direction="column">
					<Grid item>
						<DialogTitle id="responsive-dialog-title">
							Add Todo
						</DialogTitle>
					</Grid>
					<form
						onSubmit={handleSubmit(onSubmit)}
						noValidate
						autoComplete="off"
					>
						<Grid
							item
							m={1}
							sx={{
								display: "flex",
								flexDirection: "column",
								rowGap: "3vh",
							}}
						>
							<Controller
								control={control}
								name="description"
								defaultValue=""
								render={({ field }) => {
									return (
										<TextField
											multiline
											rows={4}
											fullWidth
											label="Description"
											sx={{
												width: "30rem",
												height: "10vmin",
											}}
											inputProps={{
												form: {
													autocomplete: "off",
												},
											}}
											{...field}
											type="text"
											error={!!errors.description}
											helperText={
												errors.description
													? errors.description?.message
													: ""
											}
										/>
									);
								}}
							/>{" "}
						</Grid>
						<Grid
							item
							sx={{
								marginTop: "5rem",
							}}
						>
							<DialogActions>
								<Button autoFocus onClick={handleClose}>
									Cancel
								</Button>
								<Button type="submit" autoFocus>
									Submit
								</Button>
							</DialogActions>
						</Grid>
					</form>
				</Grid>
			</Dialog>
		</>
	);
};
