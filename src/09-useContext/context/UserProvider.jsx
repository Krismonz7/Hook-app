import { useContext, useState } from "react"
import { UserContext } from "./UserContext"

/* const user = {
    name:'Kirby',
    city:'Dream Land',
    id:1,
} */

export const UserProvider = ({children}) => {
  
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}
