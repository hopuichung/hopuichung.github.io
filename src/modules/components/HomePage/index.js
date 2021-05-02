import React from "react";
import Background from "../../../static/background-homepage.jpg";
import { Container, Typography, withStyles } from "@material-ui/core";
import { Icon } from "@iconify/react";
import githubSquare from "@iconify-icons/fa-brands/github-square";
import linkedinIcon from "@iconify-icons/fa-brands/linkedin";
import mediumSquareFilled from "@iconify-icons/ant-design/medium-square-filled";

const styles = (theme) => ({
    root: {
        height: "100%",
    },
    container: {
        height: "100%",
        minHeight: "100%",
        display: 'flex',
        flexDirection: 'column',
    },
    homePageBackground: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -2,
        backgroundColor: '#010f03', // Average color of the background image.
        backgroundPosition: 'center',
        backgroundImage: `url(${Background})`,
    },
    contentSection: {
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        color: "#38380f"
    },
    summary: {
        color: "#333332",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    socialMediaSection: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    socialMediaIcon: {
        margin: theme.spacing(5),
        fontSize: "3em"
    }
});

function HomePage(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <div className={classes.homePageBackground} />
            <Container className={classes.container}>
                <div className={classes.contentSection}>
                    <Typography
                        component="div"
                        color="inherit"
                        align="center"
                        variant="h4"
                        className={classes.summary}
                    >
                        Hi and welcome! My name is <span class={classes.name}>Michael Ho</span>.
                    </Typography>
                    <Typography
                        component="div"
                        color="inherit"
                        align="center"
                        variant="h5"
                        className={classes.summary}
                    >
                        This is my personal website powered by GitHub Pages.
                    </Typography>
                    <Typography
                        component="div"
                        color="inherit"
                        align="center"
                        variant="h5"
                        className={classes.summary}
                    >
                        You may find more information about me in the following links.
                    </Typography>
                </div>
                <div className={classes.socialMediaSection}>
                    <a target="_blank" href="https://github.com/hopuichung">
                        <Icon icon={githubSquare} className={classes.socialMediaIcon} />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/pui-chung-ho-57b603171/">
                        <Icon icon={linkedinIcon} className={classes.socialMediaIcon} />
                    </a>
                    <a target="_blank" href="https://micho000222.medium.com/">
                        <Icon icon={mediumSquareFilled} className={classes.socialMediaIcon} />
                    </a>
                </div>
            </Container>
        </div>
    )
};

export default withStyles(styles)(HomePage);