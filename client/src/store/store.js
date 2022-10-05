import { configureStore } from "@reduxjs/toolkit";
import productReducer from './reducers/productSlice'
import filterReducer from './reducers/filterSlice'
import processReducer from './reducers/processSlice'
import materialReducer from './reducers/materialSlice'
import toolReducer from './reducers/toolSlice'
import equipmnetReducer from './reducers/equipmentSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    filter: filterReducer,
    process: processReducer,
    material: materialReducer,
    equipment: equipmnetReducer,
    tool: toolReducer,
  }
})