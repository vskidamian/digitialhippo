import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    anyApiRoute: publicProcedure.query(() => {
        return 'hello'
    })
})

//todo: 3:17

export type AppRouter = typeof appRouter;