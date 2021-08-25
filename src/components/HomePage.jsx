/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import { Switch, Route, Router } from 'react-router-dom';
import NoticePage from './NoticePage.jsx';
import RightSidebar from './RightSidebar.jsx';
import 'react-pro-sidebar/dist/css/styles.css';
import '../stylesheets/navbar.css';
import '../stylesheets/sidebar.css';
import CoverPage from './CoverPage.jsx';
import NavBar from '../components/NavBar.jsx';
import Enquiry from '../components/Enquiry.jsx';
const HomePage = (props) => {
    return (
        <div className="HomePage">
            <NavBar />
            <div>
                <Container>
                    <Row>
                        <CoverPage />
                    </Row>
                    <Row>
                        <Col sm={9}>
                       
                            <Enquiry />
                            <NoticePage />
                        </Col>
                        <Col sm={3}>
                            <RightSidebar />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
}

export default HomePage;