import React from 'react'

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const DieInfo = ({dieQty, handleChangeDie}) => {

    let arr = []
    for (let i = 0; i < dieQty; i++) {
       arr.push(i)
    }

    return (
        arr.map(i => 
            <Row>
                <Col>
                    <Form.Group className="mb-3" key={i}>
                        <Form.Label>Кол-во кристаллов {i+1}</Form.Label>
                        <Form.Control 
                            name={`dieQty${i+1}`}
                            type="number"
                            placeholder={`Q-ty die ${i+1}`}
                            min="0" 
                            max='6'
                            step="1"
                            onChange={handleChangeDie}
                            />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" key={i}>
                        <Form.Label>Высота кристалла {i+1}, мм</Form.Label>
                        <Form.Control 
                            name={`thickness${i+1}`}
                            type="number"
                            placeholder={`thickness ${i+1}`}
                            min="0" 
                            step="0.1"
                            onChange={handleChangeDie}
                            />
                    </Form.Group>
                </Col>   
                <Col>
                    <Form.Group className="mb-3" key={i}>
                        <Form.Label>Длинна кристалла {i+1}, мм </Form.Label>
                        <Form.Control 
                            name={`length${i+1}`}
                            type="number"
                            placeholder={`length ${i+1}`}
                            min="0" 
                            step="0.1"
                            onChange={handleChangeDie}
                            />
                    </Form.Group>
                </Col>   
                <Col>
                    <Form.Group className="mb-3" key={i}>
                        <Form.Label>Ширина кристалла {i+1}, мм </Form.Label>
                        <Form.Control 
                            name={`width${i+1}`}
                            type="number"
                            placeholder={`width ${i+1}`}
                            min="0" 
                            step="0.1"
                            onChange={handleChangeDie}
                            />
                    </Form.Group>
                </Col>                  
            </Row>)
    )
}

export default DieInfo
