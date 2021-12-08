import React, { useState } from "react";
import {
	Grid,
	Box,
	Typography,
	Paper,
	IconButton,
	Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const Note = (props) => {
	console.log(props);
	const [checked, setChecked] = useState(props.completed);
	return (
		<Box
			elevation={5}
			component={Paper}
			sx={{
				backgroundColor: "#FFD833",
				maxWidth: "20vw",
				border: "2px solid #FFD833",
				maxHeight: "max-content",
				borderRadius: "5px",
				margin: "1rem ",
				padding: "0.3rem",
			}}
		>
			<Grid item container direction="row" wrap>
				<Grid item xs={10} align="left">
					<Typography
						sx={{
							textDecoration: checked ? "line-through" : "",
						}}
					>
						{props.note.description}
					</Typography>
				</Grid>
				<Grid item xs={1}>
					<Checkbox
						checked={checked}
						onChange={() => setChecked((prev) => !prev)}
						checkedIcon={
							<CheckCircleIcon
								fontSize="small"
								sx={{
									color: "#cca500",
									cursor: "pointer",
								}}
							/>
						}
						icon={
							<CheckCircleOutlineIcon
								sx={{
									color: "#cca500",
									cursor: "pointer",
								}}
								fontSize="small"
							/>
						}
					/>
				</Grid>
				<Grid item xs={12} align="right" justify="center">
					<IconButton>
						<DeleteIcon fontSize="small" />
					</IconButton>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Note;
