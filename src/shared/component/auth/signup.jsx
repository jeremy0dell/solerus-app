import React, { Component } from 'react'
import axios from 'axios'

import styles from '../styles/AuthStyles'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordVerify: '',
      passwordsMatch: '',
    }

    this.onSignUpInputChange = this.onSignUpInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onSignUpInputChange(e) {
    console.log(this.state.password, this.state.passwordVerify)
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onFormSubmit(e) {
    e.preventDefault()
    const { firstname, lastname, email, password, passwordVerify } = this.state
    if (password === passwordVerify && password.length > 4) {
      const newUser = { full_name: `${firstname} ${lastname}`, email, password }
      axios.post('http://localhost:8000/api/users', newUser)
      .then(console.log)
    }
  }

  render() {
    const { firstname, lastname, email, password, passwordVerify } = this.state

    return (
      <div style={{ backgroundColor: '#D3E9F0', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: 400, backgroundColor: 'white' }}>
          <img src="/static/images/header-logo.png" alt="Solerus logo" />

          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <input style={styles.entry} type="text" name="firstname" onChange={this.onSignUpInputChange} placeholder="First name" value={firstname} />
            <input style={styles.entry} type="text" name="lastname" onChange={this.onSignUpInputChange} placeholder="Last name" value={lastname} />
            <input style={styles.entry} type="text" name="email" onChange={this.onSignUpInputChange} placeholder="Email" value={email} />
            <input style={styles.entry} type="password" name="password" onChange={this.onSignUpInputChange} placeholder="Password" value={password} />
            {password.length > 0 && password !== passwordVerify && <p style={{ color: 'red', marginBottom: 0, paddingBottom: 0 }}>Passwords should be matching</p>}
            <div style={{ display: 'flex' }}>
              <input style={styles.entry} type="password" name="passwordVerify" onChange={this.onSignUpInputChange} placeholder="Password Verify" value={passwordVerify} />
              {password.length > 0 && password === passwordVerify && <p style={{ fontSize: '28px', marginLeft: '5%', marginTop: '5%', color: 'green' }}>✓</p>}
            </div>
            <button
              style={Object.assign(styles.submitButton, styles.withSignUp)}
              onClick={this.onFormSubmit}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default SignUp
