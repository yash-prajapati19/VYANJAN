import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
        <div className="logo">VYANJAN</div>
        <h3 >Hello McDev</h3>
        <Link className="links" to="/order">Order</Link>
        <Link className="links" to="/cart">Cart</Link>
        <Link className="links" to="/logout">Logout</Link>
    </div>
  )
}

export default Header