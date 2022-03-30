import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
import Search from "../Search/Search.jsx"
import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

import './Landing.css'

const Landing = ({ user }) => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => {setProfiles(profiles)})
  }, [])


  return (
    <div className='whole-landing-page'>
    {user ?
      <div className='landing-color-page'>
        <h1 className='user_name_landing'>Hello, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}! 👋</h1>
        <h5>Welcome back!</h5>
        <button className='btn btn-success'>
          <Link to={`/profile/${user?.profile}`} state={user} className="landing-button-text">
          View My Profile
          </Link>
        </button>
      </div>
      : 
      <div className='landing-color-page'>
        <h1 className='user_name_landing'>Hello, Stranger 👋</h1>
        <h5>Welcome to the party!</h5>
      </div>
    }

      <h1 className='h1-for-landing-search'>search for your next event here:</h1>
      <Search />
    </div>
  )
}

export default Landing
