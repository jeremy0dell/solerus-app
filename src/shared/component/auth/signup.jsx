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
      passLength: true,
      passMatch: true,
      emailValid: true,
      invalid: false,
      checkEmail: false,
    }

    this.onSignUpInputChange = this.onSignUpInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onSignUpInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onFormSubmit(e) {
    e.preventDefault()
    const { firstname, lastname, email, password, passwordVerify } = this.state
    if (password.length > 4) {
      this.setState({ passLength: true })
      if (password === passwordVerify) {
        this.setState({ passMatch: true })
        if (this.validateEmail(email)) {
          this.setState({ emailValid: true })
          const newUser = { full_name: `${firstname} ${lastname}`, email, password }
          axios.post('http://localhost:8000/api/users', newUser)
          .then(console.log)
          .then(() => {
            // console.log("there was an error")
            this.setState({ checkEmail: true })
          })
          .catch(() => {
            // console.log("there was an error")
            this.setState({ invalid: true })
          })
        } else {
          this.setState({ emailValid: false })
        }
      } else {
        this.setState({ passMatch: false })
      }
    } else {
      this.setState({ passLength: false })
    }
  }

  validateEmail(e) { // eslint-disable-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
    return re.test(e)
  }

  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      passwordVerify,
      passLength,
      passMatch,
      emailValid,
      invalid,
      checkEmail,
    } = this.state

    let banner = null

    if (!passLength) {
      banner = <div style={styles.bannerError}>Password must be at least 5 characters</div>
    }

    if (!passMatch) {
      banner = <div style={styles.bannerError}>Passwords must match</div>
    }

    if (!emailValid) {
      banner = <div style={styles.bannerError}>Please use a valid email</div>
    }

    if (invalid) {
      banner = <div style={styles.bannerError}>An account with this Email already exists</div>
    }

    if (checkEmail) {
      banner =
        (<div
          style={styles.bannerVerified}
        >
          Please check your Email to confirm your account
        </div>)
    }

    return (
      <div style={{ backgroundColor: '#F6F6F6', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        {banner}
        <div style={styles.boxShadow}>
          <img style={styles.logo} src="/static/images/header-logo.png" alt="Solerus logo" />

          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <input style={styles.entry} type="text" name="firstname" onChange={this.onSignUpInputChange} placeholder="First name" value={firstname} />
            <input style={styles.entry} type="text" name="lastname" onChange={this.onSignUpInputChange} placeholder="Last name" value={lastname} />
            <input style={styles.entry} type="text" name="email" onChange={this.onSignUpInputChange} placeholder="Email" value={email} />
            <input style={styles.entry} type="password" name="password" onChange={this.onSignUpInputChange} placeholder="Password" value={password} />
            <div style={{ display: 'flex' }}>
              <input style={styles.entry} type="password" name="passwordVerify" onChange={this.onSignUpInputChange} placeholder="Password Verify" value={passwordVerify} />
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
