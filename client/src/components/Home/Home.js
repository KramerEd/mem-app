import React, { useState, useEffect } from "react";
import { Container, Grid, Grow } from "@material-ui/core";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import makeStyles from "../../style";

const Home = () => {
    const [currentId, setCurrentId] = useState(null);

    const classes = makeStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <Grow in>
            <Container>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={3}
                    className={classes.mainContainer}
                >
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;