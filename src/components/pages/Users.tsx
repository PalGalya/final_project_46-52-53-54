import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../../redux/store'
import { fetchAllUsers, selectUsers, selectUsersError, selectUsersLoading } from '../../redux/slices/userSlice'
import { useEffect } from 'react'

const Users = () => {
  const dispatch = useDispatch<AppDispatch>()
  const users = useSelector(selectUsers)
  const isLoading = useSelector(selectUsersLoading)
  const error = useSelector(selectUsersError)

  useEffect(() => {
    dispatch(fetchAllUsers('https://jsonplaceholder.typicode.com/users'))
  }, [dispatch])

  return (
    <div>
      <h1>Users</h1>
      {isLoading && <h2 className="loading">Loading...</h2>}
      {error && <h2 className="error">{error}</h2>}
      {!isLoading && !error && !!users.length && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Users
