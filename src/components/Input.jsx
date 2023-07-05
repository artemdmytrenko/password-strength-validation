const Input = (props) => {
  return (
    <input
      type="text"
      autoComplete="new-password"
      className="bg-slate-900 placeholder:text-slate-300 text-slate-100 block w-[100%] text-lg py-2 px-3 rounded-md border focus:scale-105 transition-transform"
      placeholder="_"
      {...props}
    />
  );
};

export default Input;
