import test from "node:test";
import { applyDiscount } from "../src/cart.js";

test("applyDiscount throws an error for negative percent", () => {
  const total = 100;
  const percent = -10;
  try {
    applyDiscount(total, percent);
  } catch (error) {
    if (error.message !== "Percent must be between 0 and 100") {
      throw error;
    }
  }
});

test("applyDiscount throws an error for percent greater than 100", () => {
  const total = 100;
  const percent = 110;
  try {
    applyDiscount(total, percent);
  } catch (error) {
    if (error.message !== "Percent must be between 0 and 100") {
      throw error;
    }
  }
});