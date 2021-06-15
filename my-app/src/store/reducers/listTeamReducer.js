import {
  SET_LIST_TEAM
} from '../constanta'

const initialState = {
  listTeam: []
}

function listTeamReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_LIST_TEAM:
      return { ...state, listTeam: payload }
    default:
      return state
  }
}

export default listTeamReducer