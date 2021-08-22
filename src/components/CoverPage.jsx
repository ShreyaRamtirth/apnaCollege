import React from 'react';
import {Card} from 'react-bootstrap';
import '../stylesheets/coverpage.css';
const CoverPage=()=>{
    return(
        <div className="CoverPage">
            <Card className="bg-dark text-light coverImage">
            <Card.ImgOverlay>
            <Card.Title><h1>University Of Cambridge</h1></Card.Title>
            <Card.Subtitle className="coverSubtitle">Established in year 1991</Card.Subtitle>
            <Card.Text className="coverText">Faculties are Arts, Science and Commerce</Card.Text>
            </Card.ImgOverlay>
        </Card>
        </div>
    

    );
}

export default CoverPage;