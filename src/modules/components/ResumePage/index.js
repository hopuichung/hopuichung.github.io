import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import PersonalInformation from "./PersonalInformation";
import Certification from "./Certification";
import Education from "./Education";
import WorkingExperience from "./WorkingExperience";

const styles = (theme) => ({
    root: {
        display: 'flex',
        padding: theme.spacing(2),
        maxWidth: '100%',
        flexDirection: 'row'
    },
    right: {
        margin: 0,
        padding: 0,
    },
    left: {
        margin: 0,
        padding: 0,
    },
});

function ResumePage(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={5} md={4} className={classes.right}>
                    <PersonalInformation props={props} />
                </Grid>
                <Grid item xs={12} sm={7} md={8} className={classes.left}>
                    <WorkingExperience />
                    <Certification />
                    <Education />
                </Grid>
            </Grid>
        </div>
    )
};

export default withStyles(styles)(ResumePage);