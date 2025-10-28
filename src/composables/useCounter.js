// src/composables/useCounter.js
import { ref } from 'vue'

export function useCounter() {
  const count = ref(0)
  const increment = () => count.value++
  const reset = () => (count.value = 0)
  return { count, increment, reset }
}
