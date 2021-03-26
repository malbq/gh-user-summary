export interface LatLng {
  lat: number,
  lng: number
}

export interface GeocoderGeometry {
  location: LatLng
}

export interface GeocoderResult {
  geometry: GeocoderGeometry
}

export interface GeocoderResponse {
  results: GeocoderResult[]
}
