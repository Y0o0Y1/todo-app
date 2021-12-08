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
	CircularProgress,
	Box,
} from "@mui/material";

import { addTask } from "../redux/actions/task/taskAction";
import { useDispatch } from "react-redux";
//Form and Validation Utils
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

//Validation Schema
const validationSchema = yup.object({
	description: yup.string().required("Description is required"),
});
export const AddTaskDialog = () => {
	const dispatch = useDispatch();
	const userAuthToken = useSelector((state) => {
		return state.userReducer.userAuthToken;
	});
	const tasksState = useSelector((state) => {
		return state.tasksReducer;
	});
	const [open, setOpen] = useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
	const handleClickOpen = () => {
		setOpen(true);
	};
	const {
		handleSubmit,
		formState: { errors },
		control,
		clearErrors,
		reset,
	} = useForm({
		resolver: yupResolver(validationSchema),
	});
	const handleClose = () => {
		setOpen(false);
		clearErrors();
		reset();
	};
	const onSubmit = (data) => {
		console.log("submitting", data);
		addTask(data, userAuthToken, dispatch);
		handleClose();
	};
	return (
		<>
			<Button
				variant="outlined"
				onClick={handleClickOpen}
				size="large"
				sx={[
					{
						color:"#FFCE00",
						fontSize: "1.5rem",
						borderRadius: "10px",
						border: "1px solid #FFCE00",
						textTransform: "none",
					},
					{
						"&:hover": {
							color: "white",
							backgroundColor: "#FFCE00",
							border: "1px solid #FFCE00",
						},
					},
				]}
			>
				Add Task
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
								<Button
									color="error"
									variant="contained"
									autoFocus
									onClick={handleClose}
								>
									Cancel
								</Button>
								<Box sx={{ m: 1, position: "relative" }}>
									<Button
										type="submit"
										variant="contained"
										color="success"
										autoFocus
									>
										Submit
									</Button>
									{tasksState.addingTask && (
										<CircularProgress
											size={24}
											sx={{
												color: "primary",
												position: "absolute",
												top: "50%",
												left: "50%",
												marginTop: "-12px",
												marginLeft: "-12px",
											}}
										/>
									)}
								</Box>
							</DialogActions>
						</Grid>
					</form>
				</Grid>
			</Dialog>
		</>
	);
};
