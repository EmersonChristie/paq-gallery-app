import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const ArtCard = (props) => {
    const [imgSource, setImgSource] = useState('#6ba584');

    

    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src="https://cdn.artcld.com/img/w_455,h_600,c_fit/zsowfzvbv92bygj3a3dt.jpg" />
            <Card.Body>
                <Card.Title>{props.artists}</Card.Title>
                <Card.Text>{props.title}</Card.Text>
                <Card.Text>{props.dimensions}</Card.Text>
            </Card.Body>
        </Card>
    )

}

