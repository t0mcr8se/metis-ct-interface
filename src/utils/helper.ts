export function customStyle(index: number) {
  return { '--item-nb': index } as React.CSSProperties;
}
  
export function getWheelVars(length: number, selectedIndex: number | undefined, spinningDuration: number, numSpins: number) {
  return {
    '--nb-item': length,
    '--selected-item': selectedIndex ?? 0,
    '--spinning-duration': `${spinningDuration}s`,
    '--nb-turn': numSpins,
  } as React.CSSProperties;
}
  
  