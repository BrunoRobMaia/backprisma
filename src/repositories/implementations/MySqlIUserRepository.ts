import { User } from "@prisma/client";
import { prismaClient } from "../../database";
import { IUserRepository } from "../IUserRepository";

export class MySqlIUserRepository implements IUserRepository {
  async findById(id: number): Promise<User | null> {
    const userExist = await prismaClient.user.findFirst({
      where: { id }
    })
    return userExist
  }
  async save(user: Omit<User, 'id'>): Promise<User> {
    console.log("Dados recebidos para criar o usuário:", user); 
    const newUser = await prismaClient.user.create({
      data: user,
    }).catch((err) => {
      console.log(err)
      throw new Error(`Erro ao criar usuário. Erro ${err}`)
    })
    console.log("Novo usuário criado", newUser.name);
    return newUser
  }
  async update(id: number, user: Partial<User>): Promise<void> {
      const updateUser = await prismaClient.user
        .update({
          where: { id },
          data: user,
        })
        .catch((err) => {console.log(err)
          throw new Error(`Erro ao atualizar usuário. Erro ${err}`)
        });
        console.log('Usuário atualizado', updateUser.name)
    }
    async delete(id: number): Promise<void> {
      const updateUser = await prismaClient.user
        .update({
          where: { id },
          data: {}
        }
        )
        .catch((err) => {
          console.log("Error: ", err);
          throw new Error(`Erro ao deletar usuário. Erro: ${err}`);
        });
      console.log("Usuário deletado", updateUser.name);
    }
}