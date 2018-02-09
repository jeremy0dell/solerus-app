import React from 'react'
import { compose } from 'recompose'

import { getAnalytics } from '../../../util/analytics'
import { getProducts } from '../../../util/getters'

import TopBar from './TopBar'
import Product from './Product.jsx' // eslint-disable-line
import Item from './Item.jsx' // eslint-disable-line
import Dropdowns from './Dropdowns'

// I need to get the associated Products

const AnalyticsContainer = ({ user, analytics, products, setAnalyticsProduct, setAnalyticsItem }) =>
  <div>
    {analytics.certificates && <TopBar user={user} certificates={analytics.certificates} />}
    <Dropdowns
      products={products}
      setAnalyticsProduct={setAnalyticsProduct}
      setAnalyticsItem={setAnalyticsItem}
      product={analytics.product}
      item={analytics.item}
    />
    {
      analytics.product && <Product
        key={analytics.product} // key FORCES A REMOUNT WHEN KEY CHANGES
        user={user}             // THIS SHOULD BE A TEMPORARY HACK
        product={analytics.product}
      />
    }
    {/* <Switch>
      <Route exact path={MANUFACTURER_ANALYTICS_PRODUCT} render={() => <Product user={user} />} />
      <Route exact path={MANUFACTURER_ANALYTICS_ITEM} render={() => <Item user={user} />} />
    </Switch> */}
  </div>

export default compose(
  getAnalytics({ certificates: 0, product: null, item: null }),
  getProducts,
)(AnalyticsContainer)

// export default getAnalytics(AnalyticsContainer)
