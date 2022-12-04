import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'reduxjs-toolkit-persist/es/integration/react'

import { persistor, store } from './store'

import App from './App'

import './index.css'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={ store }>
			<PersistGate loading={ null } persistor={ persistor }>
				<App/>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById( 'root' )
)
