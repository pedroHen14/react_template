import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api';
import { signIn } from '../../services/storage';
import styles from './login.module.scss'

interface LoginResponse {
  id: number;
  name: string;
  email: string;
  token: string;
}

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { data } = await api.post<LoginResponse>('/session', {
        email,
        password
      });
  
      signIn({
        user: {
          id: data.id,
          email: data.email,
          name: data.name,
        },
        token: data.token,
      })
      
      navigate('/home')
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email" 
          value={email} 
          onChange={(event) => setEmail(event.target.value)}
        />
        <input 
          type="password" 
          name="password" 
          value={password} 
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">
          Entrar
        </button>
      </form>
    </div>
  )
}