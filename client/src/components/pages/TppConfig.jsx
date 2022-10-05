import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import TppForm from '../TppForm'
import AddProcess from '../AddProcess';

export default function TppConfig () {
    return (
        <Container>
            <Row>
                <Col><TppForm /></Col>
                <Col><AddProcess /></Col>
            </Row>    
        </Container>
    )
}