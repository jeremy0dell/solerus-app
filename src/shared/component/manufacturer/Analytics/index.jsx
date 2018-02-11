import React from 'react'
import { compose } from 'recompose'
import { Link } from 'react-router-dom'

import { getAnalytics } from '../../../util/analytics'
import { getProducts } from '../../../util/getters'

import TopBar from './TopBar'
import Dropdowns from './Dropdowns'
import Product from './Product'

import styles from '../../styles/AnalyticsStyles'

// I need to get the associated Products

/*  { <Switch>
    <Route exact path={MANUFACTURER_ANALYTICS_PRODUCT} render={() => <Product user={user} />} />
    <Route exact path={MANUFACTURER_ANALYTICS_ITEM} render={() => <Item user={user} />} />
    </Switch> } */

const Button = () =>
  <Link to="/manufacturer">
    <button style={styles.arrowButton}>←</button>
  </Link>

const AnalyticsContainer = ({ user, analytics, products, setAnalyticsProduct, setAnalyticsItem }) =>
  <div>
    <Button />
    {analytics.certificates && <TopBar user={user} certificates={analytics.certificates} />}
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={styles.boxShadowProd}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ paddingTop: '20px' }}>
          Product Line:
          </div>
          <Dropdowns
            products={products}
            setAnalyticsProduct={setAnalyticsProduct}
            setAnalyticsItem={setAnalyticsItem}
            product={analytics.product}
            item={analytics.item}
          />
        </div>
        <div style={{ alignItems: 'left', marginLeft: '10%', width: '100%' }}>
          {
            analytics.product && <Product
              key={analytics.product} // key FORCES A REMOUNT WHEN KEY CHANGES
              user={user}             // THIS SHOULD BE A TEMPORARY HACK
              product={analytics.product}
            />
          }
        </div>
      </div>
    </div>
  </div>

export default compose(
  getAnalytics({ certificates: 0, product: null, item: null }),
  getProducts,
)(AnalyticsContainer)

// export default getAnalytics(AnalyticsContainer)
