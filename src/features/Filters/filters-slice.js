import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice( {
	name: 'filters',
	initialState: [],
	reducers: {
		addFilter: ( state, action ) => {
			if( ! state.includes( action.payload ) ) state.push( action.payload )
		},

		removeFilter: ( state, action ) => {
			return state.filter( filter => filter !== action.payload )
		},

		clearFilter: () => []
	}
} )

export const { addFilter, removeFilter, clearFilter } = filtersSlice.actions
export const selectFilters = state => state.filters
export default filtersSlice.reducer