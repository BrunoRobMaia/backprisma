import { User } from '@prisma/client'

export interface IUserRepository {
  findById(id: number): Promise<User | null>;
  save(user: Omit<User, 'id'>): Promise<User>;
  update(id: number, user: Partial<User>): Promise<void>;
  delete(id: number): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
}