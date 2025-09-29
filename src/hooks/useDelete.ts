import axios from 'axios'

export const useDelete = (url: string) => {
  const deleteProduct = async (id: string) => {
    try {
      const response = await axios.delete(`${url}/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error deleting product: ${(error as Error).message}`)
      throw new Error(`Failed to delete product`)
    }
  }

  return { deleteProduct }
}
