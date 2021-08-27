import React from 'react';
import '../stylesheets/enquiry.css';
import { Form, Container, Card, InputGroup,  FormControl, FormFile } from 'react-bootstrap';
import {FaUserAlt} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';
import {RiEdit2Fill} from 'react-icons/ri';
import {FaPhoneAlt,FaFileAlt} from 'react-icons/fa';
import {MdSend} from 'react-icons/md';
const Enquiry = () => {
  return (
    <div className="enquiry">
      <h3 className="text-center">Enquiry Section</h3>
      <Container>
        <Card className="formcard">
            
            <div className="form">
              <div className="input-group">
                <div className="input-group-prepend">
                  <label className="input-group-text" for="inputGroupSelect01">Type of Application</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1">LC</option>
                  <option value="2">Bonafide</option>
                  <option value="3">Enquiry</option>
                </select>
              </div>
            </div>
          </Card>
            
          {/* <Form className="enquiryForm">

            <Card className="card-container">
              <div className="input-groups">
              <label for="text" className="label-text">Name</label>
              <input type="text" className="text-type" name="name"/>
              </div>

              <div className="input-groups">
              <label for="email">Email</label>
              <input className="text-type" name="email" type="email" />
              </div>

              <div className="input-groups">
              <label for="Message">Message</label>
              <textarea>

              </textarea>
              </div>

              <div className="input-groups">
              <input className="text-type" name="email" type="file" />
              </div>


             
            </Card>
          </Form> */}


          

<Form>
  <Card className="enquiryForm" >
<InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"><FaUserAlt /> </InputGroup.Text>
    <FormControl
      placeholder="name"
      aria-label="name"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"><GrMail /> </InputGroup.Text>
    <FormControl
      placeholder="email"
      aria-label="name"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"><FaPhoneAlt /> </InputGroup.Text>
    <FormControl
      placeholder="mobile no"
      aria-label="name"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text><RiEdit2Fill /></InputGroup.Text>
    <FormControl as="textarea" placeholder="description" aria-label="textarea" />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text><FaFileAlt /></InputGroup.Text>
    <FormFile></FormFile>
  </InputGroup>
  
  <button type="submit" className="btn">submit <MdSend /></button>
  </Card>
  </Form>
        
      </Container>
    </div>
  );
}

export default Enquiry;