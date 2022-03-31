import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

import './Login.css'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <div className='whole-login-page'>
      <main className={styles.container}>
        <h1>Log In</h1>
        <p>{message}</p>
        <LoginForm
          handleSignupOrLogin={props.handleSignupOrLogin}
          updateMessage={updateMessage}
        />
      </main>
    </div>
  )
}

export default LoginPage
