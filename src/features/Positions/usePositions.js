import { selectVisiblePositions } from './positions-slice'
import { selectFilters } from '../Filters/filters-slice'
import { useSelector } from 'react-redux'

export const usePositions = () => {
	const filters = useSelector( selectFilters )

	return useSelector( state => selectVisiblePositions( state, filters ) )
}