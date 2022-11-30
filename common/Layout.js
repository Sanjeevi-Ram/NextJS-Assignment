import React, { Children } from 'react'
import Header from './Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Layout = ({children},props) => {
  return (
    <div className="container">
        <Header>
            <title>My Products</title>
        </Header>
        {children}
    </div>
    
  )
}

export default Layout