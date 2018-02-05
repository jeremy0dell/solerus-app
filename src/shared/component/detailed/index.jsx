import React from 'react'
import { compose } from 'recompose'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import find from 'lodash/find'

import { getTransfers } from '../../util/getters'

import Detailed from './Detailed'
// have state { itemName, itemSummary, itemPicture, coraId }
// check querystring for item_id
// get item from that and put coraId on state
// get product info from that and put item name, summary and picture on state
// render everything
// lol jk, get everything from querystring and redux state

const DetailContainer = ({ item, email, history, transfers }) =>
  <Detailed
    history={history}
    item={item}
    email={email}
    transfers={transfers}
  />

const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps
  const { pathname } = location

  return ({
    item: find(state.authentication.user.ownership, ['_id', pathname.split('/')[2]]),
    email: state.authentication.user.email,
    user: state.authentication.user,
  })
}

export default compose(
  withRouter,
  connect(mapStateToProps),
  getTransfers,
)(DetailContainer)

// export default withRouter(connect(mapStateToProps)(DetailContainer))
