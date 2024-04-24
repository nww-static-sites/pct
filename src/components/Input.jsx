import { cn } from "@/lib/utils";

const Input = ({
  type,
  placeholder,
  id,
  className,
  boxClassName,
  ...props
}) => {
  return (
    <div className={cn("w-full", boxClassName && boxClassName)}>
      <div className="flex flex-col space-y-1 text-left">
        {props.label && (
          <label
            className={props.labelColor ? props.labelColor : "text-secondary"}
            forHtml={props.id}
          >
            {props.label}
            {props.required && <span className="text-red">{" *"}</span>}
          </label>
        )}
        <input
          className={cn(
            "ring-1 rounded-[4px] outline-none bg-white200 text-sm ring-white py-2 px-3 md:p-3 placeholder:text-secondary text-white",
            className && className
          )}
          type={type}
          placeholder={placeholder}
          id={id}
          {...props}
        />
        {props.errorMessage && (
          <small
            className={cn(
              "text-secondary w-full",
              props.errorColor && props.errorColor
            )}
          >
            {props.errorMessage}
          </small>
        )}
      </div>
    </div>
  );
};

export default Input;
