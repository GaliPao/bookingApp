import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import HotelCard from '../components/HomePage/HotelCard'
import CategoryFilters from '../components/HomePage/CategoryFilters'
import PriceFilter from '../components/HomePage/PriceFilter'

const HomePage = () => {

  const [inputName, setInputName] = useState('')

    const hotels = useSelector((states) => states.hotels)

    const inputValue = useRef()

    const [fromTo, setFromTo] = useState({
      from: 0,
      to: Infinity
    })

    const handleChange = () => {
      setInputName(inputValue.current.value)
    }

    /// Filters
    const cbfilter = (hotelInfo) => {

      // Filter by name
      const filterName = hotelInfo.name
      .toLowerCase()
      .includes(inputName.toLowerCase().trim())

      // Filter by price
      const price = Number(hotelInfo.price)
      const filterPrice = price >= fromTo.from && price <= fromTo.to

      return filterName && filterPrice
    }

  return (
    <div>
      <div >
        <input onChange={handleChange} value={inputName} ref={inputValue} type="text" />
        </div>
        <aside>
          <h3>Filters</h3>
          <PriceFilter setFromTo={setFromTo} />
          <CategoryFilters />
        </aside>
        <div>
        {
            hotels?.filter(cbfilter).map(hotelInfo => (
                <HotelCard
                key={hotelInfo.id}
                hotel={hotelInfo}
                />
            ))
        }
      </div>
    </div>
  )
}

export default HomePage
