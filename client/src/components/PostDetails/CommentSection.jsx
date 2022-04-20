import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/posts";

import makeStyles from "./styles";

const CommentSection = ({ post }) => {
	const classes = makeStyles();
	const dispatch = useDispatch();
	const [comments, setComments] = useState(post?.comments);
	const [comment, setComment] = useState("");
	const user = JSON.parse(localStorage.getItem("profile"));
	const commentsRef = useRef();

	const handleComment = async () => {
		const finalComment = `${user.result.name} : ${comment}`;
		const newComments = await dispatch(commentPost(finalComment, post._id));

		setComments(newComments);
		setComment("");
		commentsRef.current.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div>
			<div>
				<div className={classes.commentsInnerContainer}>
					<Typography gutterBottom variant="h6">
						Comments
					</Typography>
					{comments.map((c, i) => (
						<Typography key={i} gutterBottom variant="subtitle1">
							<strong>{c.split(": ")[0]}</strong>
							{c.split(":")[1]}
						</Typography>
					))}
					<div ref={commentsRef} />
				</div>
				<div>
					<Typography
						gutterBottom
						variant="h6"
						style={{ marginTop: "10px" }}
					>
						Write a comment!)
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
					<br />
					<Button
						style={{ marginTop: "10px" }}
						fullWidth
						disabled={!comment.length}
						color="primary"
						variant="contained"
						onClick={handleComment}
					>
						Comment
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CommentSection;
