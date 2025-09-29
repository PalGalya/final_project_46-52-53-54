import type { ProductInterface } from '../../types/Product.interface'
import type { RootState } from '../store'
import createFetchSlice from './createFectSlice'

const initialState = {
  data: [] as ProductInterface[],
  totalCount: 0,
  error: null as string | null,
  isLoading: false
}

const productsSlice = createFetchSlice<ProductInterface>('products', initialState)

export const fetchAllProducts = productsSlice.fetchThunk
export const selectProducts = (state: RootState) => state.products.data
export const selectProductsLoading = (state: RootState) => state.products.isLoading
export const selectProductsError = (state: RootState) => state.products.error
export const selectProductsTotalCount = (state: RootState) => state.products.totalCount

export default productsSlice.reducer
