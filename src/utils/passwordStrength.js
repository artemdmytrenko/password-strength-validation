const invalid = /^.{1,7}$/gu;
const easy = /\p{S}{8,}|\p{L}{8,}|\p{N}{8,}/gu;
const medium = [
  /^(?=.*\p{L})(?=.*\p{N}).{8,}$/gu,
  /^(?=.*\p{S})(?=.*\p{N}).{8,}$/gu,
  /^(?=.*\p{S})(?=.*\p{L}).{8,}$/gu,
];
const hard = /^(?=.*\p{L})(?=.*\p{N})(?=.*\p{S}).{8,}/gu;

export const isValid = (pwd) => {
  return !invalid.test(pwd);
};

export const isEasy = (pwd) => {
  return isValid && easy.test(pwd);
};

export const isMedium = (pwd) => {
  return isValid && medium.some((pattern) => pattern.test(pwd));
};

export const isHard = (pwd) => {
  return isValid && hard.test(pwd);
};
