import { useEffect, useRef, useState } from 'react'
import { API_ITEMS_PER_PAGE_LIMIT, createUrl } from '../../utils/mockapi'
import Product from '../products/Product'
import AddProduct from '../products/AddProduct'
import { debounce } from '../../utils/debounce'
import { ORDER_LIST, SORT_BY_LIST, PRODUCT_CATEGORIES } from '../../data/mockData'
import { MdRefresh } from 'react-icons/md'
import SelectField from '../form/SelectField'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAllProducts,
  selectProducts,
  selectProductsError,
  selectProductsLoading,
  selectProductsTotalCount
} from '../../redux/slices/productsSlice'
import type { AppDispatch } from '../../redux/store'
import { selectIsLoggedIn } from '../../redux/slices/authSlice'
import Loading from '../../ui/Loading'
import Pagination from '../products/Pagination'

const Products = () => {
  const [page, setPage] = useState(1)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [sort, setSort] = useState('')
  const [order, setOrder] = useState('asc')
  const [reload, setReload] = useState('0')

  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch<AppDispatch>()

  const products = useSelector(selectProducts)
  const totalProducts = useSelector(selectProductsTotalCount)
  const isLoading = useSelector(selectProductsLoading)
  const error = useSelector(selectProductsError)
  const isLoggedIn = useSelector(selectIsLoggedIn)

  const totalPages = Math.ceil(totalProducts / API_ITEMS_PER_PAGE_LIMIT)

  useEffect(() => {
    dispatch(fetchAllProducts(createUrl(page, name, sort, order, category)))
  }, [dispatch, page, name, sort, order, reload, category])

  const debouncedSetName = debounce(setName, 1000)

  const resetFilters = () => {
    setName('')
    setCategory('')
    setSort('')
    setOrder('asc')
    setPage(1)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <div>
      <h1>Products List</h1>

      <div className="products-filter">
        <div className="form-group">
          <label className="form-label" htmlFor="filter">
            Filter by name
          </label>
          <input
            className="form-control"
            ref={inputRef}
            id="filter"
            type="text"
            placeholder="Filter products by name..."
            onChange={(e) => debouncedSetName(e.target.value)}
          />
        </div>
        <SelectField
          id="category"
          value={category}
          label="Category"
          options={[{ value: '', text: 'All Categories' }, ...PRODUCT_CATEGORIES]}
          onChangeSelect={(e) => setCategory(e.target.value)}
        />
        <SelectField
          id="sort"
          value={sort}
          label="Sort by"
          options={SORT_BY_LIST}
          onChangeSelect={(e) => setSort(e.target.value)}
        />
        <SelectField
          id="order"
          value={order}
          label="Order"
          options={ORDER_LIST}
          onChangeSelect={(e) => setOrder(e.target.value)}
        />
        <button onClick={resetFilters} title="Скинути фільтри">
          <MdRefresh />
        </button>
      </div>

      {isLoading && <Loading />}
      {error && <h2 className="error">{error}</h2>}
      {!isLoading && !error && (
        <div className="content">
          <div className="buttons-group">{isLoggedIn && <AddProduct />}</div>

          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />

          {products.length > 0 ? (
            <ul className="products-list">
              {products.map((product) => (
                <Product key={product.id} product={product} reload={() => setReload(product.id.toString())} />
              ))}
            </ul>
          ) : (
            <p className="products-empty">No products found</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Products
