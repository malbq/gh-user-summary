import React, { useEffect, useState } from 'react'
import {
  GoogleMap,
  Marker,
  useJsApiLoader
} from '@react-google-maps/api'
import './UserInfoMap.sass'
import { fromAddress } from '../services/geocode'
import { LatLng } from '../interfaces/GoogleMaps'

type Props = {
  location: string
}

const containerStyle = {
  width: '268px',
  height: '268px'
}

const mapOptions = {
  disableDefaultUI: true,
  zoom: 12
}

function UserInfoMap ({ location }: Props) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY ?? ''
  })

  const [requestError, setRequestError] = useState<string | null>(null)

  const [center, setCenter] = useState<LatLng>({
    lat: 0,
    lng: 0
  })

  useEffect(() => {
    if (location) {
      fromAddress(location)
        .then(setCenter)
        .catch(error => setRequestError(error.message))
    }
  }, [location])

  if (loadError) return <div className="UserInfoMap-error">{loadError}</div>

  if (requestError) return <div className="UserInfoMap-error">{requestError}</div>

  if (!isLoaded) return <div className="UserInfoMap-loading">loading...</div>

  return <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    options={mapOptions}
  >
    <Marker position={center} />
  </GoogleMap>
}

export default UserInfoMap
