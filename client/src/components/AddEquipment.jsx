import React, { useState } from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addEquipment, delEquipment, selectAllEquipment } from '../store/reducers/equipmentSlice';
import { addTool, delTool, selectAllTool } from '../store/reducers/toolSlice';


const AddEquipment = ({processName}) => {

    const dispatch = useDispatch()
    const equipments = useSelector(selectAllEquipment).filter(equip => equip.process === processName)
    const tools = useSelector(selectAllTool).filter(tool => tool.process === processName)
    

    const [ equipment, setEquipment ] = useState('')
    const [ tool, setTool ] = useState('')
    
    const handleSubmitEquip = (e) => {
        e.preventDefault()
        if (equipment) {
            dispatch(addEquipment(processName, equipment))
        }
        setEquipment('')
    }

    const handleSubmitTool = (e) => {
        e.preventDefault()
        if (tool) {
            dispatch(addTool(processName, tool))
        }
        setTool('')
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form className="mt-3">
                        <Form.Group className="mb-3">
                            <Form.Label>Название оборудования</Form.Label>
                            <Form.Control
                                name='equipment'
                                type="text"
                                value={equipment}
                                onChange={e => setEquipment(e.target.value)} />
                        </Form.Group>
        
                        <Button
                                variant="primary"
                                type="submit"
                                onClick={handleSubmitEquip}>
                                Добавить оборудование
                        </Button>

                        <Form.Group className="mb-3 mt-3">
                            <Form.Label>Название оснастки</Form.Label>
                            <Form.Control
                                name='tool'
                                type="text"
                                value={tool}
                                onChange={e => setTool(e.target.value.trim())} />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            onClick={handleSubmitTool}>
                            Добавить оснастку
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Оборудование</th>
                                <th>Действие</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                                equipments.map((equip, index) => 
                                    <tr key={equip.id}>
                                        <td>{index +1}</td>
                                        <td>{equip.equipment}</td>
                                        <td><Button variant="danger" onClick={e => dispatch(delEquipment(equip.id))}>Удалить</Button></td>
                                    </tr>)
                           }
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Оснастка</th>
                                <th>Действие</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                                tools.map((tool, index) => 
                                    <tr key={tool.id}>
                                        <td>{index +1}</td>
                                        <td>{tool.tool}</td>
                                        <td><Button variant="danger" onClick={e => dispatch(delTool(tool.id))}>Удалить</Button></td>
                                    </tr>)
                           }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>  
    )
}


export default AddEquipment