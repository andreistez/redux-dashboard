import { useDispatch, useSelector } from 'react-redux'
import { JobPosition } from './JobPosition'
import { selectVisiblePositions } from '../store/positions/position-selectors'
import { addFilter } from '../store/filters/filter-actions'
import { selectFilters } from '../store/filters/filter-selectors'

const JobList = () => {
	const dispatch			= useDispatch(),
		  filters			= useSelector( selectFilters ),
		  visiblePositions	= useSelector( state => selectVisiblePositions( state, filters ) )

	const handleAddFilter = filter => dispatch( addFilter( filter ) )

	return (
		<div className="job-list">
			{
				visiblePositions.length
					? visiblePositions.map( item => (
						<JobPosition
							addFilter={ handleAddFilter }
							key={ item.id }
							{ ...item }
						/>
					) )
					: 'No items'
			}
		</div>
	)
}

export { JobList }