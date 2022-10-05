import React from "react"
import { useSelector } from "react-redux"
import { Link, Route, Routes } from "react-router-dom"

import Container from "react-bootstrap/esm/Container"
import ListGroup from 'react-bootstrap/ListGroup';

import { selectProcessByFilter } from "../../store/selectors/selector"
import ProcessFilter from "../filters/ProcessFilter"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import ProcessItems from "../ProcessItems";


const Process = () => {
    const menu = useSelector(selectProcessByFilter)

    return (
        <>
        <Container >
            <ProcessFilter />
            <Row>
                <Col sm={3} >
                    <ListGroup variant="flush">
                    {
                        menu.length > 0 ? 
                        <div style={{ margin: 20 }}> 
                        { 
                            menu.map(item => 
                                <ListGroup.Item key={item.id}>
                                <li style={{listStyleType: 'none', textAlign: 'center', fontSize: 20}}>
                                    <Link to={item.processName.split(' ').join('').toLowerCase()}>{item.processName}</Link>
                                </li>
                                </ListGroup.Item>
                                )
                            }
                        </div>  
                        : 
                        <div style={{ textAlign: 'center', margin: 20 }}>Процессы отсутсвуют!</div>
                    }
                    </ListGroup>
                    
                </Col>
                <Col sm={9} > 
                    <Routes>
                        {menu.map(item =><Route key={item.id} path={item.processName.split(' ').join('').toLowerCase() + '/*'} element={<ProcessItems processName={item.processName} />}/>)}
                    </Routes>
                </Col>
            </Row>
        </Container>
       
        </>
    )
}

export default Process