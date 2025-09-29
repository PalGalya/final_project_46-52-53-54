import type { ProductInterface } from '../../types/Product.interface'
import { API_URL } from '../../utils/mockapi'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useDelete } from '../../hooks/useDelete'
import EditProduct from './EditProduct'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'

interface ProductProps {
  product: ProductInterface
  reload: () => void
}

const Product = ({ product: { id, name, description, price, image, category }, reload }: ProductProps) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  const { deleteProduct } = useDelete(API_URL)

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(id.toString())
      reload()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <li className="product-item">
      <h2 className="product-item__title">{name}</h2>
      <p className="product-item__description">{description}</p>
      <p className="product-item__category">{category}</p>
      <h3 className="product-item__price">${price}</h3>
      <img className="product-item__image" src={image} alt={name} />
      {isLoggedIn && (
        <div className="product-item__actions">
          <button className="product-item__delete" onClick={handleDeleteProduct} title="Видалити товар">
            <FaTrash />
          </button>
          <EditProduct product={{ id, name, description, price, image, category }} reload={reload}>
            <FaEdit />
          </EditProduct>
        </div>
      )}
    </li>
  )
}

export default Product
