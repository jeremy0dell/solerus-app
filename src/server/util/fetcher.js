import axios from 'axios'
import { APP_URI } from '../../shared/config'

console.log('APP_URI in fetcher', APP_URI)
const fetcher = axios.create({
  baseURL: APP_URI,
})

export default fetcher
