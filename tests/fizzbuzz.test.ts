import { describe, test, expect } from '@jest/globals';
import FizzBuzz from '../src/fizzbuzz';

describe("Test Palindrome", () => {
  test('test fizzbuzz case 1', () => {
    const fizzBuzz = new FizzBuzz();
    const arr = fizzBuzz.solve(15)

    expect(arr.includes("Fizz")).toBeTruthy();
    expect(arr.includes("Buzz")).toBeTruthy();
    expect(arr.includes("FizzBuzz")).toBeTruthy();
    expect(arr.includes(1)).toBeTruthy();
  });

  test('test fizzbuzz case 2', () => {
    const fizzBuzz = new FizzBuzz();
    const arr = fizzBuzz.solve(1)

    expect(arr.includes("Fizz")).toBeFalsy();
    expect(arr.includes("Buzz")).toBeFalsy();
    expect(arr.includes("FizzBuzz")).toBeFalsy();
    expect(arr.includes(1)).toBeTruthy();
  });

  test('test fizzbuzz case 3', () => {
    const fizzBuzz = new FizzBuzz();
    const arr = fizzBuzz.solve(3)

    expect(arr.includes("Fizz")).toBeTruthy();
    expect(arr.includes("Buzz")).toBeFalsy();
    expect(arr.includes("FizzBuzz")).toBeFalsy();
    expect(arr.includes(1)).toBeTruthy();
  });

  test('test fizzbuzz case 4', () => {
    const fizzBuzz = new FizzBuzz();
    const arr = fizzBuzz.solve(5)

    expect(arr.includes("Fizz")).toBeTruthy();
    expect(arr.includes("Buzz")).toBeTruthy();
    expect(arr.includes("FizzBuzz")).toBeFalsy();
    expect(arr.includes(1)).toBeTruthy();
  });
});
