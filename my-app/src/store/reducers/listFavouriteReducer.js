import {
  SET_LIST_FAVOURITE
} from '../constanta'

const initialState = {
  listFavourite: []
}

function listFavouriteReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_LIST_FAVOURITE:
      return {...state, listFavourite: [...state.listFavourite, payload]}
    default:
      return state
  }
}

export default listFavouriteReducer
