import React from 'react';
import NavBar from './NavBar';
import CoverPage from './CoverPage';
import NoticePage from './NoticePage';
import Enquiry from './Enquiry';
import CreatePost from './CreatePost';
import RightSidebar from './RightSidebar';
import { Container, Row, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
const Routes = () => {
  return (
    <div>
      <NavBar />
      {console.log("hello")}
      <Container>
        <Row>
          <CoverPage />
        </Row>
      </Container>
      <Container>
        <Row >
          <Col sm={9} md={8}>
            <Route path="/Home/Notices">
              <NoticePage />
            </Route>
            <Route path="/Home/Enquiry">
              <Enquiry />
            </Route>
            <Route path="/Home/Create">
              <CreatePost />
            </Route>

          </Col>
          <Col sm={3} md={4}>
            <RightSidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Routes;