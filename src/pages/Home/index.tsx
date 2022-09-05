import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { User } from '../../services/storage'

export function Home() {
  const [user, setUser] = useState({} as User)

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await api.get<User>('/users')

      setUser(data)
    }

    loadUser()
  }, []);

  console.log(user);

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}