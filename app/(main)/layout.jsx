import { useUser } from '@clerk/nextjs'
import React from 'react'
import { BarLoader } from 'react-spinners';

const AppLayout = ({children}) => {
    const {isLoaded} = useUser();
  return (
    <div>
        {!isLoaded && <BarLoader width={"100%"} color='#36d7b7'/>}
        {children}</div>
  )
}

export default AppLayout