
const UserLogged = ({user, setUser}) => {  

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    setUser()
  }

    
  return (
    <article>
        <header>
            <img src={user.gender === 'female'
            ? '/user-female-icon.png'
            : '/user-male-icon.png'
        
        } alt="" />
        </header>
        <h2>
            Welcome {user.firstName} {user.lastName}
        </h2>
        <button onClick={handleLogout}>Logout</button>
      
    </article>
  )
}

export default UserLogged
