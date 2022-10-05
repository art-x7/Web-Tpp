import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
    {id: 1, process: 'Molding', tool: 'TFBGA97'},
    {id: 2, process: 'Molding', tool: 'SiP Amber'},
    {id: 3, process: 'Wire Bond', tool: 'toolWB-1'},
    {id: 4, process: 'Wire Bond', tool: 'toolWB-2'},
    {id: 5, process: 'Attach Print', tool: 'toolAP-1'},
]

const toolSlice = createSlice({
    name: 'tool',
    initialState,
    reducers: {
        addTool: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(processName, tool) {
                return {
                    payload: {
                        id: nanoid(),
                        process: processName,
                        tool: tool
                    }
                }
            }
        },
        delTool(state, action) {
            return state = state.filter(equip => equip.id !== action.payload)
        }
    }
})

export const selectAllTool = (state) => state.tool
export const { addTool, delTool } = toolSlice.actions
export default toolSlice.reducer