import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import '../styles/CardComponent.css'

export const CardComponent = ({id, image, title, description, price, handleAdd, handleRemove}) => {
  const [added, setAdded] = useState(false)

  const {shoppingList} = useContext(CartContext)

  const addProduct = () => {
    handleAdd()
    setAdded(true)
  }

  const removeProduct = () => {
    handleRemove()
    setAdded(false)
  }

  const checkAdded = () => {
    const boolean = shoppingList.some(product => product.id == id)
    setAdded(boolean)
  }

  useEffect(() => {
    checkAdded()
  }, [])

  return (
    <div className="card">
      <img src={image} alt={title} className="card-img"/>
      <div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">{price}</p>
        {
          added
            ? <button type="button" className="remove-button" onClick={removeProduct}>Remove from cart</button>
            : <button type="button" className="add-button" onClick={addProduct}>Add to cart</button>
        }
      </div>
    </div>
  )
}
