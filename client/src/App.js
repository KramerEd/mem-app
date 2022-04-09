import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from "./images/memories.png";
import makeStyles from "./style";

const App = () => {
    const classes = makeStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar
                className={classes.appBar}
                position="static"
                color="inherit"
            >
                <Typography
                    variant="h2"
                    align="center"
                    className={classes.heading}
                >
                    Memories
                </Typography>
                <img
                    src={memories}
                    alt=""
                    srcset=""
                    height="60"
                    className={classes.image}
                />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid
                        container
                        justify="space-between"
                        alignItems="stretch"
                        spacing="3"
                    >
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;
