import React from "react";
import clsx from "clsx";
import { Box, Grid, Paper, Typography, Divider, withStyles } from "@material-ui/core";
import WorkIcon from '@material-ui/icons/Work';
import { Icon } from '@iconify/react';
import certificateIcon from '@iconify-icons/mdi/certificate';
import bookEducation from '@iconify-icons/mdi/book-education';
import PersonalInformation from "./PersonalInformation";

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

function ResumePage(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={3} className={classes.right}>
                    <PersonalInformation props={props} />
                </Grid>
                <Grid item xs={12} sm={9} className={classes.left}>
                    <Paper className={classes.paper}>
                        <Box className={classes.information}>
                            <WorkIcon className={clsx(classes.sectionIcon, classes.icon)} />
                            <Typography
                                variant="h4"
                                className={classes.sectionTitle}
                            >
                                Working Experience
                            </Typography>
                        </Box>
                        <Divider />
                        <Box className={classes.information}>
                            <Box className={classes.record}>
                                <Typography
                                    variant="h5"
                                >
                                    Hong Kong Trade Development Council
                                </Typography>
                                <Box className={classes.recordDetailSection}>
                                    <Typography
                                        variant="h6"
                                        className={classes.recordDetailTitle}
                                    >
                                        System Analyst
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        className={classes.recordDetailDuration}
                                    >
                                        2021/07 to Current
                                    </Typography>
                                </Box>
                                <Box className={classes.projectDetailSection}>
                                    <Box>
                                        <Typography
                                            variant="body"
                                            className={classes.projectDetailTitle}
                                        >
                                            Virtual Event Platform Development
                                        </Typography>
                                    </Box>
                                    <ul>
                                        <li>
                                            Built a hybrid platform for both physical and virtual event and conference and overview the system design and implementation with development team
                                        </li>
                                        <li>
                                            Provided solutions on integrating seamlessly with 20 internal systems such as SSO, VMS, and AI Business Matching System
                                        </li>
                                        <li>
                                            Integrated Virtual Video and Conferencing features using Tencent RTC, CSS, VOD services and using SendBird for meeting room functionality
                                        </li>
                                    </ul>
                                </Box>
                                <Box className={classes.recordDetailSection}>
                                    <Typography
                                        variant="h6"
                                        className={classes.recordDetailTitle}
                                    >
                                        Analyst Programmer
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        className={classes.recordDetailDuration}
                                    >
                                        2019/07 to 2021/07
                                    </Typography>
                                </Box>
                                <Box className={classes.projectDetailSection}>
                                    <Box>
                                        <Typography
                                            variant="body"
                                            className={classes.projectDetailTitle}
                                        >
                                            Content Management System Integration with ElasticSearch Services
                                        </Typography>
                                    </Box>
                                    <ul>
                                        <li>
                                            Setup AWS environment for development and provided solution on integration with ElasticSearch existing search index
                                        </li>
                                        <li>
                                            Used AWS services like Glue, Batch, S3, CloudWatch for building scheduled batch jobs to synchronizing records to ElasticSearch index
                                        </li>
                                    </ul>
                                </Box>
                                <Box className={classes.projectDetailSection}>
                                    <Box>
                                        <Typography
                                            variant="body"
                                            className={classes.projectDetailTitle}
                                        >
                                            China Sensitive Keyword Project
                                        </Typography>
                                    </Box>
                                    <ul>
                                        <li>
                                            Setup AWS environment and Tencent Environment for development and provided solution on checking search keywords
                                        </li>
                                        <li>
                                            Used AWS services like Glue, S3, CloudWatch, Lambda, API Gateway for building the system
                                        </li>
                                    </ul>
                                </Box>
                                <Box className={classes.projectDetailSection}>
                                    <Box>
                                        <Typography
                                            variant="body"
                                            className={classes.projectDetailTitle}
                                        >
                                            eMarketingplace System 2.0 Revamp Project, Image Recognition Service
                                        </Typography>
                                    </Box>
                                    <ul>
                                        <li>
                                            Setup AWS environment for development and using Google Cloud Vision API for implmenting Machine Learning models for Image Recognition
                                        </li>
                                        <li>
                                            Implemented image recognition using microservices pattern and AWS using API Gateway, Lambda, ECS, CloudFront, DynamoDB, ElastiCache
                                        </li>
                                    </ul>
                                </Box>
                                <Box className={classes.projectDetailSection}>
                                    <Box>
                                        <Typography
                                            variant="body"
                                            className={classes.projectDetailTitle}
                                        >
                                            Always-on Registration and Visitor Management System Integration
                                        </Typography>
                                    </Box>
                                    <ul>
                                        <li>
                                            Designed and built solution for system integration using full AWS features, such as Lambda, API Gateway, DynamoDB, SQS, SNS
                                        </li>
                                        <li>
                                            Built RESTful API for Always-on Registration (AOR) for sending request to Visitor Management System (VMS) which is using SOAP API for interface
                                        </li>
                                        <li>
                                            Built a system that are able to fan-out the VMS system calls for future systems' integrations
                                        </li>
                                    </ul>
                                </Box>
                                <Box className={classes.projectDetailSection}>
                                    <Box>
                                        <Typography
                                            variant="body"
                                            className={classes.projectDetailTitle}
                                        >
                                            Single Sign-On Regional Migration and Enhancement
                                        </Typography>
                                    </Box>
                                    <ul>
                                        <li>
                                            Migrated existing SSO application in AWS from Singapore to Hong Kong
                                        </li>
                                        <li>
                                            Rebuilt CloudFormation and Programs for migrations and test the overall results
                                        </li>
                                        <li>
                                            Resumed the Audit Log services using AWS Glue features to consolidate the logs files in S3
                                        </li>
                                    </ul>
                                </Box>
                                <Box className={classes.projectDetailSection}>
                                    <Box>
                                        <Typography
                                            variant="body"
                                            className={classes.projectDetailTitle}
                                        >
                                            SMS Service Regional Migration
                                        </Typography>
                                    </Box>
                                    <ul>
                                        <li>
                                            Migrated existing SMS application in AWS from Singapore to Hong Kong
                                        </li>
                                        <li>
                                            Tested the SMS services with Twilio as the backend services for SMS functionality
                                        </li>
                                    </ul>
                                </Box>
                            </Box>
                            <Box className={classes.record}>
                                <Typography
                                    variant="h5"
                                >
                                    Kinetix System Limited
                                </Typography>
                                <Box className={classes.recordDetailSection}>
                                    <Typography
                                        variant="h6"
                                        className={classes.recordDetailTitle}
                                    >
                                        Analyst Programmer
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        className={classes.recordDetailDuration}
                                    >
                                        2019/03 to 2019/07
                                    </Typography>
                                </Box>
                                <Box className={classes.projectDetailSection}>
                                    <Box>
                                        <Typography
                                            variant="body"
                                            className={classes.projectDetailTitle}
                                        >
                                            Oracle Fusion Middleware Development Support
                                        </Typography>
                                    </Box>
                                    <ul>
                                        <li>
                                            Worked with Oracle Consultants to solve technical issues for Financial System Migrations
                                        </li>
                                        <li>
                                            Made use of Oracle SOA Suite for building RESTful and SOAP services for Oracle Fusion Integration
                                        </li>
                                        <li>
                                            Helped to configure WebLogic and EM Server
                                        </li>
                                    </ul>
                                </Box>
                                <Box className={classes.recordDetailSection}>
                                    <Typography
                                        variant="h6"
                                        className={classes.recordDetailTitle}
                                    >
                                        Programmer
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        className={classes.recordDetailDuration}
                                    >
                                        2017/07 to 2019/03
                                    </Typography>
                                </Box>
                                <Box className={classes.projectDetailSection}>
                                    <Box>
                                        <Typography
                                            variant="body"
                                            className={classes.projectDetailTitle}
                                        >
                                            Electronic Data Submission Platform
                                        </Typography>
                                    </Box>
                                    <ul>
                                        <li>
                                            Helped to setup Docker environment and microservices for Spring Boot applications and SPAs
                                        </li>
                                        <li>
                                            Setup Jenkins pipelines for CICD
                                        </li>
                                        <li>
                                            Integrated Jenkins with various code smell tools (SonarQube and OWASP)
                                        </li>
                                    </ul>
                                </Box>
                                <Box className={classes.projectDetailSection}>
                                    <Box>
                                        <Typography
                                            variant="body"
                                            className={classes.projectDetailTitle}
                                        >
                                            Redevelopment of e-Leave System in Civil Service Bureau
                                        </Typography>
                                    </Box>
                                    <ul>
                                        <li>
                                            Rewrote system from Java 1.4 to Java 8
                                        </li>
                                        <li>
                                            Migrate application server from WebSphere to WildFly and SQL database from DB2 to MySQL
                                        </li>
                                        <li>
                                            Provided deployment plan and related deployment application
                                        </li>
                                    </ul>
                                </Box>
                                <Box className={classes.recordDetailSection}>
                                    <Typography
                                        variant="h6"
                                        className={classes.recordDetailTitle}
                                    >
                                        Programmer Trainee
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        className={classes.recordDetailDuration}
                                    >
                                        2016/06 to 2017/07
                                    </Typography>
                                </Box>
                                <Box className={classes.projectDetailSection}>
                                    <Box>
                                        <Typography
                                            variant="body"
                                            className={classes.projectDetailTitle}
                                        >
                                            Website Revamp Project, Mobile App and Kiosk development
                                        </Typography>
                                    </Box>
                                    <ul>
                                        <li>
                                            Rewrote system from .Net WebForm to ASP.NET MVC 4
                                        </li>
                                        <li>
                                            Build API for mobile app and kiosk
                                        </li>
                                    </ul>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
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
                </Grid>
            </Grid>
        </div>
    )
};

export default withStyles(styles)(ResumePage);