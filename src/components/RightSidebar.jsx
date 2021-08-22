import React from 'react';
import { Container, Card } from 'react-bootstrap';
import {FcAdvertising} from 'react-icons/fc';
import '../stylesheets/rightsidebar.css';


const RightSidebar=()=>{
    return(
        <div className="rightSidebar">
            <Container>
                <h3><FcAdvertising size={40}/>What's New</h3>
            <Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card>  
<Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card>  
            </Container>
        </div>
    );
}

export default RightSidebar;