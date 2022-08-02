import { useExample, useExample2 } from '../../src/runtime/composables/useExampleComposable'

export default defineNuxtRouteMiddleware(async () => {
  await useExample()
  await useExample2()
})
