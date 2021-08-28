import React,{useState} from 'react';
import { AiOutlineAlignLeft, AiOutlineAlignRight, AiOutlineAlignCenter } from 'react-icons/ai';
import { InputGroup, FormControl, Tab, TabContainer, Row, Nav, Col, Button } from 'react-bootstrap';
import '../stylesheets/createpost.css';
const CreatePost = () => {
        function makeBold() {
                if(window.getSelection()==="")
                        document.getElementById("textarea1").style.fontWeight = "Bold";
                else
                        console.log(document.execCommand('bold'));
        }
        
        function makeItalic() {
                document.getElementById("textarea1").style.fontStyle = "italic";
        }
        
        function alignTextLeft() {
                document.getElementById("textarea1").style.textAlign = "left";
        }
        
        function alignTextCenter() {
                document.getElementById("textarea1").style.textAlign = "center";
        }
        
        function alignTextRight() {
                document.getElementById("textarea1").style.textAlign = "right";
        }
        
        function ChangeToUppercase() {
                document.getElementById("textarea1").style.textTransform = "uppercase";
        }
        
        function ChangeToLowercase() {
                document.getElementById("textarea1").style.textTransform = "lowercase";
        }
        
        function ChangeToCaptilize() {
                document.getElementById("textarea1").style.textTransform = "capitalize";
        }
        
        function ClearALL() {
                document.getElementById("textarea1").style.fontWeight = "normal";
                document.getElementById("textarea1").style.textAlign = "left";
                document.getElementById("textarea1").style.fontStyle = "normal";
                document.getElementById("textarea1").style.textTransform = "capitalize";
                document.getElementById("textarea1").value = " ";
        }
        
        return (
                <div className="create-post">
                        <h1 className="shadow-sm">TEXT EDITOR</h1>
                        <div className="flex-box">
                                <div className="row">
                                        <div className="col all-buttons">
                                                <button type="button"
                                                        onClick={makeBold}
                                                        className=" shadow-sm btn btn-outline-secondary"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Bold Text">
                                                        Bold</button>
                                                <button type="button"
                                                        onClick={makeItalic}
                                                        className="shadow-sm btn btn-outline-success"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Italic Text">
                                                        Italic</button>
                                                <button type="button"
                                                        onClick={alignTextLeft}
                                                        className=" shadow-sm btn btn-outline-primary"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Left Align">
                                                        <AiOutlineAlignLeft /></button>
                                                <button type="button"
                                                        onClick={alignTextCenter}
                                                        className="btn shadow-sm btn-outline-secondary"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Center Align">
                                                        <AiOutlineAlignCenter /></button>
                                                <button type="button"
                                                        onClick={alignTextRight}
                                                        className="btn shadow-sm btn-outline-primary"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Right Align">
                                                        <AiOutlineAlignRight /></button>
                                                <button type="button"
                                                        onClick={ChangeToUppercase}
                                                        className="btn shadow-sm btn-outline-secondary"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Uppercase Text">
                                                        Upper Case</button>
                                                <button type="button"
                                                        onClick={ChangeToLowercase}
                                                        className="btn shadow-sm btn-outline-primary"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Lowercase Text">
                                                        Lower Case</button>
                                                <button type="button"
                                                        onClick={ChangeToCaptilize}
                                                        className="btn shadow-sm btn-outline-primary"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Capitalize Text">
                                                        Capitalize</button>
                                                <button type="button"
                                                        onClick={ClearALL}
                                                        className="btn shadow-sm btn-outline-primary side"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Tooltip on top">
                                                        Clear Text</button>
                                        </div>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col">
                                        <InputGroup className="mb-3 input-group-container">
                                                <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                                                <FormControl
                                                        placeholder="Enter your post title"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                />
                                        </InputGroup></div>
                        </div>
                        <div className="row">
                                <div className="col">
                                        <div className="flex-box">
                                                <textarea id="textarea1"
                                                        className="input shadow"
                                                        name="name"
                                                        rows="15"
                                                        cols="80"
                                                        placeholder="Your text here ">
                                                </textarea>
                                        </div>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col tabcontainer">
                                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                                <Row>
                                                        <Col sm={3}>
                                                                <Nav variant="pills" className="flex-column">
                                                                        <Nav.Item>
                                                                                <Nav.Link eventKey="first">Privacy</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item>
                                                                                <Nav.Link eventKey="second">Tags</Nav.Link>
                                                                        </Nav.Item>
                                                                </Nav>
                                                        </Col>
                                                        <Col sm={9}>
                                                                <Tab.Content>
                                                                        <Tab.Pane eventKey="first">
                                                                                <div className="privacy-inputs">
                                                                                <div className="checkbox-wrap">
                                                                                        <input type="checkbox" value="Bcom" /> BCOM
                                                                                </div>
                                                                                <div className="checkbox-wrap">
                                                                                <input type="checkbox" value="BBA" /> BBA</div>
                                                                                <div className="checkbox-wrap">
                                                                                <input type="checkbox" value="BBA(IB)" /> BBA(IB)</div>
                                                                                <div className="checkbox-wrap">
                                                                                <input type="checkbox" value="BSC" /> Bsc</div>
                                                                                <div className="checkbox-wrap">
                                                                                <input type="checkbox" value="Msc" /> Msc</div>
                                                                                <div className="checkbox-wrap">
                                                                                <input type="checkbox" value="BBA(CA)" /> BBA(CA)</div>
                                                                                <div className="checkbox-wrap">
                                                                                <input type="checkbox" value="BA" /> BA</div>
                                                                                </div>
                                                                        </Tab.Pane>
                                                                        <Tab.Pane eventKey="second">
                                                                                <p>Add some related tags</p>
                                                                                <div className="tag-input">
                                                                                <input type="text" placeholder="placement, work from home, competition" />
                                                                                </div>
                                                                        </Tab.Pane>
                                                                </Tab.Content>
                                                        </Col>
                                                </Row>
                                        </Tab.Container>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col submit-button">
                                <Button variant="outline-warning">Submit</Button>
                                </div>
                        </div>
                </div>


        );
}

export default CreatePost;