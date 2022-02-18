import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/auth/context'
import { useLocale } from '../../context/locale/context'
import { Input, Logo, Svg } from '../../styles/global'
import { loginContent } from './content'
import { Button, Sep, LoginForm, SocialWrapper, WelcomeWrapper, Wrapper, LoginFooter } from './styles'

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
  const { locale } = useLocale()

  async function handleSignIn(data: LoginValues) {
    await signIn(data)
  }

  useEffect(() => {
    setFocus('email')
  }, [])

  return (
    <Wrapper>
      <WelcomeWrapper>
        <Logo src='/logo.svg' viewBox='0 0 65 19' />
        <h1>{loginContent[locale].greetings}</h1>
      </WelcomeWrapper>
      <SocialWrapper>
        <Button style={{ background: '#1877F2', opacity: '.3', cursor: 'default' }}>
          <Svg src='/facebook.svg' /><h1>{loginContent[locale].facebook}</h1>
        </Button>
        <Button style={{ background: '#EA4335', opacity: '.3', cursor: 'default' }}>
          <Svg src='/google.svg' /><h1>{loginContent[locale].google}</h1>
        </Button>
      </SocialWrapper>
      <Sep className='size'><p><span>{loginContent[locale].or}</span></p></Sep>
      <LoginForm onSubmit={handleSubmit(handleSignIn)}>
        <Input {
          ...register('email', {
            required: { value: true, message: `${loginContent[locale].emailError}` }
          })}
          type='email'
          placeholder={errors?.email?.message || `${loginContent[locale].emailPlaceholder}`}
          className={errors?.email ? 'error' : undefined}
        />

        <Input {...register('password', {
          required: { value: true, message: `${loginContent[locale].passwordError}` }
        })}
          placeholder={errors?.password?.message || `${loginContent[locale].passwordPlaceholder}`}
          type='password'
          className={errors?.password ? 'error' : undefined}
        />

        <Button type="submit" style={{
          background: 'black',
          color: 'white'
        }}>
          <Svg src='/google.svg' /><h2>{loginContent[locale].emailSub}</h2>
        </Button>

      </LoginForm>
      <LoginFooter>
        <p>{loginContent[locale].notReg}</p>
        <h3>{loginContent[locale].reg}</h3>
      </LoginFooter>
    </Wrapper>
  )
}

export default Login
