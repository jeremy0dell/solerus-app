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
    }

    this.onSignUpInputChange = this.onSignUpInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onSignUpInputChange(e, v) {
    console.log(e.target.value, e.target.name, v, this)
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onFormSubmit(e) {
    e.preventDefault()
    const { firstname, lastname, email, password } = this.state
    const newUser = { full_name: `${firstname} ${lastname}`, email, password }
    axios.post('http://localhost:8000/api/users', newUser)
    .then(console.log)
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
            <input style={styles.entry} type="password" name="passwordVerify" onChange={this.onSignUpInputChange} placeholder="Password Verify" value={passwordVerify} />
            <button
              style={Object.assign(styles.submitButton, styles.withSignUp)}
              onClick={this.onFormSubmit}
              // style={{ ...(styles.submitButton), ...(styles.withLogin) }}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default SignUp
