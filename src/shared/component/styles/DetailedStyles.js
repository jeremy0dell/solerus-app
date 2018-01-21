const body = {
  display: 'flex',
  justifyContent: 'left',
  marginTop: 40,
}

const viewBody = {
  display: 'flex',
  width: '50%', // without this it's way too wide... not sure why
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
  marginLeft: '45%',
  textAlign: 'center',
  lineHeight: '0px',
  cursor: 'pointer',
  outline: '0',
}

const transferButton = {
  background: '#56ccf2',
  backgroundImage: 'linear-gradient(to right, #56ccf2, #2f80ed)',
  borderRadius: '11px',
  fontFamily: 'Arial',
  color: '#ffffff',
  fontSize: '20px',
  padding: '15px 50px 15px 50px',
  textDecoration: 'none',
  width: '40%',
  marginRight: '5%',
  cursor: 'pointer',
  outline: '0',
}

const lostButton = {
  background: '#e52d27',
  backgroundImage: 'linear-gradient(to right, #e52d27, #b31217)',
  borderRadius: '11px',
  fontFamily: 'Arial',
  color: '#ffffff',
  fontSize: '20px',
  padding: '15px 50px 15px 50px',
  textDecoration: 'none',
  width: '40%',
  cursor: 'pointer',
  outline: '0',
}


const itemImg = {
  width: '70%',
  display: 'block',
  margin: 'auto',
  paddingTop: '10%',
  paddingBottom: '10%',
  borderRadius: '5px',
}

const itemName = {
  textAlign: 'center',
  fontSize: '20px',
}

const card = {
  height: 'auto',
  width: "70%",
  display: 'block',
  // margin: '0',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '5%',
  background: 'white',
  borderRadius: '5px',
  boxShadow: '0 2px 8px rgba(0,0,0,.15)',
}

export default { body, arrowButton, transferButton, lostButton, itemImg, viewBody, itemName, card }
