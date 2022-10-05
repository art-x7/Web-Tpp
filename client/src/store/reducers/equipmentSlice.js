import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
    {id: 1, process: 'Molding', equipment: 'Fico AMS-306i'},
    {id: 2, process: 'Wire Bond', equipment: 'WBO-1'},
    {id: 3, process: 'Wire Bond', equipment: 'WBO-2'},
    {id: 4, process: 'Attach Print', equipment: 'AP-1'},
]

const equipmentSlice = createSlice({
    name: 'equipment',
    initialState,
    reducers: {
        addEquipment: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(processName, equipment) {
                return {
                    payload: {
                        id: nanoid(),
                        process: processName,
                        equipment: equipment
                    }
                }
            }
        },
        delEquipment(state, action) {
            return state = state.filter(equip => equip.id !== action.payload)
        }
    }
})

export const selectAllEquipment = (state) => state.equipment
export const { addEquipment, delEquipment } = equipmentSlice.actions
export default equipmentSlice.reducer