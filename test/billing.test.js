import test from 'node:test';
import assert from 'node:assert';
import { calculateInvoice, applyDiscount } from '../src/billing.js';

test('calculates subtotal, tax and total', () => {
  const r = calculateInvoice([{ price: 10, qty: 2 }, { price: 5, qty: 1 }], 0.1);
  assert.strictEqual(r.subtotal, 25);
  assert.strictEqual(r.tax, 2.5);
  assert.strictEqual(r.total, 27.5);
});

test('applies a discount', () => {
  assert.strictEqual(applyDiscount(100, 10), 90);
});

test('rejects bad input', () => {
  assert.throws(() => calculateInvoice(null));
});