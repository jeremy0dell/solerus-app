import React from 'react'
import { compose } from 'recompose'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
// import find from 'lodash/find'

// import { getTransfers } from '../../util/getters'
import { DetailedHOC } from '../../util/detailedView'

import Detailed from './Detailed'
// have state { itemName, itemSummary, itemPicture, coraId }
// check querystring for item_id
// get item from that and put coraId on state
// get product info from that and put item name, summary and picture on state
// render everything
// lol jk, get everything from querystring and redux state

const DetailContainer = ({ details, user }) =>
  // <div>
  //   this is detailed!!!
  //   {console.log('DEETS', details)}
  // </div>
  <Detailed
    history={details.history}
    item={details}
    email={user.email}
    // transfers={transfers}
  />

const mapStateToProps = state => ({
  user: state.authentication.user,
})

export default compose(
  withRouter,
  connect(mapStateToProps),
  DetailedHOC,
  // getTransfers,
)(DetailContainer)

// export default withRouter(connect(mapStateToProps)(DetailContainer))
