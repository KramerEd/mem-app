import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	media: {
		borderRadius: "20px",
		objectFit: "cover",
		width: "100%",
		maxHeight: "600px",
	},
	card: {
		display: "flex",
		width: "100%",
		[theme.breakpoints.down("sm")]: {
			flexWrap: "wrap",
			flexDirection: "column-reverse",
		},
	},
	section: {
		borderRadius: "20px",
		margin: "10px",
		flex: "1 1 20%",
	},
	imageSection: {
		flex: "1 1 60%",
		[theme.breakpoints.down("sm")]: {
			marginLeft: 0,
		},
	},
	recommendedPosts: {
		display: "flex",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
	},
	loadingPaper: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "20px",
		borderRadius: "15px",
		height: "39vh",
	},
	commentsOuterContainer: {
		display: "flex",
		justifyContent: "space-between",
	},
	commentsInnerContainer: {
		height: "200px",
		overflowY: "auto",
		marginRight: "30px",
	},
	"@global": {
		"*::-webkit-scrollbar": {
			width: "0.4em",
		},
		"*::-webkit-scrollbar-track": {
			"-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
		},
		"*::-webkit-scrollbar-thumb": {
			backgroundColor: "rgba(0,0,0,.6)",
			borderRadius: "50px",
		},
	},
}));
