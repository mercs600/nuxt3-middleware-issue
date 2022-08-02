import { useExampleState, useExampleState2 } from './composables/useExampleComposable'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const myPlugin = {
    test: true
  }

  nuxtApp.provide('myPlugin', myPlugin)

  addRouteMiddleware('global-test', async (to) => {
    // it works when you comment one of these composable execution
    await useExampleState()
    await useExampleState2()
  }, { global: true })
})
