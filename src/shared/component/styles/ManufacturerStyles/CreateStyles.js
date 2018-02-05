const container = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '75px 15% 0px 15%',
  minHeight: 500,
}

const dropzone = {
  width: 250,
  border: '1px dotted black',
  textAlign: 'center',
  verticalAlign: 'middle',
  marginTop: '10px',
  width: '70%',
}

const boxShadow = {
  width: '400px',
  backgroundColor: 'white',
  boxShadow: '0 2px 8px rgba(0,0,0,.15)',
  borderRadius: '5px',
  display: 'flex', 
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '20px',
  paddingBottom: '20px',
}

const boxShadowTransfer = {
  width: '80%',
  backgroundColor: 'white',
  boxShadow: '0 2px 8px rgba(0,0,0,.15)',
  borderRadius: '5px',
  display: 'flex', 
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '20px',
  paddingBottom: '20px',
  marginBottom: '50px',
}

const arrowButton = {
  height: 55,
  width: 55,
  marginRight: 30,
  borderRadius: '40px',
  fontFamily: 'Arial',
  color: '#000000',
  fontSize: '20px',
  background: '#ffffff',
  padding: '15px 15px 15px 15px',
  textDecoration: 'none',
  marginLeft: '5%',
  textAlign: 'center',
  lineHeight: '0px',
  cursor: 'pointer',
  outline: '0',
}

export default { container, dropzone, boxShadow, arrowButton, boxShadowTransfer }
