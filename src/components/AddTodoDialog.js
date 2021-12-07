import { useCallback, useState } from "react";
import { useTheme } from "@mui/material/styles";

import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	useMediaQuery,
	TextField,
	Grid,
} from "@mui/material";
export const AddTodoDialog = () => {
	const [open, setOpen] = useState(false);

	const theme = useTheme();

	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
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
					<Grid
						item
						m={4}
						sx={{
							display: "flex",
							flexDirection: "column",
							rowGap: "3vh",
						}}
					>
						<TextField label="Title" />
						<TextField
							multiline
							rows={4}
							label="Description"
							sx={{
								width: "40vw",
							}}
						/>
					</Grid>
					<DialogActions>
						<Button autoFocus onClick={handleClose}>
							Cancel
						</Button>
						<Button onClick={handleClose} autoFocus>
							Submit
						</Button>
					</DialogActions>
				</Grid>
			</Dialog>
		</div>
	);
};
