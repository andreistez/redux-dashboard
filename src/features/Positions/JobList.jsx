import { useDispatch } from 'react-redux'

import { JobPosition } from './JobPosition'

import { addFilter } from '../Filters/filters-slice'
import { useFetchPositions } from './useFetchPositions'
import { usePositions } from './usePositions'

const JobList = () => {
	useFetchPositions()

	const dispatch			= useDispatch(),
		  visiblePositions	= usePositions()

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