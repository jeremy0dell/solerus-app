import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import Dashboard from './Dashboard'
import { PRODUCT_INDEX } from '../../routes'

class DashboardContainer extends Component { // eslint-disable-line
  constructor(props) {
    super(props)

    this.state = { products: [] }
  }

  componentDidMount() {
    const { user } = this.props

    user.ownership.forEach((item) => {
      axios.get(`/api${PRODUCT_INDEX}/${item.product}`)
      .then((product) => {
        const joined = this.state.products.concat(product.data)
        this.setState({ products: joined })
      })
    })
  }

  render() {
    const { user } = this.props
    const { products } = this.state
    console.log('products are', products)
    return (
      <Dashboard user={user} products={products} />
    )
  }
}

export default connect(state => ({ user: state.authentication.user }))(DashboardContainer)
