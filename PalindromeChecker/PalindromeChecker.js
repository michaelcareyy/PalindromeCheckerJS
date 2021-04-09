/** This is a function that checkers whether a given string is a palindrome
 * @module PalindromeChecker.js
 */

function palindromeChecker (str) {
  return (
    str.replace(/[\W_]/g, '').toLowerCase() ===
    str
      .replace(/[\W_]/g, '')
      .toLowerCase()
      .split('')
      .reverse()
      .join('')
  )
}
module.exports = { palindromeChecker }
