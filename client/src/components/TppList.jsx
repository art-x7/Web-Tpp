import React from "react";
import { useDispatch, useSelector } from "react-redux"

import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form';

import { changeTppStatus, changeSpecStatus, changeDocStatus } from '../store/reducers/productSlice'
import { selectProductByFilter } from '../store/selectors/selector'


const TppList = () => {
  const status = useSelector(selectProductByFilter)
  const dispatch = useDispatch()


  return (
    <div>
      <div style={{ marginTop: 20 }}>
        <Accordion flush>
          {
            status.length > 0 ?
              <div>
                {status.map(product =>
                  <Accordion.Item eventKey={product.id} key={product.id}>
                    <Accordion.Header>{product.tpp_name}</Accordion.Header>
                    <Accordion.Body>
                      <p>Менеджер: {product.owner}</p>
                      <div style={{ display: 'flex' }}>
                        <div style={{ marginRight: 10 }}>Отчет ТПП:</div>
                        <Form.Check
                          style={{ marginRight: 10 }}
                          type="switch"
                          defaultChecked={product.otherStatus.tppStatus}
                          onChange={() => dispatch(changeTppStatus(product.id))} />
                        <p>{product.otherStatus.tppStatus ? 'ОК' : 'В работе'}</p>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <div style={{ marginRight: 10 }}>Спецификация:</div>
                        <Form.Check
                          style={{ marginRight: 10 }}
                          type="switch"
                          defaultChecked={product.otherStatus.specStatus}
                          onChange={() => dispatch(changeSpecStatus(product.id))} />
                        <p>{product.otherStatus.specStatus ? 'ОК' : 'В работе'}</p>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <div style={{ marginRight: 10 }}>Конструкторская документация:</div>
                        <Form.Check
                          style={{ marginRight: 10 }}
                          type="switch"
                          defaultChecked={product.otherStatus.docStatus}
                          onChange={() => dispatch(changeDocStatus(product.id))} />
                        <p>{product.otherStatus.docStatus ? 'ОК' : 'В работе'}</p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>)}
              </div>
              :
              <div style={{ textAlign: 'center' }}>Список пуст</div>
          }
        </Accordion>
      </div>
    </div>
  )
}

export default TppList