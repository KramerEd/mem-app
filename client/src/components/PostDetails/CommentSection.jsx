import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import makeStyles from "./styles";

const CommentSection = ({ post }) => {
	const classes = makeStyles();
	const [comments, setComments] = useState([
		1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7,
	]);
	const [comment, setComment] = useState("");

	const handleClick = (params) => {};
	return (
		<div>
			<div>
				<Typography variant="h4">Write a comment!)</Typography>
				<div className={classes.commentsInnerContainer}>
					{comments.map((c, i) => (
						<Typography key={i} gutterBottom variant="subtitle1">
							Comment {i}
						</Typography>
					))}
				</div>
				<div className="" style={{ widht: "70%" }}>
					<Typography gutterBottom variant="h6">
						Write a comment
					</Typography>
					<TextField
						fullWidth
						rows={4}
						variant="outlined"
						label="Comment"
						multiline
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
					<Button
						style={{ marginTop: "10px" }}
						fullWidth
						disabled={!comment}
						variant="contained"
						onClick={handleClick}
					>
						Comment
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CommentSection;
