import React from 'react'
import Navbar from '../components/navbar'


const Layout: React.FC = ({ children } : any) => {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
    </>
  )
}

export default Layout