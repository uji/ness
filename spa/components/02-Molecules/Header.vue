<template>
  <header
    class="sticky bg-white w-screen h-14 overflow-hidden flex flex-row items-center ring-2 ring-gray-300 ring-opacity-50"
  >
    <img src="~assets/svg/ness-logo.svg" class="h-8 mx-8 my-auto" />
    <Button
      v-if="!isSignedIn"
      text="Sign in"
      design="primary"
      class="ml-auto mr-8 my-auto"
      @click="signIn"
    />
    <Button
      v-if="isSignedIn"
      design="secondary"
      text="Sign out"
      class="ml-auto mr-4 my-auto"
      @click="signOut"
    />
    <img
      class="w-10 h-10 mr-8 cursor-pointer"
      src="~assets/images/uji.jpg"
      alt="user icon"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from '@vue/composition-api'
import {
  AuthenticatorKey,
  IAuthenticator,
} from '@/types/firebase/authenticator'
import { RouterHandlerKey } from '@/types/routerHandler'

export default defineComponent({
  setup(_, context) {
    const authenticator = inject<IAuthenticator>(AuthenticatorKey)
    if (!authenticator) {
      throw new Error('authenticator is not provide')
    }
    const routerHandler = inject(RouterHandlerKey)
    if (!routerHandler) {
      throw new Error('routerHandler is not provide')
    }

    const isSignedIn = ref(authenticator.isSignIn())

    const signIn = () => {
      routerHandler.push(context, '/signIn')
    }

    const signOut = () => {
      authenticator.signOut()
      routerHandler.push(context, '/signIn')
      isSignedIn.value = authenticator.isSignIn()
    }

    return {
      isSignedIn,
      signIn,
      signOut,
    }
  },
})
</script>
