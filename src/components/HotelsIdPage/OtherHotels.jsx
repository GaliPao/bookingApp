import React, { useEffect } from 'react'
import HotelCard from '../HomePage/HotelCard'
import useFetch from '../../hooks/useFetch'

const OtherHotels = ({ hotel }) => {

    const url = `https://hotels-api.academlo.tech/hotels?cityId=${hotel?.cityId}`
    const [ hotelsInCity, getHotelsInCity ]= useFetch(url)

    useEffect(() => {
        if(hotel) {
      getHotelsInCity()
        }
    }, [hotel])
    



  return (
    <section>
        <h3>Other Hotels in <span>{hotel?.city.name}</span></h3>
        <div>
          {
            hotelsInCity?.map(hotel => (
              <HotelCard 
              key={hotel?.id}
              hotel={hotel}
              />
            ))
          }
        </div>
    </section>
     
    
  )
}

export default OtherHotels
