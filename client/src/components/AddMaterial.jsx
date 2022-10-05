import React, { useState } from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addMaterial, delMaterial, selectAllMaterials } from '../store/reducers/materialSlice';


const AddMaterial = ({processName}) => {

    const dispatch = useDispatch()
    const allMaterials = useSelector(selectAllMaterials)
    const materials = allMaterials.filter(material => material.processName == processName)

    const [ materialName, setMaterialName ] = useState('')
    const [ unit, setUnit ] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (allMaterials.find(item => item.materialName.split(' ').join('').toLowerCase() == materialName.split(' ').join('').toLowerCase())) {
            setMaterialName('')
            setUnit('')
            alert('Такое имя уже существует')
        }
        else if (materialName && unit) {
            dispatch(addMaterial(processName, materialName, unit))
        }
        setMaterialName('')
        setUnit('')
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form className="mt-3">
                        <Form.Group className="mb-3">
                            <Form.Label>Название материала</Form.Label>
                            <Form.Control
                                name='materialName'
                                type="text"
                                value={materialName}
                                onChange={e => setMaterialName(e.target.value.trim())} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Единица измерения</Form.Label>
                            <Form.Control
                                name='unit'
                                type="text"
                                value={unit}
                                onChange={e => setUnit(e.target.value.trim())} />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            onClick={handleSubmit}>
                            Отправить
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Materials</th>
                                <th>Unit</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                materials.map((item, index) =>
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.materialName}</td>
                                    <td>{item.unit}</td>
                                    <td><Button variant="danger" onClick={e => dispatch(delMaterial(item.id))}>Delete</Button></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>  
    )
}

export default AddMaterial