/**
 * Returns the quotient of two numbers (a / b).
 *
 * Behavior on division by zero: throws an Error instead of returning
 * null/NaN/Infinity, so invalid input fails fast and loudly rather than
 * silently propagating a bad value through the rest of the program.
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

// Expose to window so the HTML script can call it
(window as unknown as { divide: typeof divide }).divide = divide;
