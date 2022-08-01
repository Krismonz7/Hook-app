import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
export const HomePage = () => {

  const {user} = useContext(UserContext);

  return (
    <div>
      HomePage
      <br />
      <small>{user?.name}</small>

      <pre>

        {JSON.stringify(user,null,3)}

      </pre>


    </div>
  )
}
