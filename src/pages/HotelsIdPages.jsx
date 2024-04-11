import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import OtherHotels from '../components/HotelsIdPage/OtherHotels'
import { Map, Overlay } from 'pigeon-maps'
import useFetch from '../hooks/useFetch'
import FormReserve from '../components/HotelsIdPage/FormReserve'

const HotelsIdPages = () => {
  const { id } = useParams()


  const url = `https://hotels-api.academlo.tech/hotels/${id}`
  const [ hotel, getHotel ] = useFetch(url);

  useEffect(() => {
   getHotel()

  }, [id])
  


  return (
    <div>
      <h2>{hotel?.name}</h2>
      <h3>RATING - {hotel?.rating}</h3>
      <div className='slider'>
        <img src={hotel?.images[0].url} alt="" />
        {
          hotel &&
        <Map height={200} defaultCenter={[+hotel?.lat, +hotel?.lon]} zoom={15} maxZoom={16} minZoom={10}>
          <Overlay anchor={[+hotel?.lat, +hotel?.lon]}>
            <img src="icon-hotel.png" alt="" />
            </Overlay>             
        </Map>
        }
      </div>
      <section>
        <h3>{hotel?.city.name} , {hotel?.city.country}</h3>
        <p>
        <i className='bx bxs-map'></i> 
          <span>{hotel?.address}</span>
        </p>
        <p>
          {hotel?.description}
        </p>
      </section>
      {
        localStorage.getItem('token')
        ? <FormReserve hotelId={hotel?.id} />
        : <h4>If you need a reservation, please <Link to='/login'>Login</Link></h4>
      }
      
      <OtherHotels
      hotel={hotel} />
    </div>
  )
}

export default HotelsIdPages
