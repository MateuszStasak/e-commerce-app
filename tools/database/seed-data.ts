import { User } from '../../libs/api/generated-db-types/src'

export const USERS_SEED_DATA: User[] = [
  {
    id: '1',
    email: 'admin@test.com',
    name: 'Administrator',
    password: '$2b$10$kRW9o24vrKjquuKVXLSeoOwOLjSfByooHwSp3BnIyjUBSVM2aJv8S'
  }
]