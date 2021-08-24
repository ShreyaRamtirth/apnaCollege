/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import { Button, Card, Form, Toast } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import HomePage from './HomePage.jsx';
import '../stylesheets/loginpage.css';


 const LoginPage=()=> {
        const history = useHistory();    
        return (
            
            <div className="loginContainer">
                
                <Card className="loginCard" style={{ width: '24rem' }}>
                    <Card.Header className="text-center heading"><h1>Sign In</h1></Card.Header>
                    <Card.Body><Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <div className="btn-grp">
                        <Router>
                        <Link to="/Home"><Button onClick="()=>{history.push('/')}" className="btn" variant="success">Student Login</Button></Link>
                        
                        <Link to="/Home"><Button onClick="()=>{history.push('/')}" variant="danger">Admin Login</Button></Link>
                        </Router>
                        </div>
                    </Form>
                    </Card.Body>
                </Card>
 
            </div>
        );
    }

    export default LoginPage;