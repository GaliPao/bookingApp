import React, { useEffect, useState } from 'react'
import useCrud from '../hooks/useCrud'
import ReserveCard from '../components/ReservationsPage/ReserveCard'
import FormReviews from '../components/ReservationsPage/FormReviews'

const ReservationPage = () => {

  const [ reserveSelected, setReservedSelected ] = useState()
  const { bookings, getBookings } = useCrud()

  useEffect (() => {
    const url ='https://hotels-api.academlo.tech/bookings'
    getBookings(url)
  }), []

  return (
    <section>
      <FormReviews
      reserveSelected={reserveSelected}
      setReservedSelected={setReservedSelected}
      deleteBooking={deleteBooking} />
      <h2>Reservations</h2>
      <div>
        {
          bookings?.map(reserve =>(
            <ReserveCard
              key={'reserve.id'}
              reserve={reserve}
            />
          ))
        }
      </div>
      
    </section>
  )
}

export default ReservationPage
