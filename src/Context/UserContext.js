import { createContext, useState } from "react";


const UserContext = createContext()

export const UserContextProvider = ({children})=>{

 

const [user,setUser] = useState({   id:1,
        username:`Helles`,
    bio:`fishing advanturer`   }) 
    const values= {user,setUser
    }
   
 return<UserContext.Provider value={values}>{children}</UserContext.Provider>

}

export default UserContext