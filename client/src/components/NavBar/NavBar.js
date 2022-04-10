import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import memories from "../../images/memories.png";

import makeClasses from "./styles";

const NavBar = () => {
    const classes = makeClasses();

    const user = null;

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography
                    variant="h2"
                    align="center"
                    className={classes.heading}
                    component={Link}
                    to="/"
                >
                    Memories
                </Typography>
                <img
                    src={memories}
                    alt=""
                    height="60"
                    className={classes.image}
                />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar
                            className={classes.profile}
                            alt={user.result.name}
                            src={user.result.imageUrl}
                        >
                            {user.result.name.cardAt(0)}
                        </Avatar>
                        <Typography
                            className={classes.userName}
                            variant="h6"
                        ></Typography>
                        <Button
                            variant="contained"
                            className={classes.logout}
                            color="secondary"
                        >
                            LogOut
                        </Button>
                    </div>
                ) : (
                    <Button
                        component={Link}
                        to="/auth"
                        variant="contained"
                        color="primary"
                    >
                        Sign in
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
