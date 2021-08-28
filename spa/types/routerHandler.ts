import { InjectionKey, SetupContext } from '@vue/composition-api'

export interface IRouterHandler {
  push: (ctx: SetupContext, path: string) => void
}

export const RouterHandlerKey: InjectionKey<IRouterHandler> = Symbol(
  'IRouterHandler'
)

export class RouterHandler implements IRouterHandler {
  push(ctx: SetupContext, path: string) {
    ctx.root.$router.push(path)
  }
}

export class DryRouterHandler implements IRouterHandler {
  push(_ctx: SetupContext, path: string) {
    console.log('move this path: ', path)
  }
}
