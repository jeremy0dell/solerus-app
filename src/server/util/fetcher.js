import axios from 'axios'
import { APP_URI } from '../../shared/config'

const fetcher = axios.create({
  baseURL: APP_URI,
})

export default fetcher
