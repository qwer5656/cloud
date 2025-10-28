import { describe, it, expect } from "vitest";
import { useTest } from "../useTest.js";

describe("useCounter", () => {
  it("should increment correctly", () => {
    const { pow } = useTest();
    expect(pow(4)).toBe(16);
  });
  it("should increment correctly", () => {
    const { pow } = useTest();
    expect(pow(-1)).toBe(1);
  });
});
