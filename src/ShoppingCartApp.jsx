import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBarComponent } from './components/NavBarComponent'
import { CartPage } from './pages/CartPage'
import { CartProvider } from './context/CartProvider'
import { ProductsPage } from './pages/ProductsPage'
import { ProductProvider } from './context/ProductProvider'

export const ShoppingCartApp = () => {
  return (
    <>
      <ProductProvider>
        <CartProvider>
        <NavBarComponent/>
        <h1>Shopping Cart</h1>
        <div className='container'>
          <Routes>
              <Route path='/' element={<ProductsPage/>}></Route>
              <Route path='/cart' element={<CartPage/>}></Route>
              <Route path='/*' element={<Navigate to='/'/>}></Route>
          </Routes>
        </div>
        </CartProvider>
      </ProductProvider>
    </>
  )
}
