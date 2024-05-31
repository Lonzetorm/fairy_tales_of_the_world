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

export async function getSubscriptionById(stripeId: string) {
  // return await prisma.subscription.findFirst({
  //   where: {
  //     stripeId: stripeId,
  //   }
  // })
}

export async function createOrUpdateSubscription(data: ISubscription) {
  // return await prisma.subscription.upsert({
  //   where: {
  //     stripeId: data.stripeId
  //   },
  //   create: {
  //     userId: data.userId,
  //     stripeId: data.stripeId,
  //     stripeStatus: data.stripeStatus,
  //     stripePriceId: data.stripePriceId,
  //     quantity: data.quantity,
  //     trialEndsAt: data.trialEndsAt,
  //     endsAt: data.endsAt,
  //     lastEventDate: data.lastEventDate,
  //     startDate: data.startDate
  //   },
  //   update: {
  //     stripeStatus: data.stripeStatus,
  //     stripePriceId: data.stripePriceId,
  //     quantity: data.quantity,
  //     trialEndsAt: data.trialEndsAt,
  //     endsAt: data.endsAt,
  //     lastEventDate: data.lastEventDate,
  //     startDate: data.startDate
  //   }
  // })
}
