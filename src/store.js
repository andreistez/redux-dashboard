import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage'

import filterReducer from './features/Filters/filters-slice'
import positionsSlice from './features/Positions/positions-slice'

const persistConfig = {
	key			: 'root',
	storage,
	whitelist	: ['filters']
}

const reducers = combineReducers( {
	filters		: filterReducer,
	positions	: positionsSlice
} )

const _persistedReducer = persistReducer( persistConfig, reducers )

export const store = configureStore( {
	reducer: _persistedReducer,
	devTools: true,
	middleware: getDefaultMiddleware => getDefaultMiddleware( {
		serializableCheck: {
			ignoredActions: [
				FLUSH,
				REHYDRATE,
				PAUSE,
				PERSIST,
				PURGE,
				REGISTER
			]
		}
	} )
} )

export const persistor = persistStore( store )