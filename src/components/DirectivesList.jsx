import Directive from "./Directive";

/* Variable style properties - this is needed for Tailwind's JIT compiler to work properly */
/* border-slate-300 border-red-300 border-green-300 border-amber-300 */
/* bg-slate-100 bg-red-100 bg-green-100 bg-amber-100 */
/* text-slate-500 text-red-500 text-green-500 text-amber-500 */

const DirectivesList = ({ colorDirectives, rules }) => {
  return (
    <ul className="flex flex-col gap-4">
      {colorDirectives.map((color, i) => {
        return (
          <Directive
            title={rules[i].name}
            description={rules[i].rule}
            className={`border-${color}-300 bg-${color}-100 text-${color}-500`}
          />
        );
      })}
    </ul>
  );
};

export default DirectivesList;
