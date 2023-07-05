const Button = ({ disabled, content }) => {
  return (
    <button
      disabled={disabled}
      className="self-end px-3 py-1 bg-slate-950 text-slate-50 font-semibold rounded border hover:bg-slate-800 transition-colors disabled:bg-slate-300 disabled:hover:cursor-not-allowed"
    >
      {content}
    </button>
  );
};

export default Button;
