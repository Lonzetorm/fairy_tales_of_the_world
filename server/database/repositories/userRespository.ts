import { IUser } from '~/types/IUser';
import { ISubscription } from "~/types/ISubscription";
import { Users } from "~/server/models/User.model";

export async function getUserByEmail(email: string) {
    let filter = { email: email }

    return Users.find(filter)
}

export async function createUser(name: string, email: string, password: string) {
    return await Users.create({ name, email, password })
        .then((data) => {
            return data
        }).catch((error) => {
            throw error
        })
}

export async function getUserById(id: number) {
  // return await prisma.user.findUnique({
  //   where: {
  //     id: id,
  //   },
  //   select: {
  //     id: true,
  //     username: true,
  //     email: true,
  //     stripeCustomerId: true,
  //   },
  // })
}

