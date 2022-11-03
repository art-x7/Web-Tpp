import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';



import { selectAllProducts } from '../store/reducers/productSlice';
import { selectAllEquipment } from '../store/reducers/equipmentSlice';
import { selectAllTool } from '../store/reducers/toolSlice';
import FormMaterial from './FormMaterial';


const TppField = ({processName}) => {

    const initialState = {
        product: '',
        equipment: '',
        tool: '',
        uph: '',
        timeTpp: '',
        retrofit: false,
        comment: ''
    }



    // const dispatch = useDispatch()
    const [ data, setData ] = useState(initialState)
    const [ mat, setMat ] = useState([
        {}
    ])
    const [ check, setCheck ] = useState(false)

    const equipments = useSelector(selectAllEquipment).filter(equip => equip.process === processName)
    const tools = useSelector(selectAllTool).filter(tool => tool.process === processName)
    const products = useSelector(selectAllProducts).filter(item => 
        {
            for(let i = 0; i < item.process.length; i++) {
                if (item.process[i] === processName) {
                    return item
                }
            }
        })

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleMaterialChange = (e) => {
        setMat({...mat, [e.target.name]: e.target.value})
    }


    const handleOnChange = (e) => {
        setCheck(!check)
        setData({...data, [e.target.name]: e.target.checked})
        }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(mat)
        setData(initialState)
        setCheck(false)
    }

    const canSave = 
        Boolean(data.product) && 
        Boolean(data.equipment) && 
        Boolean(data.tool) &&
        Boolean(data.uph) && 
        Boolean(data.timeTpp)

    return (
        <Container className="mt-3">
            {
                products.length > 0 ? 
                <Form>
                <Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Продукты</Form.Label>
                        <Form.Select aria-label="Default select example" name='product' value={data.product} onChange={handleChange}>
                            <option disabled selected value=''>Продукты...</option>
                            {products.map(item => <option key={item.id} value={item.tpp_name}>{item.tpp_name}</option>)}
                        </Form.Select>
                    </Form.Group>
                </Row>

               
                    <FormMaterial processName={processName} mat={mat} handleMaterialChange={handleMaterialChange}/>
                    <FormMaterial processName={processName} mat={mat} handleMaterialChange={handleMaterialChange}/>
                    <FormMaterial processName={processName} mat={mat} handleMaterialChange={handleMaterialChange}/>
     
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Оборудование</Form.Label>
                            <Form.Select aria-label="Default select example" name='equipment' value={data.equipment} onChange={handleChange}>
                                <option disabled selected value=''>Оборудование...</option>
                                {equipments.map(item => <option key={item.id} value={item.equipment}>{item.equipment}</option>)}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label>Оснастка</Form.Label>
                            <Form.Select aria-label="Default select example" name='tool' value={data.tool} onChange={handleChange}>
                                <option disabled selected value=''>Оснастка...</option>
                                {tools.map(item => <option key={item.id} value={item.tool}>{item.tool}</option>)}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label>UPH</Form.Label>
                            <Form.Control type="text" placeholder="UPH" name='uph' value={data.uph} onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label>Время на ТПП</Form.Label>
                            <Form.Control type="text" placeholder="Время на ТПП" name='timeTpp' value={data.timeTpp} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Требуется дооснащение" checked={check} value={data.retrofit} name='retrofit' onChange={handleOnChange}/>
                </Form.Group>

                <Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Комментарии</Form.Label>
                        <Form.Control as="textarea" rows={3} name='comment' value={data.comment} onChange={handleChange}/>
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Отправить
                </Button>
            </Form> :
            <div style={{ textAlign:'center', margin: 20 }}>Для данного процесса нет доступных продуктов</div>
            }
            
        </Container>
    )
}

export default TppField