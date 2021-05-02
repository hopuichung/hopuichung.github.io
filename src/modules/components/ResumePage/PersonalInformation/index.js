import {
    Paper, Typography, Divider, Box, Chip, withStyles
} from "@material-ui/core";
import WorkIcon from '@material-ui/icons/Work';
import { Icon } from '@iconify/react';
import stickerCheck from '@iconify-icons/mdi/sticker-check';
import earthIcon from '@iconify-icons/mdi/earth';
import githubSquare from "@iconify-icons/fa-brands/github-square";
import linkedinIcon from "@iconify-icons/fa-brands/linkedin";
import mediumSquareFilled from "@iconify-icons/ant-design/medium-square-filled";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = (theme) => ({
    paper: {
        color: theme.palette.text.secondary,
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    },
    chip: {
        margin: theme.spacing(0.2)
    },
    personalInformation: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: theme.spacing(1.5),
        marginBottom: theme.spacing(1.5),
    },
    personalInformationIcon: {
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
});

function PersonalInformation(props) {

    const {classes} = props;

    return (
        <Paper className={classes.paper}>
            <Typography
                variant="h4"
                className={classes.sectionTitle}
            >
                Ho Pui Chung, Michael
            </Typography>
            <Divider />
            <Box className={classes.personalInformation}>
                <WorkIcon className={classes.icon} />
                <Typography
                    variant="body"
                >
                    System Analyst
                </Typography>
            </Box>
            <Box className={classes.personalInformation}>
                <LocationOnIcon className={classes.icon} />
                <Typography
                    variant="body"
                >
                    Hong Kong
                </Typography>
            </Box>
            <Box className={classes.personalInformation}>
                <Icon icon={linkedinIcon} className={classes.icon} />
                <Typography
                    variant="body"
                >
                    <a target="_parent" rel="noopener" href="https://www.linkedin.com/in/pui-chung-ho-57b603171/">
                        Linkedin
                    </a>
                </Typography>
            </Box>
            <Box className={classes.personalInformation}>
                <Icon icon={githubSquare} className={classes.icon} />
                <Typography
                    variant="body"
                >
                    <a target="_parent" rel="noopener" href="https://www.linkedin.com/in/pui-chung-ho-57b603171/">
                        Github
                    </a>
                </Typography>
            </Box>
            <Box className={classes.personalInformation}>
                <Icon icon={mediumSquareFilled} className={classes.icon} />
                <Typography
                    variant="body"
                >
                    <a target="_parent" rel="noopener" href="https://www.linkedin.com/in/pui-chung-ho-57b603171/">
                        Medium
                    </a>
                </Typography>
            </Box>
            <Divider />
            <Box className={classes.personalInformation}>
                <Icon icon={stickerCheck} className={classes.icon} />
                <Typography
                    variant="h6"
                    className={classes.sectionTitle}
                >
                    Skills:
                </Typography>
            </Box>
            <Box className={classes.personalInformation}>
                <Chip label="AWS" className={classes.chip} />
                <Chip label="Spring Boot" className={classes.chip} />
                <Chip label="Java" className={classes.chip} />
                <Chip label="Python" className={classes.chip} />
                <Chip label="Node.JS" className={classes.chip} />
                <Chip label="React" className={classes.chip} />
                <Chip label="SQL" className={classes.chip} />
                <Chip label="Docker" className={classes.chip} />
                <Chip label="microservices design" className={classes.chip} />
            </Box>
            <Divider />
            <Box className={classes.personalInformation}>
                <Icon icon={earthIcon} className={classes.icon} />
                <Typography
                    variant="h6"
                    className={classes.sectionTitle}
                >
                    Languages:
                </Typography>
            </Box>
            <Box className={classes.personalInformation}>
                <Chip label="English" className={classes.chip} />
                <Chip label="Cantonese" className={classes.chip} />
                <Chip label="Mandarin" className={classes.chip} />
            </Box>
        </Paper>
    );
};

export default withStyles(styles)(PersonalInformation);