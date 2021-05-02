import React from "react";
import { Container } from "@material-ui/core";
import AppAppBar from "../../views/AppAppBar";

function ResumePage(props) {
    return (
        <div>
            <React.Fragment>
                <AppAppBar />
                <Container maxWidth="sm">
                </Container>
            </React.Fragment>
        </div>
    )
};

export default ResumePage;