import { useState } from "react";
import { isValid, isEasy, isMedium, isHard } from "./utils/passwordStrength";

export default function App() {
  const [password, setPassword] = useState("");
  const [pwdStrength, setPwdStrength] = useState({
    easy: {
      value: false,
      color: "slate",
    },
    medium: {
      value: false,
      color: "black",
    },
    hard: {
      value: false,
      color: "slate",
    },
  });

  const handleChange = (e) => {
    setPassword(e.target.value);

    !isValid(e.target.value) &&
      setPwdStrength({
        easy: { value: false, color: "red" },
        medium: { value: false, color: "red" },
        hard: { value: false, color: "red" },
      });

    isEasy(e.target.value) &&
      setPwdStrength({
        easy: { value: true, color: "red" },
        medium: { value: false, color: "slate" },
        hard: { value: false, color: "slate" },
      });

    isMedium(e.target.value) &&
      setPwdStrength({
        easy: { value: false, color: "amber" },
        medium: { value: true, color: "amber" },
        hard: { value: false, color: "slate" },
      });

    isHard(e.target.value) &&
      setPwdStrength({
        easy: { value: false, color: "green" },
        medium: { value: false, color: "green" },
        hard: { value: true, color: "green" },
      });
  };

  return (
    <>
      <div className="bg-slate-50 w-96 rounded-md p-9 shadow-xl shadow-slate-200 flex flex-col gap-6 ">
        <h1 className="font-semibold text-2xl font-dm-sans">New password</h1>
        <input
          type="text"
          autoComplete="new-password"
          className="bg-slate-900 placeholder:text-slate-300 text-slate-100 block w-[100%] text-lg py-2 px-3 rounded-md border focus:outline-none focus:scale-105 transition-transform focus:transition-transform font-dm-sans"
          placeholder="_"
          value={password}
          onChange={handleChange}
        />
        <ul className="flex flex-col gap-4">
          <li
            className={`border border-${pwdStrength.easy.color}-300 p-2 rounded-sm bg-${pwdStrength.easy.color}-200 text-${pwdStrength.easy.color}-500 font-dm-sans transition-colors`}
          >
            <span className="font-semibold">Easy</span> | Password contains 8+
            characters of the same type
          </li>
          <li
            className={`border border-${pwdStrength.medium.color}-300 p-2 rounded-sm bg-${pwdStrength.medium.color}-200 text-${pwdStrength.medium.color}-500 font-dm-sans transition-colors`}
          >
            <span className="font-semibold">Medium</span> | Password contains 8+
            characters of 2 different types
          </li>
          <li
            className={`border border-${pwdStrength.hard.color}-300 p-2 rounded-sm bg-${pwdStrength.hard.color}-200 text-${pwdStrength.hard.color}-500 font-dm-sans transition-colors`}
          >
            <span className="font-semibold">Hard</span> | Password contains
            letters, symbols, and numbers
          </li>
        </ul>
      </div>
    </>
  );
}
