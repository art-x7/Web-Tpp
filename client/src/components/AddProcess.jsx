import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProcess, delProcess, selectAllProcess } from '../store/reducers/processSlice'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const AddProcess = () => {

    const dispatch = useDispatch()
    const menu = useSelector(selectAllProcess)
    
    const [processName, setProcessName] = useState('')
    const [company, setCompany] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (processName && company) {
            dispatch(addProcess(processName, company))
        }
        setProcessName('')
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicProducName">
                            <Form.Label>Название процесса</Form.Label>
                            <Form.Control
                                name='process'
                                type="text"
                                placeholder="Название процесса"
                                value={processName}
                                onChange={e => setProcessName(e.target.value.trim())} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicOwner">
                            <Form.Label>Название организации</Form.Label>
                            <Form.Select name='company' onChange={e => setCompany(e.target.value.trim())}>
                                <option disabled selected>Company...</option>
                                <option value='GSN'>GSN</option>
                                <option value='LED'>LED</option>
                            </Form.Select>
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            onClick={handleSubmit}>
                            Создать
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Process</th>
                                <th>Company</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) =>
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.processName}</td>
                                        <td>{item.company}</td>
                                        <td><Button className='btn-sm' variant="danger" onClick={e => dispatch(delProcess(item.id))}>Delete</Button></td>
                                    </tr>
                                )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default AddProcess