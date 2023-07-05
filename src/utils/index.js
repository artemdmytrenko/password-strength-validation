import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { pwdStrength } from "../constants";

const hasLetters = (pwd) => {
  return /[a-zA-Z]/.test(pwd);
};

const hasDigits = (pwd) => {
  return /\d/.test(pwd);
};

const hasSymbols = (pwd) => {
  return /[-~`! @#$%^&*()_+=:;"'<,>.?]+/.test(pwd);
};

const isEmpty = (pwd) => {
  return String(pwd).length === 0;
};

const isInvalid = (pwd) => {
  return String(pwd).length < 8;
};

const isMedium = (pwd) => {
  return (
    (hasLetters(pwd) && hasSymbols(pwd) && !hasDigits(pwd)) ||
    (hasLetters(pwd) && hasDigits(pwd) && !hasSymbols(pwd)) ||
    (hasDigits(pwd) && hasSymbols(pwd) && !hasLetters(pwd))
  );
};

const isHard = (pwd) => {
  return hasLetters(pwd) && hasDigits(pwd) && hasSymbols(pwd);
};

export function calculatePasswordStrength(pwd) {
  if (isEmpty(pwd)) {
    return pwdStrength.empty;
  } else if (isInvalid(pwd)) {
    return pwdStrength.invalid;
  } else if (isMedium(pwd)) {
    return pwdStrength.medium;
  } else if (isHard(pwd)) {
    return pwdStrength.hard;
  } else {
    return pwdStrength.easy;
  }
}

// merges className attributes
export function cn(...values) {
  return twMerge(clsx(values));
}
