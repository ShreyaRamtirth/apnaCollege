import React from 'react';
import { AiOutlineAlignLeft, AiOutlineAlignRight, AiOutlineAlignCenter } from 'react-icons/ai';
import { InputGroup, FormControl, Card } from 'react-bootstrap';
import '../stylesheets/createpost.css';
const CreatePost = () => {
        return (
                <div className="create-post">
                        <h1 className="shadow-sm">TEXT EDITOR</h1>
                        <div className="flex-box">
                                <div className="row">
                                        <div className="col">
                                                <button type="button"
                                                        onclick="f1()"
                                                        className=" shadow-sm btn btn-outline-secondary"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Bold Text">
                                                        Bold</button>
                                                <button type="button"
                                                        onclick="f2()"
                                                        className="shadow-sm btn btn-outline-success"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Italic Text">
                                                        Italic</button>
                                                <button type="button"
                                                        onclick="f3()"
                                                        className=" shadow-sm btn btn-outline-primary"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Left Align">
                                                        <AiOutlineAlignLeft /></button>
                                                <button type="button"
                                                        onclick="f4()"
                                                        className="btn shadow-sm btn-outline-secondary"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Center Align">
                                                        <AiOutlineAlignCenter /></button>
                                                <button type="button"
                                                        onclick="f5()"
                                                        className="btn shadow-sm btn-outline-primary"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Right Align">
                                                        <AiOutlineAlignRight /></button>
                                                <button type="button"
                                                        onclick="f6()"
                                                        className="btn shadow-sm btn-outline-secondary"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Uppercase Text">
                                                        Upper Case</button>
                                                <button type="button"
                                                        onclick="f7()"
                                                        className="btn shadow-sm btn-outline-primary"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Lowercase Text">
                                                        Lower Case</button>
                                                <button type="button"
                                                        onclick="f8()"
                                                        className="btn shadow-sm btn-outline-primary"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Capitalize Text">
                                                        Capitalize</button>
                                                <button type="button"
                                                        onclick="f9()"
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
                                        <InputGroup className="mb-3">
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
                                <div className="col">
                                        <Card>
                                                <Card.Body>This is some text within a card body.</Card.Body>
                                        </Card>
                                </div>
                        </div>
                </div>


        );
}

export default CreatePost;