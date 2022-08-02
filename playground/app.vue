<template>
  <div>
    Nuxt module playground!
    {{ state }}
    {{ state2 }}
  </div>
</template>

<script setup>
import { useExampleState, useExampleState2 } from '../src/runtime/composables/useExampleComposable'
const state = useExampleState()
const state2 = useExampleState2()
</script>
