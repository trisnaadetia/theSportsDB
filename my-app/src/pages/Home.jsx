import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import loadingGif from '../assets/loading.gif'
import { fetchListTeam, fetchListTeamByLeague } from '../store/action'

function Home() {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [isFavourite] = useState(false)
  const listTeam = useSelector(state => state.listTeamReducer.listTeam)

  useEffect(() => {
    dispatch(fetchListTeam())
  },[dispatch])

  function changeInput(event) {
    setInput(event.target.value)
  }

  function buttonClick() {
    dispatch(fetchListTeamByLeague(input))
  }

  if(!listTeam.length) {
    return (
      <div>
        <img src={loadingGif} style={{width: '100vw', height: '100vh'}} alt="loading"/>
      </div>
    )
  }

  return (
    <>
      <Navbar/>
      <div className="container2" style={{marginTop: '7rem'}}>
        <div className="col-10 offset-1">
          <div className="input-group mb-3" style={{width: '97%'}}>
            <select className="form-select"
              style={{width: '29rem', marginLeft: '2rem'}}
              onChange={changeInput}
              value={input}
            >
              <option disabled value="">Choose League</option>
              <option value="English Premier League">English Premier League</option>
              <option value="Spanish La Liga">Spanish La Liga</option>
              <option value="Italian Serie A">Italian Serie A</option>
              <option value="French Ligue 1">French Ligue 1</option>
              <option value="German Bundesliga">German Bundesliga</option>
            </select>
            <button className="btn btn-outline-secondary"
              type="button" id="button-addon2"
              onClick={buttonClick}
            >
              Search League
            </button>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="col-10 offset-1">
          <Card listTeam={listTeam} isFavourite={isFavourite}/>
        </div>
      </div>
    </>
  )
}

export default Home