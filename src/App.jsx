import { useState } from "react";
import { calculatePasswordStrength } from "./utils";
import { pwdStrength as strength, rules } from "./constants";

import DirectivesList from "./components/DirectivesList";
import Button from "./components/Button";
import Input from "./components/Input";

export default function App() {
  const [password, setPassword] = useState("");
  const [pwdStrength, setPwdStrength] = useState(strength.empty);

  const disabled =
    pwdStrength === strength.empty || pwdStrength === strength.invalid;
  strength;

  const handleChange = (e) => {
    setPassword(e.target.value);
    setPwdStrength(calculatePasswordStrength(e.target.value));
  };

  return (
    <div className="bg-gradient-to-tr from-slate-50 to-blue-50 w-96 mobile:w-auto mobile:mx-12 rounded-md p-9 shadow-xl shadow-slate-200 flex flex-col gap-6 font-dm-sans">
      <h1 className="font-semibold text-3xl font-dm-sans">New password</h1>
      <Input value={password} onChange={handleChange} />
      <DirectivesList colorDirectives={pwdStrength} rules={rules} />
      <Button content="Submit" disabled={disabled} />
    </div>
  );
}
