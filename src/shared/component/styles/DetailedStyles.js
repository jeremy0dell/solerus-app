const body = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: 40,
}

const viewBody = {
  display: 'flex',
  width: '60%', // without this it's way too wide... not sure why
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
}

const transferButton = {
  background: '#30f01f',
  backgroundImage: 'linear-gradient(to bottom, #30f01f, #65f08a)',
  borderRadius: '11px',
  fontFamily: 'Arial',
  color: '#ffffff',
  fontSize: '20px',
  padding: '15px 50px 15px 50px',
  textDecoration: 'none',
}


const itemImg = {
  maxWidth: '50%',
}

export default { body, arrowButton, transferButton, itemImg, viewBody }
