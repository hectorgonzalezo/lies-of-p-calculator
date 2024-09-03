export function calculateHP(value: number) {
  const base = 262;
  if (value < 8){
    return base
  }

  return (value * 10) + base
  // 9 => + 21
  // 10-12 => + 20
  // 13-14 => +18
  // 15 => +17
  // 16-17 => +16
  // 18-19 => +15
  // 20-21 => +14
  // 22-23 => +13
  // 24-26 => +12
  // 27-29 => +11
  // 30-31 => +10
  // 32 => +9
  // 33 => +10
  // 34-35 => +9
  // 36-40 => +8
  // 41 => +7
  // 42 => +8
  // 43 => +7
  // 44 => +6
  // 45-46 => +7
  // 47-51 => +6
  // 52 => +5
  // 53 => +6
  // 54-60 => +5
  // 61 => +4
  // 62 => +5
  // 63-
}

export function calculateWeight(value: number) {
  const baseLevel = 7;
  const baseValue = 61.2;
  if (value <= baseLevel){
    return baseValue
  }

  return ((value - baseLevel) * 3) + baseValue
}