import {
  SET_LIST_TEAM,
  SET_LIST_FAVOURITE
} from './constanta'

export function setListLeague(payload) {
  return { type: SET_LIST_TEAM, payload }
}

export function setListFavourite(payload) {
  return { type: SET_LIST_FAVOURITE, payload }
}

export function fetchListTeam() {
  return function(dispatch) {
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
      .then(response => response.json())
      .then(data => {
        dispatch(setListLeague(data.teams))
      })
  }
}

export function fetchListTeamByLeague(input) {
  return function(dispatch) {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${input}`)
      .then(response => response.json())
      .then(data => {
        if(data) {
          dispatch(setListLeague(data.teams))
        }
      })
  }
}

export function fetchListTeamById(id) {
  return function(dispatch) {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
      .then(response => response.json())
      .then(data => {
        dispatch(setListLeague(data.teams))
      })
  }
}
