import { User, UserRegisterInput } from '../src/components/user/user.dto'
import { userService } from '../src/components/user/user.service'

describe('testing user service 2', () => {
  const service = userService

  test('testing register function 2', async () => {
    const userData: UserRegisterInput = {
      email: 'test2@test.com',
      name: 'test seed',
      password: '1234mudar'
    }

    const user = await service.register(userData)
    expect(user).not.toBeNull()

    const dbUser = await service.find(user.id)
    expect(dbUser).not.toBeNull()
    for (const key in dbUser) {
      if (!(key in userData) || key === 'password') continue
      const castedKey = key as keyof UserRegisterInput
      expect(dbUser[key as keyof User]).toBe(userData[castedKey])
    }
  })
})
