import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
    {id: 1, processName: 'Molding', materialName: 'KE-G1250',  unit: 'kg'},
    {id: 2, processName: 'Molding', materialName: '700-BSE',  unit: 'kg'},
    {id: 3, processName: 'Wire Bond', materialName: 'wire1',  unit: 'm'},
    {id: 4, processName: 'Wire Bond', materialName: 'wire2',  unit: 'm'},
    {id: 5, processName: 'Molding', materialName: '720V-GP',  unit: 'kg'},
]

const materialSlice = createSlice({
    name: 'material',
    initialState,
    reducers: {
        addMaterial: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(processName, materialName, unit) {
                return {
                    payload: {
                        id: nanoid(),
                        processName: processName,
                        materialName: materialName,
                        unit: unit
                    }
                }
            }
        },
        delMaterial(state, action) {
            return state = state.filter(material => material.id !== action.payload)
        }
    }
})
 
export const selectAllMaterials = (state) => state.material
export const { addMaterial, delMaterial } = materialSlice.actions
export default materialSlice.reducer

