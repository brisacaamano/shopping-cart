import { ShoppingCart } from '@mui/icons-material'
import { Badge } from '@mui/material'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import '../styles/NavBarComponent.css'

export const NavBarComponent = () => {
  const {shoppingList} = useContext(CartContext)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to='/' className="navbar-brand" href="#">Logo</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to='/' className="nav-link active" aria-current="page" href="#">Products</NavLink>
          </div>
        </div>
        <NavLink to='/cart' className='cart-icon'>
          <Badge badgeContent={shoppingList.length} color="primary">
            <ShoppingCart/>
          </Badge>
        </NavLink>
      </div>
    </nav>
  )
}
