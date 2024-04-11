import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/HotelCard.css'



const HotelCard = ({ hotel }) => {

    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate(`hotels/${hotel.id}`)

    }
  return (
    <article className='card'>
        <header className=''>
            <img className='card_img' src={hotel.images[0].url} alt="" />
        </header>
        <section className='container-card' >
            <h3>{hotel.name}</h3>
            <p>{hotel.rating}</p>
            <span>{hotel.city.name} , {hotel.city.country}</span>
            <div>{hotel.price}</div>
            </section> 
            <footer>
                <button onClick={handleClick}>See more ... </button>
            </footer>
          </article>
  )
}

export default HotelCard
