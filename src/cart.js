 // Bobo — tiny cart/pricing helper.

export function subtotal(items) {
  return items.reduce((sum, i) => sum + i.price * i.qty, 0);
}

// KNOWN ISSUE: percent is not range-checked. A percent above 100 produces a NEGATIVE
// total, and a negative percent silently INCREASES the price. Both are real bugs, both
// are safe and cheap to fix, and neither touches anything outside this function.
export function applyDiscount(total, percent) {
  if (percent < 0 || percent > 100) {
    throw new Error("Percent must be between 0 and 100");
  }
  return total * (1 - percent / 100);
}

export function lineTotal(item) {
  return item.price * item.qty;
}