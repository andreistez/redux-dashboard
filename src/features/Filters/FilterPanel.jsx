import { Badge } from 'UI/Badge'
import { Card } from 'UI/Card'
import { Stack } from 'UI/Stack'
import { useDispatch, useSelector } from 'react-redux'
import { clearFilter, removeFilter, selectFilters } from './filters-slice'

const FilterPanel = () => {
	const dispatch = useDispatch()
	const filters = useSelector( selectFilters )

	if( ! filters.length ) return null

	return (
		<Card className="filter-panel">
			<div className="filter-panel-wrapper">
				<Stack>
					{ filters.map( filter => (
						<Badge
							key={ filter }
							variant="clearable"
							onClear={ () => dispatch( removeFilter( filter ) ) }
						>{ filter }</Badge>
					) ) }
				</Stack>

				<button className="link" onClick={ () => dispatch( clearFilter() ) }>Clear</button>
			</div>
		</Card>
	)
}

export { FilterPanel }