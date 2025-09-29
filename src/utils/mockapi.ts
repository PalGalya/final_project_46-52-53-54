export const API_URL = 'https://68d9c10790a75154f0db1428.mockapi.io/api/v1/products'
export const API_ITEMS_PER_PAGE_LIMIT = 12

export function createUrl(
  page: number | string,
  name: string,
  sort: string,
  order: string,
  category: string = '',
  limit: number | string = API_ITEMS_PER_PAGE_LIMIT
): string {
  const urlObject = new URL(API_URL)
  urlObject.searchParams.set('page', `${page}`)
  urlObject.searchParams.set('limit', `${limit}`)
  urlObject.searchParams.set('name', `${name}`)
  urlObject.searchParams.set('sortBy', `${sort}`)
  urlObject.searchParams.set('order', `${order}`)

  if (category) {
    urlObject.searchParams.set('category', `${category}`)
  }

  return urlObject.toString()
}
