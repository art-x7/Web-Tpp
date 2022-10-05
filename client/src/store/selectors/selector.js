import { createSelector } from '@reduxjs/toolkit';

export const selectAllProduct = state => state.product
export const selectAllProcess= state => state.process
export const selectActiveFilters = state => state.filter

export const selectProductByFilter = createSelector(
  [selectAllProduct, selectActiveFilters], (allProduct, activeFilter) => {
    if (activeFilter === 'all') return allProduct
    if (activeFilter === 'completed') {
      return allProduct.filter(prod => prod.otherStatus.tppStatus && prod.otherStatus.specStatus && prod.otherStatus.docStatus )
    }
    return allProduct.filter(prod => !prod.otherStatus.tppStatus | !prod.otherStatus.specStatus | !prod.otherStatus.docStatus)
  }
)

export const selectProcessByFilter = createSelector(
  [selectAllProcess, selectActiveFilters], (allProcess, activeFilter) => {
    if (activeFilter === 'all') return allProcess
    if (activeFilter === 'GSN') {
      return allProcess.filter(process => process.company == 'GSN')
    }
    return allProcess.filter(process => process.company == 'LED')
  }
)