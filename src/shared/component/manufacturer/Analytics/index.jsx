import React from 'react'
import { compose } from 'recompose'
import { Link } from 'react-router-dom'

import { getAnalytics } from '../../../util/analytics'

import TopBar from './TopBar'
import Dropdowns from './Dropdowns'
import Product from './Product' // eslint-disable-line

import styles from '../../styles/AnalyticsStyles'

const Button = () =>
  <Link to="/manufacturer">
    <button style={styles.arrowButton}>←</button>
  </Link>

const AnalyticsContainer = ({ user, analytics, setAnalyticsProduct, setAnalyticsItem }) =>
  <div>
    <Button />
    {analytics.certificates && <TopBar user={user} certificates={analytics.certificates} />}
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={styles.boxShadowProd}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ paddingTop: '20px' }}>
          Product Line:
          </div>
          {analytics.products.length && <Dropdowns
            analytics={analytics}
            products={analytics.products}
            product={analytics.product}
            setAnalyticsProduct={setAnalyticsProduct}
            setAnalyticsItem={setAnalyticsItem}
            user={user}
          />}
        </div>
        <div style={{ alignItems: 'left', marginLeft: '10%', width: '100%' }}>
          {analytics.product && analytics.assocUsers.length && <Product
            key={analytics.product}
            product={analytics.product}
            item={analytics.item}
            assocUsers={analytics.assocUsers}
            assocItems={analytics.assocItems}
            setAnalyticsItem={setAnalyticsItem}
            user={user}
          />}
        </div>
      </div>
    </div>
  </div>

export default compose(
  getAnalytics({
    products: [],
    assocUsers: [],
    assocItems: [],
    product: null,
    item: null,
    certificates: 0,
  }),
)(AnalyticsContainer)
