const button = {
  width: 250,
  height: 50,
  backgroundColor: '#C4C4C4',
  border: '1px solid black',
  textAlign: 'center',
  verticalAlign: 'middle',
  lineHeight: '50px',
}

const container = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  height: '50%',
  minHeight: 200,
  margin: '75px 5% 0px 5%',
}

const createContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '75px 5% 0px 5%',
  minHeight: 500,
}

const boxShadow = {
  width: '400px',
  backgroundColor: 'white',
  boxShadow: '0 2px 8px rgba(0,0,0,.15)',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingTop: '20px',
  paddingBottom: '20px',
}

const createProd = {
  backgroundImage: 'url("/static/images/createProduct.png")',
  height: '77px',
  backgroundSize: 'cover',
  width: '70%',
  justifyContent: 'center',
  margin: '0 auto',
  marginTop: '10px',
  cursor: 'pointer',
}

const createCert = {
  backgroundImage: 'url("/static/images/createCert.png")',
  height: '77px',
  backgroundSize: 'cover',
  width: '70%',
  justifyContent: 'center',
  margin: '0 auto',
  marginTop: '10px',
  cursor: 'pointer',
}

const transfer = {
  backgroundImage: 'url("/static/images/transferCert.png")',
  height: '77px',
  backgroundSize: 'cover',
  width: '70%',
  justifyContent: 'center',
  margin: '0 auto',
  marginTop: '10px',
  cursor: 'pointer',
}

const transferForm = {
  backgroundImage: 'url("/static/images/transferCert.png")',
  height: '77px',
  backgroundSize: 'cover',
  width: '25%',
  justifyContent: 'center',
  margin: '0 auto',
  marginTop: '10px',
  cursor: 'pointer',
}

const analytics = {
  backgroundImage: 'url("/static/images/inventoryAnalytics.png")',
  height: '77px',
  backgroundSize: 'cover',
  width: '70%',
  justifyContent: 'center',
  margin: '0 auto',
  marginTop: '10px',
  cursor: 'pointer',
}


export default {
  button,
  container,
  createContainer,
  boxShadow,
  createProd,
  createCert,
  transfer,
  analytics,
  transferForm,
}
