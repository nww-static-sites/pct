import { cn } from "@/lib/utils";

export const AnimateButton = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "px-8 py-2 md:px-12 md:py-3 rounded-md text-[16px] transition-all duration-500 relative z-[1] overflow-hidden",
        "before:absolute before:rounded-full before:w-[5px] before:h-[5px] before:-bottom-[20px] before:left-[50%] before:transition-all before:duration-500 before:-z-[1] before:-translate-x-[50%]",
        "hover:before:scale-[50]",
        className,
        )}
        {...props}
        >
      {children}
    </button>
  );
};
// "disabled:bg-gret disabled:hover:before:scale-[0] disabled:text-black-content "

export const SlideColorButton = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "w-full h-auto px-3 py-3 md:px-5 md:py-5 text-sm transition-all duration-300 relative z-[1] overflow-hidden",
        "before:absolute before:w-full before:h-full before:-bottom-[99%] before:left-0 before:transition-all before:duration-300 before:-z-[1]",
        "hover:before:bottom-0",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const Button = ({ children, className, selected, ...props }) => {
  return (
    <button
      className={cn(
        className,
        "text-[16px] transition-all duration-500",
        selected && selected
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// export const NavigationButton = ({ children, className, handle, svgRight, svgLeft, iconRight , iconLeft, text }) => {
//   return (
//     <button
//       type="button"
//       className="flex w-full items-center justify-between text-base font-rob400 leading-6 text-white ring-white"
//       onClick={handle}
//     >
//       {svgLeft ? svg : ""}
//       {iconLeft ? <Image src={iconLeft} alt=""/> : ""}

//       Services
//       {}
//     </button>
//   );
// };
