import type { ProductInterface } from '../types/Product.interface'
import type { SelectOptionInterface } from '../types/Common'

export const PRODUCT_CATEGORIES: SelectOptionInterface[] = [
  {
    value: 'Laptops',
    text: 'Laptops'
  },
  {
    value: 'Desktops and All-in-Ones',
    text: 'Desktops and All-in-Ones'
  },
  {
    value: 'Graphics Cards',
    text: 'Graphics Cards'
  },
  {
    value: 'Monitors',
    text: 'Monitors'
  },
  {
    value: 'Accessories and Peripherals',
    text: 'Accessories and Peripherals'
  }
]

export const INITIAL_PRODUCT: Partial<ProductInterface> = {
  name: 'MSI GeForce RTX 4060 Ti',
  description:
    "Потужна відеокарта середнього рівня з 16GB GDDR6 пам'яттю та підтримкою DLSS 3.0 для комфортного геймінгу в 1440p",
  price: 549.0,
  image: 'https://picsum.photos/640/480?random=rtx4060ti',
  category: 'Graphics Cards'
}

export const SORT_BY_LIST: SelectOptionInterface[] = [
  { value: '', text: 'Default order' },
  { value: 'price', text: 'Price' },
  { value: 'name', text: 'Name' },
  { value: 'category', text: 'Category' }
]

export const ORDER_LIST: SelectOptionInterface[] = [
  { value: 'asc', text: 'Ascending' },
  { value: 'desc', text: 'Descending' }
]
