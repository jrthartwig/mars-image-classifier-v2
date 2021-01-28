import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    root: {
        height: "100%",
        backgroundColor: "#738FA7",
        margin: "0"
    },
    container: {
        display: "flex",
        flexGrow: "1",
        height: "100%"
    },
    content: {
        height: "100vh",
        color: "#FFFFFF",
        fontFamily: "Courier New",
        fontWeight: "bold",
        padding: "15px"
    }
})




const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <div>Hi, I'm Jocelynn Hartwig</div>
                </div>
            </div>
        </div>
    )
}

export default Home; 