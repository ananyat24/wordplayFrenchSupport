import Evaluator from '@runtime/Evaluator';
import { test, expect } from 'vitest';

test.each([
    ['•Test(n•#)\nb: Test(1).n: 2\nb.n', '2'],
    ['•Test(n•#)\nb: (Test(1).n: 2).n: 3\nb.n', '3'],
])('Expect "%s" to be "%s"', (source, value) => {
    expect(Evaluator.evaluateCode(source)?.toWordplay(['en'])).toBe(value);
});