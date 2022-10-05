import { createSlice, nanoid } from "@reduxjs/toolkit"

export const initialState = [
    {id: 1, processName: 'Attach Print', company: 'GSN'},
    {id: 2, processName: 'Wire Bond', company: 'GSN'},
    {id: 3, processName: 'Molding', company: 'GSN'},
    {id: 4, processName: 'Ball Palcing', company: 'GSN'},
    {id: 5, processName: 'Singulation', company: 'GSN'},
    {id: 6, processName: 'Test', company: 'GSN'},
    {id: 7, processName: 'MSP', company: 'GSN'},
]

const processSlice = createSlice({
    name: 'process',
    initialState,
    reducers: {
        addProcess: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(processName, company) {
            return {
                payload: {
                id: nanoid(),
                processName,
                company
            }}}
        },
        delProcess(state, action) {
            return state  = state.filter(process => process.id !== action.payload)
        }
    }
})

export const selectAllProcess = (state) => state.process
export const { addProcess, delProcess } = processSlice.actions
export default processSlice.reducer