/**
 * Unit tests for multiply()
 * Loads the compiled multiply.js so window.multiply is available (same as in the browser).
 */
declare global {
  interface Window {
    multiply: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches multiply to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./multiply.js");
});

describe("multiply", () => {
  describe("with positive integers", () => {
    it("multiplies two positive numbers", () => {
      expect(window.multiply(2, 3)).toBe(6);
    });

    it("multiplies larger positive numbers", () => {
      expect(window.multiply(12, 12)).toBe(144);
    });
  });

  describe("with zero", () => {
    it("returns 0 when the first operand is 0", () => {
      expect(window.multiply(0, 5)).toBe(0);
    });

    it("returns 0 when the second operand is 0", () => {
      expect(window.multiply(5, 0)).toBe(0);
    });

    it("returns 0 when both operands are 0", () => {
      expect(window.multiply(0, 0)).toBe(0);
    });
  });

  describe("with negative numbers", () => {
    it("returns a negative result when multiplying by a negative number", () => {
      expect(window.multiply(-2, 3)).toBe(-6);
    });

    it("returns a positive result when multiplying two negative numbers", () => {
      expect(window.multiply(-2, -3)).toBe(6);
    });
  });
});

export {};
