import { cn } from "../utils";

const Directive = ({ title, description, className }) => {
  const styles = cn(
    "border p-2 rounded-sm text-sm transition-colors",
    className
  );

  return (
    <li className={styles}>
      <span className="font-semibold text-base">{title}</span> | {description}
    </li>
  );
};

export default Directive;
