import React, { useState }from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

import DieInfo from './DieInfo';

const PelletCalculator = () => {

    const initalState = {
        weight: '4.3',
        unitQty: '',
        thickness: '',
        dieDifQty: '1',
        location: '',
    }
    const [ calc, setCalc ] = useState(initalState)
    const [ die, setDie ] = useState('')

    const handleChange = (e) => {
        setCalc({...calc, [e.target.name]: e.target.value})
    }

    const handleChangeDie = (e) => {
        setDie({...die, [e.target.name]: e.target.value})
    }


    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Масса таблетки</Form.Label>
                            <Form.Control 
                                name='weight'
                                type="number"
                                placeholder="Масса таблетки" 
                                min="0"
                                step="0.1"
                                value={calc.weight}
                                onChange={handleChange}
                                />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Кол-во юнитов</Form.Label>
                            <Form.Control 
                                name='unitQty'
                                type="number" 
                                placeholder="Кол-во юнитов" 
                                min="0" 
                                step="1"
                                value={calc.unitQty}
                                onChange={handleChange}
                                />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Толщина подложки</Form.Label>
                            <Form.Select aria-label="Default select example" name='thickness' value={calc.thickness} onChange={handleChange}>
                                <option disabled selected value=''>Толщина...</option>
                                <option value={0.14}>140 мкм</option>
                                <option value={0.24}>240 мкм</option>
                                <option value={0.35}>350 мкм</option>
                                <option value={0.6}>600 мкм</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label>Кол-во различных кристаллов</Form.Label>
                            <Form.Control 
                                name='dieDifQty'
                                type="number" 
                                placeholder="Кол-во юнитов на подложке"
                                min="0" 
                                step="1" 
                                value={calc.dieDifQty}
                                onChange={handleChange}
                                />
                        </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3">
                            <Form.Label>Расположение кристаллов</Form.Label>
                            <Form.Select aria-label="Default select example" name='location' value={calc.location} onChange={handleChange}>
                                <option disabled selected value=''>Расположение...</option>
                                <option value='stack'>В стопку</option>
                                <option value='wide'>Рядом</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                   <DieInfo dieQty={calc.dieDifQty} handleChangeDie={handleChangeDie}/>
                </Row>

                <Button 
                    variant="primary" 
                    type="submit"
                    onClick={handleSubmit}>
                    Считать
                </Button>
            </Form>
        </Container>
        
    )
}

export default PelletCalculator