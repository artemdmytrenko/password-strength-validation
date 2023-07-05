export const pwdStrength = {
  empty: ["slate", "slate", "slate"],
  invalid: ["red", "red", "red"],
  easy: ["red", "slate", "slate"],
  medium: ["amber", "amber", "slate"],
  hard: ["green", "green", "green"],
};

export const rules = [
  { name: "Easy", rule: "Password contains 8+ characters of the same type" },
  {
    name: "Medium",
    rule: "Password contains 8+ characters of 2 different types",
  },
  {
    name: "Hard",
    rule: "Password contains letters, symbols ($^+=><`~), and numbers",
  },
];
