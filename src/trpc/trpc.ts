import { useUser } from '@clerk/nextjs'
import { TRPCError, initTRPC } from '@trpc/server'

const t = initTRPC.create()
const middleware = t.middleware

const isAuth = middleware(async (opts) => {

    const { isLoaded, isSignedIn, user } = useUser()

    if (!isLoaded || !isLoaded) {
        throw new TRPCError({ code: 'UNAUTHORIZED' })
    }

    return opts.next({
        ctx: {
            userId: user?.id,
            user,
        },
    })
})

export const router = t.router
export const publicProcedure = t.procedure
export const privateProcedure = t.procedure.use(isAuth)
