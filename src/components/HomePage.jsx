/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, Row, Col, FormControl, Button, NavDropdown } from 'react-bootstrap';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import { Link, Router } from 'react-router-dom';
import NoticePage from './NoticePage.jsx';
import RightSidebar from './RightSidebar.jsx';
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import 'react-pro-sidebar/dist/css/styles.css';
import '../stylesheets/navbar.css';
import '../stylesheets/sidebar.css';
import CoverPage from './CoverPage.jsx';
import NavBar from '../components/NavBar.jsx';
const HomePage = (props) => {
    const [menuCollapse, setMenuCollapse] = useState(false);
    const [toggle, setToggle] = useState('mainPage');
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
        toggle === 'mainPage' ? setToggle('toggle') : setToggle('mainPage');
    };

    const [open, setOpen] = useState(false);

    return (
        <div className="HomePage">
            {/* <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand className="logo">
      <img
        src={logo}
        width="50"
        height="40"
        className="d-inline-block align-top"
        alt="logo"
      />
    </Navbar.Brand>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto menus">
                            <Link To="/" className="navlink"><Nav.Link bsPrefix="nav-links" >Home</Nav.Link></Link>
                            <Link To="/Contact" className="navlink" >
                                <Nav.Link bsPrefix="nav-links" >Enquiry</Nav.Link>
                            </Link>
                            <Link To="/Contact" className="navlink">
                                <Nav.Link bsPrefix="nav-links" >Notices</Nav.Link>
                            </Link>
                            <Link To="/Contact" className="navlink">
                                <Nav.Link bsPrefix="nav-links" >Reports</Nav.Link>
                            </Link>

                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-warning">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
            {/* <div className="header" id="header">
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        
                        <div className="closemenu" onClick={menuIconClick}>

                            {menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                                <FiArrowLeftCircle />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome />}>
                                Home
                            </MenuItem>
                            <MenuItem icon={<FaList />}>Category</MenuItem>
                            <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
                            <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
                            <MenuItem icon={<BiCog />}>Settings</MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div> */}

            <NavBar />





            <div className={toggle}>
                <Container>
                    <Row>
                        <CoverPage />
                    </Row>
                    <Row>
                        <Col sm={9}>

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