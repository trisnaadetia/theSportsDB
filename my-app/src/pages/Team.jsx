import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchListTeamById } from '../store/action'
import Navbar from '../components/Navbar'
import loadingGif from '../assets/loading.gif'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import youtube from '../assets/youtube.png'
import { Link } from 'react-router-dom'

function Team() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const teamDetail = useSelector(state => state.listTeamReducer.listTeam)

  useEffect(() => {
    dispatch(fetchListTeamById(id))
  },[id, dispatch])

  if(!teamDetail.length) {
    return (
      <div>
        <img src={loadingGif} style={{width: '100vw', height: '100vh'}} alt="loading"/>
      </div>
    )
  }

  return (
    <>
      <Navbar/>
      <div className="container2" style={{marginTop: '4rem'}}>
        <div className="row">
          <div className="col-10 offset-1">
            <div className="card shadow-lg p-3">
              <img src={ teamDetail[0].strTeamBanner } 
                className="card-img-top" alt={teamDetail[0].strTeam}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container2" style={{marginTop: '2rem', marginBottom: '5rem'}}>
        <div className="row">
          <div className="col-3 offset-1">
            <div className="card shadow-lg p-3"
              style={{width: '21rem', maxheight: '28rem'}}
            >
              <img src={ teamDetail[0].strStadiumThumb } 
                className="card-img-top" alt={teamDetail[0].strStadium}
                style={{height: '20rem'}}
              />
              <div className="card-body">
                <h5 className="text-center">{teamDetail[0].strStadium}</h5>
                <h6 className="text-center">{teamDetail[0].strStadiumLocation}</h6>
                <p className="text-center">Capaciy: {teamDetail[0].intStadiumCapacity}</p>
              </div>
            </div>
            <div className="card shadow-lg mt-3"
              style={{width: '21rem', maxheight: '30rem'}}
            >
              <div className="container2" style={{marginTop: '1rem'}}>
                <div className="row p-3">
                  <div className="col-sm">
                    <Link to={{pathname: `https://${teamDetail[0].strFacebook}`}} target="_blank"><img src={facebook} alt="" width="50rem"/></Link>
                  </div>
                  <div className="col-sm">
                    <Link to={{pathname: `https://${teamDetail[0].strTwitter}`}} target="_blank"><img src={twitter} alt="" width="50rem"/></Link>
                  </div>
                  <div className="col-sm">
                    <Link to={{pathname: `https://${teamDetail[0].strInstagram}`}} target="_blank"><img src={instagram} alt="" width="50rem"/></Link>
                  </div>
                  <div className="col-sm">
                    <Link to={{pathname: `https://${teamDetail[0].strYoutube}`}} target="_blank"><img src={youtube} alt="" width="50rem"/></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7">
            <img src={ teamDetail[0].strTeamBadge } 
              className="d-inline-block" alt={teamDetail[0].strTeam}
              style={{width: '3rem', height: '3rem'}}
            />
            <h3 className="d-inline ml-3">{teamDetail[0].strAlternate}</h3>
            <hr/>
            <div className="container2">
              <div className="row">
                <div className="col-sm">
                  <div className="card shadow-lg p-3"
                    style={{width: '28rem'}}
                  >
                    <div className="card-body">
                      <h5 className="">Description</h5>
                      <hr/>
                      <div style={{ overflow: 'scroll', maxHeight: '30rem' }}>
                        <p className="card-text text-justify">
                          {teamDetail[0].strDescriptionEN}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="card shadow-lg p-3" style={{ maxHeight: '38rem' }}>
                    <img src={ teamDetail[0].strTeamJersey } 
                      className="card-img-top mx-auto d-block" alt={teamDetail[0].strTeam}
                      style={{height: '15rem', width: '15rem'}}
                    />
                    <div className="card-body">
                      <h5 className="card-text text-center mb-4"><strong>"{teamDetail[0].strKeywords}"</strong></h5>
                      <h6 className="card-text mr-3"><strong>Country:</strong></h6>
                      <p className="card-text ">{teamDetail[0].strCountry}</p>
                      <h6 className="card-text mr-3"><strong>League:</strong></h6>
                      <p className="card-text ">{teamDetail[0].strLeague}</p>
                      <h6 className="card-text mr-3"><strong>Founded:</strong></h6>
                      <p className="card-text">{teamDetail[0].intFormedYear}</p>
                      <h6 className="card-text mr-3"><strong>Website:</strong></h6>
                      <p className="card-text">{teamDetail[0].strWebsite}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team