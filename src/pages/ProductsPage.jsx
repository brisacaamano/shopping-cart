import { useContext } from 'react'
import { CardComponent } from '../components/CardComponent'
import { ProductContext } from '../context/ProductContext'
import { CartContext } from '../context/CartContext'

export const ProductsPage = () => { 
  const {products} = useContext(ProductContext)
  const {addProduct, removeProduct} = useContext(CartContext)

  return (
    <>
      <h1>Products</h1>
      <hr/>
      {products.map(product => (
        <CardComponent
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          handleAdd={() => addProduct(product)}
          handleRemove={() => removeProduct(product.id)}
        />
      ))}
    </>
  )
}
