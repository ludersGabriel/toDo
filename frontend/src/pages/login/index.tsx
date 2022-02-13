import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/auth/context'

type LoginValues = {
  email: string
  password: string
}

const defaultValues: LoginValues = {
  email: '',
  password: ''
}

const Login = () => {
  const { register, handleSubmit, formState: { errors }, setFocus } = useForm({ defaultValues })
  const { signIn } = useAuth()

  async function handleSignIn(data: LoginValues) {
    await signIn(data)
  }

  useEffect(() => {
    setFocus('email')
  }, [])

  return (
    <form onSubmit={handleSubmit(handleSignIn)} style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%'
    }}>
      <input {
        ...register('email', {
          maxLength: { value: 100, message: 'Only 100 characters allowed' },
          minLength: { value: 10, message: 'At least 10 characters are needed' },
          required: { value: true, message: 'Email is required' }
        })}
        placeholder='email'
        type='email'
      />
      {errors?.email && <p>{errors?.email?.message}</p>}

      <input {...register('password', {
        maxLength: { value: 100, message: 'Only 100 characters allowed' },
        minLength: { value: 5, message: 'At least 5 characters are needed' },
        required: { value: true, message: 'Password is required' }
      })}
        placeholder='password'
        type='password'
      />
      {errors?.password && <p>{errors?.password?.message}</p>}

      <input type="submit" />
    </form>

  )
}

export default Login
