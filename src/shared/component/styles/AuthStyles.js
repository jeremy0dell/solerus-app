// import signUp from '..//static/images/signup-blue.png'

const rectangle = {
  position: 'absolute',
  top: '15%',
  left: '50%',
  width: '30%',
  margin: '0 0 0 -15%',
  background: 'white',
}

const logo = {
  marginTop: '20px',
  marginLeft: '25%',
  width: '200px',
}

const entry = {
  marginTop: '5%',
  marginLeft: '25%',
  width: '50%',
  height: '40px',
  background: '#FFFFFF',
  border: '1px solid #000000',
  boxSizing: 'border-box',
  fontSize: '15px',
  fontFamily: 'Inter UI',
}

const submitButton = {
  marginTop: '5%',
  marginLeft: '25%',
  marginBottom: '20px',
  width: '50%',
  height: '80px',
  // backgroundImage: url("/SolerusFiles/signupBlue.png"); /* Change url to actual path */
  backgroundSize: 'cover',
  border: 'none',
  fontSize: '0px',
  lineHeight: '0',
}

const withSignUp = {
  backgroundImage: 'url("/static/images/signup-blue.png")',
}

const withLogin = {
  backgroundImage: 'url("/static/images/login-blue.png")',
}

export default { rectangle, logo, entry, submitButton, withSignUp, withLogin }
