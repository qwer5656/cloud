import { describe, it, expect } from 'vitest'
import { useCounter } from './useCounter.js'

describe('useCounter', () => {
  it('should increment correctly', () => {
    const { count, increment } = useCounter()
    increment()
    expect(count.value).toBe(1)
  })

  it('should reset to 0', () => {
    const { count, increment, reset } = useCounter()
    increment()
    reset()
    expect(count.value).toBe(0)
  })
})