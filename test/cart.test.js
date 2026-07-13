import test from 'node:test';
import assert from 'node:assert';
import { subtotal, applyDiscount, lineTotal } from '../src/cart.js';

test('subtotal adds up the lines', () => {
  assert.strictEqual(subtotal([{ price: 10, qty: 2 }, { price: 5, qty: 1 }]), 25);
});

test('lineTotal multiplies price by qty', () => {
  assert.strictEqual(lineTotal({ price: 3, qty: 4 }), 12);
});

test('applyDiscount takes a percentage off', () => {
  assert.strictEqual(applyDiscount(100, 10), 90);
});
