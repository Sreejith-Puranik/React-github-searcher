import React from "react";
import {Container} from "reactstrap";

const Footer = () => {
    return(
        <Container
        fluid
        tag = "footer"
        className = "text-center bg-info text-white text-uppercase fixed-bottom p-3"
        >
            <p>lco github search app with firebase</p>
        </Container>
    );
};

export default Footer;