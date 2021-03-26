import axios from 'axios'
import { GeocoderResponse, LatLng } from '../interfaces/GoogleMaps'

const api = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode',
  timeout: 0
})

export async function fromAddress (address: string): Promise<LatLng> {
  const response = await api.get<GeocoderResponse>('json', {
    params: {
      address,
      key: process.env.REACT_APP_GOOGLE_API_KEY
    }
  })

  const { results } = response.data

  if (results.length) {
    return results[0].geometry.location
  }

  throw new Error('Ocorreu um erro durante a procura pela localização')
}
