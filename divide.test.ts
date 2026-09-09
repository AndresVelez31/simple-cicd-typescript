/**
 * Unit tests for divide()
 * Loads the compiled divide.js so window.divide is available (same as in the browser).
 */
declare global {
  interface Window {
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches divide to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./divide.js");
});

describe("divide", () => {
  describe("with positive integers", () => {
    it("divides two positive numbers", () => {
      expect(window.divide(6, 3)).toBe(2);
    });

    it("returns a decimal result when the division is not exact", () => {
      expect(window.divide(5, 2)).toBe(2.5);
    });
  });

  describe("with zero", () => {
    it("returns 0 when the numerator is 0", () => {
      expect(window.divide(0, 5)).toBe(0);
    });

    it("returns the same number when dividing by 1", () => {
      expect(window.divide(7, 1)).toBe(7);
    });
  });

  describe("with negative numbers", () => {
    it("returns a negative result when dividing by a negative number", () => {
      expect(window.divide(-6, 3)).toBe(-2);
    });

    it("returns a negative result when the numerator is negative", () => {
      expect(window.divide(6, -3)).toBe(-2);
    });

    it("returns a positive result when dividing two negative numbers", () => {
      expect(window.divide(-6, -3)).toBe(2);
    });
  });

  describe("division by zero (edge case)", () => {
    it("throws an error when dividing a positive number by zero", () => {
      expect(() => window.divide(5, 0)).toThrow("Division by zero is not allowed");
    });

    it("throws an error when dividing a negative number by zero", () => {
      expect(() => window.divide(-5, 0)).toThrow("Division by zero is not allowed");
    });

    it("throws an error when dividing zero by zero", () => {
      expect(() => window.divide(0, 0)).toThrow("Division by zero is not allowed");
    });
  });
});

export {};
