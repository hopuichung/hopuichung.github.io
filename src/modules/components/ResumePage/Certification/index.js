import {
    Paper, Box, Typography, Divider, withStyles
} from "@material-ui/core";
import clsx from "clsx";
import { Icon } from '@iconify/react';
import certificateIcon from '@iconify-icons/mdi/certificate';

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

function Certification(props) {

    const { classes } = props;

    return (
        <Paper className={classes.paper}>
            <Box className={classes.information}>
                <Icon icon={certificateIcon} className={clsx(classes.sectionIcon, classes.icon)} />
                <Typography
                    variant="h4"
                    className={classes.sectionTitle}
                >
                    Certification
                </Typography>
            </Box>
            <Divider />
            <Box className={classes.information}>
                <Box className={classes.record}>
                    <Typography
                        variant="h5"
                    >
                        AWS Certified Solutions Architect - Professional
                    </Typography>
                </Box>
                <Box className={classes.record}>
                    <Typography
                        variant="h5"
                    >
                        AWS Certified Solutions Architect - Associate
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default withStyles(styles)(Certification);