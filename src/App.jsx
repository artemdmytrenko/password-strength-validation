import { useState } from "react";
import calculatePasswordStrength from "./utils/passwordStrength";

export default function App() {
  const [password, setPassword] = useState("");
  const [pwdStrength, setPwdStrength] = useState(initial);

  const handleChange = (e) => {
    setPassword(e.target.value);

    let strength = calculatePasswordStrength(e.target.value);
    strength === "empty" && setPwdStrength(initial);
    strength === "invalid" &&
      setPwdStrength({
        easy: { value: false, color: "red" },
        medium: { value: false, color: "red" },
        hard: { value: false, color: "red" },
      });

    strength === "easy" &&
      setPwdStrength({
        easy: { value: true, color: "red" },
        medium: { value: false, color: "slate" },
        hard: { value: false, color: "slate" },
      });

    strength === "medium" &&
      setPwdStrength({
        easy: { value: false, color: "amber" },
        medium: { value: true, color: "amber" },
        hard: { value: false, color: "slate" },
      });

    strength === "hard" &&
      setPwdStrength({
        easy: { value: false, color: "green" },
        medium: { value: false, color: "green" },
        hard: { value: true, color: "green" },
      });
  };

  return (
    <>
      <div className="bg-slate-50 w-96 mobile:w-auto mobile:mx-8 rounded-md p-9 shadow-xl shadow-slate-200 flex flex-col gap-6 ">
        <h1 className="font-semibold text-2xl font-dm-sans">New password</h1>
        <input
          type="text"
          autoComplete="new-password"
          className="bg-slate-900 placeholder:text-slate-300 text-slate-100 block w-[100%] text-lg py-2 px-3 rounded-md border focus:outline-none focus:scale-105 transition-transform focus:transition-transform font-dm-sans"
          placeholder="_"
          value={password}
          onChange={handleChange}
        />
        {/* Variable style properties - this is needed for Tailwind's JIT compiler to work properly */}
        {/* border-slate-300 border-red-300 border-green-300 border-amber-300 */}
        {/* bg-slate-100 bg-red-100 bg-green-100 bg-amber-100 */}
        {/* text-slate-500 text-red-500 text-green-500 text-amber-500 */}
        <ul className="flex flex-col gap-4">
          <li
            className={`border border-${pwdStrength.easy.color}-300 p-2 rounded-sm bg-${pwdStrength.easy.color}-100 text-${pwdStrength.easy.color}-500 text-sm font-dm-sans transition-colors`}
          >
            <span className="font-semibold text-base">Easy</span> | Password
            contains 8+ characters of the same type
          </li>
          <li
            className={`border border-${pwdStrength.medium.color}-300 p-2 rounded-sm bg-${pwdStrength.medium.color}-100 text-${pwdStrength.medium.color}-500 text-sm font-dm-sans transition-colors`}
          >
            <span className="font-semibold text-base">Medium</span> | Password
            contains 8+ characters of 2 different types
          </li>
          <li
            className={`border border-${pwdStrength.hard.color}-300 p-2 rounded-sm bg-${pwdStrength.hard.color}-100 text-${pwdStrength.hard.color}-500 text-sm font-dm-sans transition-colors`}
          >
            <span className="font-semibold text-base">Hard</span>
            {" | Password contains letters, symbols ($^+=><`~), and numbers"}
          </li>
        </ul>
        <button className="self-end px-3 py-1 bg-slate-950 text-slate-50 font-semibold rounded border hover:bg-slate-800 transition-colors">
          Submit
        </button>
      </div>
    </>
  );
}

const initial = {
  easy: {
    value: false,
    color: "slate",
  },
  medium: {
    value: false,
    color: "slate",
  },
  hard: {
    value: false,
    color: "slate",
  },
};
