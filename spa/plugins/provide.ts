import { Context } from '@nuxt/types'
import { provide, InjectionKey } from '@vue/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'
import {
  AuthenticatorKey,
  Authenticator,
  DryAuthenticator,
} from '@/types/firebase/authenticator'
import {
  RouterHandlerKey,
  RouterHandler,
  DryRouterHandler,
} from '@/types/routerHandler'
import { apolloClient } from '@/types/apolloClient'
import { useThreadsQuery, useCreateThreadMutation } from '@/generated/graphql'

export type GetThreads = typeof useThreadsQuery
export type CreateThread = typeof useCreateThreadMutation

export const getThreadsKey: InjectionKey<GetThreads> = Symbol('getThreads')
export const createThreadKey: InjectionKey<CreateThread> = Symbol(
  'createThread'
)

export default function ({ app }: Context) {
  app.setup = () => {
    const dry = process.env.dryMode === '1'

    if (dry) {
      provide(AuthenticatorKey, new DryAuthenticator())
      provide(DefaultApolloClient, apolloClient)
      provide(getThreadsKey, useThreadsQuery)
      provide(createThreadKey, useCreateThreadMutation)
      provide(RouterHandlerKey, new DryRouterHandler())
      return
    }

    provide(AuthenticatorKey, new Authenticator())
    provide(DefaultApolloClient, apolloClient)
    provide(getThreadsKey, useThreadsQuery)
    provide(createThreadKey, useCreateThreadMutation)
    provide(RouterHandlerKey, new RouterHandler())
  }
}
