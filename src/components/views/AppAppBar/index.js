import { Link, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGlow: 1,
    },
    toolbar: {
        justifyContent: 'space-between',
    },
    left: {
        flex: 1,
    },
    title: {
        fontSize: 24,
    },
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3),
    },
}));

export default function AppAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appbar} color="primary">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.left} />
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        className={classes.title}
                        href="/"
                    >
                        Michael Ho
                    </Link>
                    <div className={classes.right}>
                        <Link
                            variant="h6"
                            underline="none"
                            color="inherit"
                            className={classes.rightLink}
                            href="/resume"
                        >
                            Resume
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}