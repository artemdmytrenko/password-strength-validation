export default function calculatePasswordStrength(pwd) {
  const hasLetters = /[a-zA-Z]/.test(pwd);
  const hasDigits = /\d/.test(pwd);
  const hasSymbols = /[-~`! @#$%^&*()_+=:;"'<,>.?]+/.test(pwd);

  if (String(pwd).length === 0) {
    return "empty";
  } else if (String(pwd).length < 8) {
    return "invalid"; // Password is less than 8 characters
  } else if (
    (hasLetters && hasSymbols && !hasDigits) ||
    (hasLetters && hasDigits && !hasSymbols) ||
    (hasDigits && hasSymbols && !hasLetters)
  ) {
    return "medium"; // Password is a combination of letters-symbols, letters-digits, or digits-symbols
  } else if (hasLetters && hasDigits && hasSymbols) {
    return "hard"; // Password has letters, symbols, and numbers
  } else {
    return "easy"; // Password doesn't meet any specific criteria
  }
}
