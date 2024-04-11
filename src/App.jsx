import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import HotelsIdPages from './pages/HotelsIdPages'
import RegisterPages from './pages/RegisterPages'
import LoginPage from './pages/LoginPage'
import { useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getHotelsThunk } from './store/states/hotels.slice'
import Header from './components/shared/Header'
import ReservationPage from './pages/ReservationPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
      const url = 'https://hotels-api.academlo.tech/hotels'
      dispatch(getHotelsThunk(url))    
  }, [])
  

  

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hotels/:id' element={<HotelsIdPages />} />
        <Route path='/register' element={<RegisterPages />} />
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
        <Route path='/reservations' element={<ReservationPage />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
