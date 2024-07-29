import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'

export const CartPage = () => {
  const {shoppingList, removeProduct, incrementQuantity, decrementQuantity} = useContext(CartContext)

  const calculateTotal = () => {
    return shoppingList.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
  }

  const handlePurchase = () => {
    const productsPurchased = shoppingList.map(product => `${product.title} x ${product.quantity}`).join('\n')
    Swal.fire({
      icon: 'success',
      title: 'The purchase has been successfully completed',
      html: `<p>You have purchased: </p> <pre>${productsPurchased}</pre>`
    })
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map(product => (
            <tr key={product.id}>
              <th scope="row">{product.title}</th>
              <td>{product.price}</td>
              <td>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => decrementQuantity(product.id)}
                >-</button>
                <button
                  className="btn btn-primary"
                >{product.quantity}</button>
                <button className="btn btn-outline-primary" onClick={() => incrementQuantity(product.id)}
                >+</button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => removeProduct(product.id)}
                >Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <th><b>TOTAL</b></th>
            <td></td>
            <td></td>
            <td>${calculateTotal()}</td>
          </tr>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button type="button" className="btn btn-primary" onClick={handlePurchase}
        >Purchase</button>
      </div>
    </>
  )
}
