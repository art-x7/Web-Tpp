import React from 'react'
import { useSelector } from 'react-redux'

import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { selectAllMaterials } from '../store/reducers/materialSlice';

const FormMaterial = ({processName, handleMaterialChange, mat}) => {

    const materials = useSelector(selectAllMaterials).filter(item => item.processName === processName)

    return (
        <Row>
            <Col>
                <Form.Group className="mb-3">
                    <Form.Label>Материал</Form.Label>
                    <Form.Select aria-label="Default select example" name='material[]' value={mat.material} onChange={handleMaterialChange}>
                        <option disabled selected value=''>Материалы...</option>
                        {materials.map(item => <option key={item.id} value={item.materialName}>{item.materialName}</option>)}
                    </Form.Select>
                </Form.Group>                   
            </Col>
            <Col sm={3}>
                <Form.Group className="mb-3" >
                    <Form.Label>Расход на 1000 шт</Form.Label>
                    <Form.Control type="text" placeholder="Расход" name='consumption[]' value={mat.consumption} onChange={handleMaterialChange}/>
                </Form.Group>
            </Col>
            <Col sm={3}>
                <Form.Group className="mb-3" >
                    <Form.Label>Потери на 1000 шт</Form.Label>
                    <Form.Control type="text" placeholder="Потери" name='lost[]' value={mat.lost} onChange={handleMaterialChange}/>
                </Form.Group>
            </Col>
        </Row>
    )
}

export default FormMaterial