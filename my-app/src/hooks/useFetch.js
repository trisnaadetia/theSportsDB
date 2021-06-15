import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setListLeague } from '../store/action'

export default function useFetch(url) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  const listTeam = useSelector(state => state.listTeamReducer.listTeam)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(response => response.json())
      .then(result => {
        dispatch(setListLeague(result.teams))
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url, dispatch])

  return [listTeam, loading, error]
}
