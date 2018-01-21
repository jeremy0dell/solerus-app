import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import find from 'lodash/find'

import Detailed from './Detailed'
// have state { itemName, itemSummary, itemPicture, coraId }
// check querystring for item_id
// get item from that and put coraId on state
// get product info from that and put item name, summary and picture on state
// render everything
// lol jk, get everything from querystring and redux state

const DetailContainer = ({ item }) => <Detailed item={item} />

const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps
  const { pathname } = location

  return ({
    item: find(state.authentication.user.ownership, ['_id', pathname.split('/')[2]]),
  })
}


export default withRouter(connect(mapStateToProps)(DetailContainer))
