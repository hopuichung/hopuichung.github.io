import {
    Paper, Box, Typography, Divider, withStyles
} from "@material-ui/core";
import clsx from "clsx";
import { Icon } from '@iconify/react';
import bookEducation from '@iconify-icons/mdi/book-education';

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
    paper: {
        color: theme.palette.text.secondary,
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    },
    chip: {
        margin: theme.spacing(0.2)
    },
    information: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: theme.spacing(1.5),
        marginBottom: theme.spacing(1.5),
    },
    informationIcon: {
        fontSize: '1.5em',
    },
    icon: {
        color: '#cfc144',
        marginRight: theme.spacing(3),
        fontSize: '1.5em'
    },
    sectionIcon: {
        fontSize: '3em',
    },
    sectionTitle: {
        color: 'rgba(0, 0, 0, 0.54)',
    },
    record: {
        width: "100%",
        padding: theme.spacing(2)
    },
    recordDetailSection: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1
    },
    recordDetailTitle: {
        marginLeft: theme.spacing(1),
        flexGrow: 1,
        color: '#877e2b',
    },
    recordDetailDuration: {
        marginRight: theme.spacing(2),
        color: '#877e2b',
    },
    projectDetailSection: {
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
        display: 'block',
    },
    projectDetailTitle: {
        color: 'rgba(0, 0, 0, 0.54)',
        width: '100%',
        fontWeight: 'bold'
    },
    projectDetailInformation: {
        color: 'rgba(0, 0, 0, 0.54)',
        width: '100%',
    }
});

function Education(props) {

    const { classes } = props;

    return (
        <Paper className={classes.paper}>
            <Box className={classes.information}>
                <Icon icon={bookEducation} className={clsx(classes.sectionIcon, classes.icon)} />
                <Typography
                    variant="h4"
                    className={classes.sectionTitle}
                >
                    Education
                </Typography>
            </Box>
            <Divider />
            <Box className={classes.information}>
                <Box className={classes.record}>
                    <Typography
                        variant="h5"
                    >
                        The Chinese University of Hong Kong
                    </Typography>
                    <Box className={classes.recordDetailSection}>
                        <Typography
                            variant="h6"
                            className={classes.recordDetailTitle}
                        >
                            Master of Science in Computer Science
                        </Typography>
                        <Typography
                            variant="h6"
                            className={classes.recordDetailDuration}
                        >
                            2017/09 to 2019/07
                        </Typography>
                    </Box>
                </Box>
                <Box className={classes.record}>
                    <Typography
                        variant="h5"
                    >
                        The Chinese University of Hong Kong
                    </Typography>
                    <Box className={classes.recordDetailSection}>
                        <Typography
                            variant="h6"
                            className={classes.recordDetailTitle}
                        >
                            Bachelor of Engineering in Information Engineering
                        </Typography>
                        <Typography
                            variant="h6"
                            className={classes.recordDetailDuration}
                        >
                            2012/09 to 2016/07
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
};

export default withStyles(styles)(Education);