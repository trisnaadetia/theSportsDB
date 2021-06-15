import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import listTeamReducer from './reducers/listTeamReducer'
import listFavouriteReducer from './reducers/listFavouriteReducer'

const reducer = combineReducers({
  listTeamReducer,
  listFavouriteReducer
})

function logger(store) {
  return function(next) {
    return function(action) {
      next(action)
    }
  }
}

const store = createStore(reducer, applyMiddleware(logger, thunk))

export default store
