/**
 * Returns the difference between two numbers (a - b).
 */
function subtract(a: number, b: number): number {
  return a - b;
}

// Expose to window so the HTML script can call it
(window as unknown as { subtract: typeof subtract }).subtract = subtract;
