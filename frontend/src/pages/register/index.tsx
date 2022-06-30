import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/auth/context'
import { useLocale } from '../../context/locale/context'
import { notify } from '../../fns/notify'
import { UserRegisterInput } from '../../graphql/types'
import { Input, Logo, Svg } from '../../styles/global'
import { registerContent } from './content'
import {
  RegisterButton,
  RegisterSep,
  RegisterForm,
  RegisterSocialWrapper,
  RegisterWelcomeWrapper,
  RegisterWrapper,
  RegisterFooter,
  PasswordWrapper,
  InputWrapper
} from './styles'

type RegisterValues = UserRegisterInput & {
  confirmPassword: string
}

const defaultValues: RegisterValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: ''
}

const Register = () => {
  const { register, handleSubmit, formState: { errors }, setFocus, getValues } = useForm({ defaultValues })
  const { locale } = useLocale()
  const { register: onRegisterUser, signIn } = useAuth()

  async function handleRegister(data: RegisterValues) {
    try {
      const user = await onRegisterUser({ email: data.email, name: data.name, password: data.password })
      if (user) {
        notify(`${registerContent[locale].registerSuccess}`)
        signIn({ email: user.email, password: data.password })
      }
    } catch {
      notify(`${registerContent[locale].alreadyRegistered}`, true)
    }
  }

  useEffect(() => {
    setFocus('email')
  }, [])

  return (
    <RegisterWrapper>
      <RegisterWelcomeWrapper>
        <Logo src='/logo.svg' viewBox='0 0 65 19' />
        <h1>{registerContent[locale].greetings}</h1>
      </RegisterWelcomeWrapper>
      <RegisterSocialWrapper>
        <RegisterButton style={{ background: '#1877F2', opacity: '.3', cursor: 'default' }}>
          <Svg src='/facebook.svg' /><h1>{registerContent[locale].facebook}</h1>
        </RegisterButton>
        <RegisterButton style={{ background: '#EA4335', opacity: '.3', cursor: 'default' }}>
          <Svg src='/google.svg' /><h1>{registerContent[locale].google}</h1>
        </RegisterButton>
      </RegisterSocialWrapper>
      <RegisterSep className='size'><p><span>{registerContent[locale].or}</span></p></RegisterSep>
      <RegisterForm onSubmit={handleSubmit(handleRegister)}>
        <InputWrapper>
          <Input autoFocus={true} {
            ...register('email', {
              required: { value: true, message: `${registerContent[locale].emailError}` }
            })}
            type='email'
            placeholder={`${registerContent[locale].emailPlaceholder}`}
          />
          <p style={{ visibility: errors?.email ? 'visible' : 'hidden' }}>{errors?.email?.message || 'erro'}</p>
        </InputWrapper>
        <PasswordWrapper>
          <InputWrapper>
            <Input {...register('password', {
              required: { value: true, message: `${registerContent[locale].passwordError}` }
            })}
              placeholder={`${registerContent[locale].passwordPlaceholder}`}
              type='password'
              name='password'
            />
            <p style={{ visibility: errors?.password ? 'visible' : 'hidden' }}>{errors?.password?.message || 'erro'}</p>
          </InputWrapper>
          <div />
          <InputWrapper>
            <Input {...register('confirmPassword', {
              validate: value => value === getValues('password') || `${registerContent[locale].wrongMatch}`,
              required: { value: true, message: `${registerContent[locale].confirmPass}` }
            })}
              placeholder={`${registerContent[locale].confirmPass}`}
              type='password'
            />
            <p style={{ visibility: errors?.confirmPassword ? 'visible' : 'hidden' }}>{errors?.confirmPassword?.message || 'erro'}</p>
          </InputWrapper>
        </PasswordWrapper>

        <RegisterButton type="submit" style={{
          background: 'black',
          color: 'white'
        }}>
          <Svg src='/google.svg' /><h2>{registerContent[locale].emailSub}</h2>
        </RegisterButton>

      </RegisterForm>
      <RegisterFooter>
        <p>{registerContent[locale].notReg}</p>
        <h3>{registerContent[locale].reg}</h3>
      </RegisterFooter>
    </RegisterWrapper >
  )
}

export default Register
