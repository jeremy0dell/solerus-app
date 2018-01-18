import React, { Component } from 'react'
import { withRouter } from 'react-router'

// have state { itemName, itemSummary, itemPicture, coraId }
// check querystring for item_id
// get item from that and put coraId on state
// get product info from that and put item name, summary and picture on state
// render everything

class DetailContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      summary: '',
      picture: '',
      coraId: '',
    }
  }

  render() {
    return (
      <div>
        Details go Here
      </div>
    )
  }
}

export default withRouter(DetailContainer)
