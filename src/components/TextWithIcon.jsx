import Image from "next/image";
import { cn } from "@/lib/utils";

const TextWithIcon = ({
  leftIcon,
  text,
  rightIcon,
  fontSize,
  color,
  fontFamily,
  iconSize
}) => {
  return (
    <div className="flex items-center gap-x-2">
      {leftIcon ? <Image src={leftIcon} alt="" className="w-auto" width={iconSize ? iconSize : 18} height={iconSize ? iconSize : 18} /> : ""}
      {text ? (
        <h1
          className={cn(
            "font-rob300 text-sm text-secondary",
            color,
            fontFamily,
            fontSize
          )}
        >
          {text}
        </h1>
      ) : (
        ""
      )}
      {rightIcon ? <Image src={rightIcon} alt="" width={iconSize ? iconSize : 18} height={iconSize ? iconSize : 18} /> : ""}
    </div>
  );
};

export default TextWithIcon;
