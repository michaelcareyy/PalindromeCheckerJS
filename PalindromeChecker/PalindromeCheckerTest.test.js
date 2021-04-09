/**
 * @module PalindromeCheckerTest.test.js
 * Unit tests for Palindrome Checker
 */

const { palindromeChecker } = require('./PalindromeChecker')

describe('The palindromeChecker() function', () => {
  it('will check if a given string is a function, and return true if it is', () => {
    expect(palindromeChecker('eye')).toBe(true)
    expect(palindromeChecker('E Y E')).toBe(true)
    expect(palindromeChecker(' RAce Car')).toBe(true)
    expect(palindromeChecker('TACO!CaT')).toBe(true)
    expect(palindromeChecker('not a palindrome')).toBe(false)
    expect(palindromeChecker('d!o!g')).toBe(false)
  })
})
