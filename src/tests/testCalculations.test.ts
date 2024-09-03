import { expect, test, describe } from 'vitest'
import { calculateWeight } from '../calculations/statCalculations'

describe('Calculate weight', () => {
  test("values at 7 and below return 61.2", () => {
    // values at 7 and bellow return 61.2
    expect(calculateWeight(1)).toBe(61.2);
    expect(calculateWeight(7)).toBe(61.2);
  });

  test("Values from 8 on add 3 for each level", () => {
    // from 8 on, add +3 for each level
    expect(calculateWeight(8)).toBe(64.2);
    expect(calculateWeight(10)).toBe(70.2);
    expect(calculateWeight(30)).toBe(130.2)
  })

})