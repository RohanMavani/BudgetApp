import React from 'react'
import {NavLink} from 'react-router-dom'
import {Logoutpage, Loutoutpage} from './Logout'

const Header = () => {
  return(
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
      <Logoutpage />
    </header>
  )
}

export default Header