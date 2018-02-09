import React from 'react'
import { compose, withState, lifecycle } from 'recompose'
import axios from 'axios'

import { TRANSFER_INDEX, USERS_INDEX } from '../../../routes'
import { MANUFACTURER_INDEX } from '../../../manufacturerRoutes'

const HistoryItem = ({ item, withHistory }) =>
  <div>
    This is a historyItem
    {console.log('12345', item, withHistory)}
    {withHistory.recipient && <div>
      <div>From: {withHistory.transferer.name}</div>
      <div>To: {withHistory.recipient.full_name}</div>
      <div>At: {withHistory.transferDate}</div>
    </div>}
  </div>

const withHistory = compose(
  withState('withHistory', 'setHistory', { transferer: null, recipient: null, transferDate: null }),
  lifecycle({
    componentDidMount() {
      const { item, setHistory } = this.props

      axios.get(`/api${TRANSFER_INDEX}/${item}`)
      .then(res => Promise.all([
        axios.get(`/manu${MANUFACTURER_INDEX}/${res.data.transferer}`),
        axios.get(`/api${USERS_INDEX}/${res.data.recipient}`),
        res.data.transferDate,
      ]))
      .then(([transferer, recipient, date]) => {
        setHistory({ transferDate: date, transferer: transferer.data, recipient: recipient.data })
        console.log('it has been set')
      })
    },
  }),
)

export default withHistory(HistoryItem)
