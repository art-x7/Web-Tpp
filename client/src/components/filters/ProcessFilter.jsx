import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../store/reducers/filterSlice";
import Button from 'react-bootstrap/Button'

const ProcessFilter = () => {
    const dispatch = useDispatch()
    
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button className='btn-sm' variant="secondary" onClick={() => dispatch(changeFilter('all'))}>Все</Button>
            <Button className='btn-sm' variant="secondary" onClick={() => dispatch(changeFilter('GSN'))}>GSN</Button>
            <Button className='btn-sm' variant="secondary" onClick={() => dispatch(changeFilter('LED'))}>LED</Button>
        </div>
    )
}

export default ProcessFilter