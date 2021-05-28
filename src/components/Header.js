import React from 'react'
import {Link} from 'react-router-dom'
import {Logoutpage, Loutoutpage} from './Logout'

const Header = () => {
  return(

  <div className="header-container">
      <header className="header">
        <div className="content-container"> 
          <div className="header-content"> 
             <Link className="header-title" to="/">
                <h1>Expensify</h1>
              </Link>
              <Logoutpage />
          </div>
      </div>
    </header>      
  </div>
  )
}

export default Header