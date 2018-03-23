import React from 'react'
import { compose, withState, lifecycle } from 'recompose'
import axios from 'axios'

import { TRANSFER_INDEX, USERS_INDEX } from '../../../routes'
import { MANUFACTURER_INDEX } from '../../../manufacturerRoutes'

const HistoryItem = ({ withHistory }) =>
  <div>
    <b>Transfer</b>
    {withHistory.recipient && <div>
      <div>From: {withHistory.transferer.name || withHistory.transferer.full_name}</div>
      <div>To: {withHistory.recipient.name || withHistory.recipient.full_name}</div>
      <div>Date: {new Date(withHistory.transferDate).toLocaleDateString().replace(/\//g, '-')}</div>
    </div>}
  </div>

const queryFromType = (transfer) => {
  const { transferType } = transfer

  const types = {
    U: ['api', USERS_INDEX],
    M: ['manu', MANUFACTURER_INDEX],
  }

  const [fromSend, fromRoute] = [types[transferType[0]][0], types[transferType[0]][1]]
  const [toSend, toRoute] = [types[transferType[3]][0], types[transferType[3]][1]]

  return [
    axios.get(`/${fromSend}${fromRoute}/${transfer.transferer}`),
    axios.get(`/${toSend}${toRoute}/${transfer.recipient}`),
    transfer.transferDate,
  ]
}

const withHistory = compose(
  withState('withHistory', 'setHistory', { transferer: null, recipient: null, transferDate: null }),
  lifecycle({
    componentDidMount() {
      const { item, setHistory } = this.props

      axios.get(`/api${TRANSFER_INDEX}/${item}`)
      .then(res => Promise.all(queryFromType(res.data)))
      .then(([transferer, recipient, date]) => {
        setHistory({
          transferDate: date,
          transferer: transferer.data,
          recipient: recipient.data,
        })
      })
    },
  }),
)

export default withHistory(HistoryItem)
