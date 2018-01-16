import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { addUserToState } from '../../action/authentication'

import styles from '../styles/AuthStyles'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }

    this.onLoginInputChange = this.onLoginInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onLoginInputChange(e, v) {
    console.log(e.target.value, e.target.name, v, this)
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onFormSubmit(e) {
    const { addUserToState, history } = this.props

    e.preventDefault()
    const { email, password } = this.state
    const loginInfo = { email, password }
    axios.post('http://localhost:8000/auth/auth', loginInfo)
    .then((res) => {
      console.log('res.data is', res.data, 'adduser is', addUserToState)
      addUserToState(res.data)
    })
    .then(history.push('/dashboard'))
  }

  render() {
    const { email, password } = this.state

    return (
      <div style={{ backgroundColor: '#D3E9F0', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={styles.boxShadow}>
          <img style={styles.logo} src="/static/images/header-logo.png" alt="Solerus logo" />

          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <input style={styles.entry} type="text" onChange={this.onLoginInputChange} name="email" placeholder="Email" value={email} />
            <input style={styles.entry} type="password" onChange={this.onLoginInputChange} name="password" placeholder="Password" value={password} />
            <button
              onClick={this.onFormSubmit}
              style={Object.assign(styles.submitButton, styles.withLogin)}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(null, { addUserToState })(Login))
