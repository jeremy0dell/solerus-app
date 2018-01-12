import React, { Component } from 'react'
import axios from 'axios'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

// import { changeLoginInputValue } from '../../action/login'

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
    e.preventDefault()
    const { email, password } = this.state
    const loginInfo = { email, password }
    axios.post('http://localhost:8000/auth/auth', loginInfo)
    .then(console.log)
  }

  render() {
    const { email, password } = this.state

    return (
      <div style={{ backgroundColor: '#D3E9F0', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: 400, backgroundColor: 'white' }}>
          <img src="/static/images/header-logo.png" alt="Solerus logo" />

          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <input style={styles.entry} type="text" onChange={this.onLoginInputChange} name="email" placeholder="Email" value={email} />
            <input style={styles.entry} type="password" onChange={this.onLoginInputChange} name="password" placeholder="Password" value={password} />
            <button
              onClick={this.onFormSubmit}
              style={Object.assign(styles.submitButton, styles.withLogin)}
              // style={{ ...(styles.submitButton), ...(styles.withLogin) }}
            />
          </form>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   // ...state.login,
//   console.log('state be', state, 'state.login be', state.login)
//   return {
//     email: state.login.email,
//     password: state.login.password,
//   }
// }
//
// const mapDispatchToProps = dispatch => ({
//   onLoginInputChange: event =>
//     dispatch(changeLoginInputValue(event.target.name, event.target.value)),
// })

// Login.propTypes = {
//   email: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
//   onLoginInputChange: PropTypes.func.isRequired,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login
