import React from "react";
import { useDispatch } from "react-redux"
import Button from 'react-bootstrap/Button'

import { changeFilter } from '../../store/reducers/filterSlice'


const TppFilter = () => {
  const dispatch = useDispatch()
  
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around'}}>
      <Button variant="secondary" onClick={() => dispatch(changeFilter('all'))}>Всего</Button>
      <Button variant="secondary" onClick={() => dispatch(changeFilter('active'))}>В работе</Button>
      <Button variant="secondary" onClick={() => dispatch(changeFilter('completed'))}>Завершенные</Button>
    </div>
  )
}

export default TppFilter