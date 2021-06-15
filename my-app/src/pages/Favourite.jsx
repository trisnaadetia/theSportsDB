import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

function Favourite() {
  const listFavourite = useSelector(state => state.listFavouriteReducer.listFavourite)
  const [isFavourite] = useState(true)

  return (
    <>
      <Navbar/>
      <div className="container2" style={{marginTop: '6rem'}}>
        <h3 className="text-center">My Favourite Club</h3>
        <div className="col-10 offset-1">
          <Card listTeam={listFavourite} isFavourite={isFavourite}/>
        </div>
      </div>
    </>
  )
}

export default Favourite