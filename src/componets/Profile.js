import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'


function Profile() {
    const {user,setUser}= useContext(UserContext)
    const handleLogin = ()=>{
setTimeout(() => {
  setUser({id:2,username:`HandyCooler`,Bio:`Cooler Fans`})
}, 1000);      
    }

    const handleLogout= () =>{
      setUser(``)
    }

  return (
<>
  <button onClick={ handleLogin}>Login</button>
    <div>{JSON.stringify(user)}</div> 
<button onClick={handleLogout}>Logout</button>

    </>
  )
}

export default Profile