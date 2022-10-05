import React from "react"
import { Link, Routes, Route } from "react-router-dom"

import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

import AddEquipment from "./AddEquipment"
import AddMaterial from "./AddMaterial"
import TppField from "./TppField"

const ProcessItems = ({processName}) => {
    return (
        <Container>
            <Row>
                <h1 style={{textAlign: 'center', fontSize: 20, margin: 20}}>{processName}</h1>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <li style={{listStyleType: 'none'}}><Link to='addmaterials'>Добавить материал</Link></li>
                    <li style={{listStyleType: 'none'}}><Link to='addequipment'>Добавить оборудование/оснастку</Link></li>
                    <li style={{listStyleType: 'none'}}><Link to='tpp'>Проверить ТПП</Link></li>
                </div>
            </Row>
            <Row>
                <Routes>
                    <Route path='addmaterials' element={<AddMaterial processName={processName}/>} />
                    <Route path='addequipment' element={<AddEquipment processName={processName}/>} />
                    <Route path='tpp/*' element={<TppField processName={processName}/>} />
                </Routes>
            </Row>
        </Container>
    )
}

export default ProcessItems