// src/composables/useCounter.js
import { ref } from "vue";

export function useTest() {
  const pow = (value) => value * value;
  return { pow };
}
