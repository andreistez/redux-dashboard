import { FilterPanel } from 'features/Filters/FilterPanel'
import { JobList } from 'features/Positions/JobList'
import { TheHeader } from 'components/TheHeader'

function App(){
    return (
		<>
			<TheHeader/>
			<div className="container">
				<FilterPanel/>
				<JobList/>
			</div>
		</>
	)
}

export default App
