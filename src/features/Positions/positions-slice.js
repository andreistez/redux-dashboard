import { createSlice } from '@reduxjs/toolkit'

const positionsSlice = createSlice( {
	name: 'positions',
	initialState: [],
	reducers: {
		addPositions: ( _, action ) => action.payload
	}
} )

export const selectVisiblePositions = ( state, filters = [] ) => {
	if( ! filters.length ) return state.positions

	return state.positions.filter( pos => {
		const posFilters = [].concat( pos.role, pos.level, ...pos.languages, ...pos.tools )

		return filters.every( filter => posFilters.includes( filter ) )
	} )
}

export const { addPositions } = positionsSlice.actions
export default positionsSlice.reducer