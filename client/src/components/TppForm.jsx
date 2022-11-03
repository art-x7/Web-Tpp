import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { addProduct } from '../store/reducers/productSlice'
import { selectProcessByFilter } from "../store/selectors/selector";
import ProcessFilter from "./filters/ProcessFilter";


const TppForm = () => {
  const dispatch = useDispatch()
  const menu = useSelector(selectProcessByFilter)
  
  const [tpp_name, setTpp_name] = useState('')
  const [owner, setOwner] = useState('')
  const [process, setProcess] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(tpp_name, owner, process)
    if (tpp_name && owner && process) {
      dispatch(addProduct(tpp_name, owner, process))
    }
    setTpp_name('')
    setOwner('')
  }

  const handleChange = (e) => {
    const findedProcess = menu.find(item => item.processName == e.target.value)
    setProcess([...process, findedProcess.processName])
  }

  const canSave = Boolean(tpp_name) && Boolean(owner)
    
  return (
    <div style={{marginBottom: 20}}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicProducName">
          <Form.Label>Название продукта</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Название продукта"
            value={tpp_name} 
            onChange={e => setTpp_name(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicOwner">
          <Form.Label>Владелец</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Владелец" 
            value={owner} 
            onChange={e => setOwner(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Загрузить ТЗ</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>

        <ProcessFilter />

        {
          menu.length > 0 ?
          <Form.Group className="mb-3 mt-3" controlId="formBasicCheckbox">
          <Form.Label>Процессы</Form.Label>
          { menu.map(item => <Form.Check type="checkbox" key={item.id} label={item.processName} value={item.processName} onChange={handleChange}/>) }
        </Form.Group> :
        <div style={{ textAlign: 'center', margin: 20}}>Процессы отсутсвуют!</div>
        }
        
        <Button 
          variant="primary" 
          type="submit" 
          disabled={!canSave} 
          onClick={handleSubmit}>
          Создать
        </Button>
      </Form>
    </div>
  )
}

export default TppForm