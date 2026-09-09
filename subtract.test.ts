/**
 * Unit tests for subtract()
 * Loads the compiled subtract.js so window.subtract is available (same as in the browser).
 */
declare global {
  interface Window {
    subtract: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches subtract to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./subtract.js");
});

describe("subtract", () => {
  describe("with positive integers", () => {
    it("subtracts two positive numbers", () => {
      expect(window.subtract(5, 3)).toBe(2);
    });

    it("returns a negative result when b is greater than a", () => {
      expect(window.subtract(3, 5)).toBe(-2);
    });
  });

  describe("with zero", () => {
    it("returns 0 when both are equal", () => {
      expect(window.subtract(4, 4)).toBe(0);
    });

    it("returns the same number when subtracting 0", () => {
      expect(window.subtract(7, 0)).toBe(7);
    });

    it("returns the negated number when subtracting from 0", () => {
      expect(window.subtract(0, 7)).toBe(-7);
    });
  });

  describe("with negative numbers", () => {
    it("subtracts a negative number (adds its magnitude)", () => {
      expect(window.subtract(5, -3)).toBe(8);
    });

    it("subtracts two negative numbers", () => {
      expect(window.subtract(-5, -3)).toBe(-2);
    });
  });
});

export {};
