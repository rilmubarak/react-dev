import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { digimonReducer, favoriteReducer } from './reducers'

const reducers = combineReducers({
    digimonReducer,
    favoriteReducer
});

const store = createStore(reducers, applyMiddleware(thunk, logger))

export default store
