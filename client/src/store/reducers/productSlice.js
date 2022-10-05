import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
    {id: 1, tpp_name: 'GS1', owner: 'Ivanov', process: ['Attach Print', 'Wire Bond', 'Molding'], otherStatus: 
      {tppStatus: true,  specStatus: true, docStatus: true}
    },
    {id: 2, tpp_name: 'Nand', owner: 'Stepnov', process: ['Attach Print', 'Singulation', 'Molding'], otherStatus: 
      {tppStatus: false, specStatus: true, docStatus: false}
    },
    {id: 3, tpp_name: 'Micron', owner: 'Belov', process: ['MSP', 'Wire Bond', 'Molding'], otherStatus: 
      {tppStatus: false, specStatus: true, docStatus: true}
    },
  ]

  process: [{id: 1, process: 'MSP', tppInit: {
    material:'', uph: ''
  }}, {id: 1, process: 'Wire Bond', tppInit: {
    material:'', uph: ''
  }}, {id: 1, process: 'Molding', tppInit: {
    material:'', uph: ''
  }}]




const productSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    changeTppStatus(state, action) {
      const changedTpp = state.find(item => item.id == action.payload)
      const switchState = changedTpp.otherStatus.tppStatus ? false: true
      changedTpp.otherStatus.tppStatus = switchState
    },  
    changeSpecStatus(state, action) {
      const changedTpp = state.find(item => item.id == action.payload)
      const switchState = changedTpp.otherStatus.specStatus ? false: true
      changedTpp.otherStatus.specStatus = switchState
    },  
    changeDocStatus(state, action) {
      const changedTpp = state.find(item => item.id == action.payload)
      const switchState = changedTpp.otherStatus.docStatus ? false: true
      changedTpp.otherStatus.docStatus = switchState
    },  
    addProduct: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(tpp_name, owner, process) {
        return {
          payload: {
            id: nanoid(),
            tpp_name,
            owner,
            process: process,
            mainStatus: false,
            otherStatus: 
              {
                tppStatus: false, 
                specStatus: false, 
                docStatus: false
              }      
          }
        }
      }
    }
  }
})

export const selectAllProducts = (state) => state.product
export const { changeTppStatus, changeSpecStatus, changeDocStatus, addProduct } = productSlice.actions
export default productSlice.reducer