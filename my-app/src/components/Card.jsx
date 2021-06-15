import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setListFavourite } from '../store/action'
import addFavourite from '../assets/add.png'
import detailTeam from '../assets/detail.png'
import Swal from 'sweetalert2'

function Card({ listTeam, isFavourite }) {
  const history = useHistory()
  const dispatch = useDispatch()
  const listFavourite = useSelector(state => state.listFavouriteReducer.listFavourite)

  function toPage(id) {
    history.push('/team/' + id)
  }

  function buttonClick(payload) {
    if(!listFavourite.length) {
      dispatch(setListFavourite(payload))
      Swal.fire(
        'Good job!',
        'Success add team to favourite!',
        'success'
      )      
    } else {
      const isExist = listFavourite.filter(list => list.idTeam === payload.idTeam)

      if(!isExist.length) {
        dispatch(setListFavourite(payload))
        Swal.fire(
          'Good job!',
          'Success add team to favourite!',
          'success'
        )
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'The team already exist in favourite!',
        })
      }
    }
  }

  return(
    <>
      <div className="container mt-4">
        <div className="row">
          {listTeam.map(data => {
            return (
            <div className="card shadow-lg m-3 p-2"
              style={{width: '21rem'}}
              key={data.idTeam}
            >
              <img src={ data.strTeamBadge } className="card-img-top mt-3" alt={data.strTeam}/>
              <div className="card-body">
                <h5 className="card-title text-center mb-4">{data.strAlternate}</h5>
                <h6 className="card-text mr-3"><strong>League:</strong></h6>
                <p className="card-text ">{data.strLeague}</p>
                <h6 className="card-text mr-3"><strong>Founded:</strong></h6>
                <p className="card-text">{data.intFormedYear}</p>
                <h6 className="card-text mr-3"><strong>Stadion:</strong></h6>
                <p className="card-text">{data.strStadium}</p>
                <div className="container2">
                  <div className="row">
                    <div className="col-sm">
                      <img src={detailTeam} alt="addFavourite"
                        style={{width: '2rem', cursor: 'pointer'}}
                        className="mt-3"
                        onClick={() => toPage(data.idTeam)}
                      />
                    </div>
                    <div className="col-sm">
                      {!isFavourite &&
                        <img src={addFavourite} alt="addFavourite"
                          style={{width: '3rem', cursor: 'pointer'}}
                          className="ml-auto d-block"
                          onClick={() => buttonClick(data)}
                        />
                      }
                    </div>
                  </div>
                </div>
              </div>
          </div>)         
          })}
        </div>
      </div>
    </>
  )
}

export default Card;
