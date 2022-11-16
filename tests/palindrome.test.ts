import { describe, test, expect } from '@jest/globals';
import Palindrome from '../src/palindrome';

describe("Test Palindrome", () => {
  test('test palindrome success', () => {
    const palindrome = new Palindrome();
    const isPalindrome = palindrome.solve("Race Car");

    expect(isPalindrome).toBeTruthy();
  });

  test('test palindrome Failed', () => {
    const palindrome = new Palindrome();
    const isPalindrome = palindrome.solve("Race Car Failed");

    expect(isPalindrome).toBeFalsy();
  });
});
