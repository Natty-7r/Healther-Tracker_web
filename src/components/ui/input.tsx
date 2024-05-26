import * as React from "react";
import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { VariantProps, cva } from "class-variance-authority";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  icon?: ReactNode;
  showPasswordOuter?: string;
  passwordVisble?: boolean; //  to pass boolean for passoword visiblity
  onClickIcon?: Function; // to run function when eye icon is clicked
  hasNoEyeIcon?: boolean; //
}

const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-none disabled:cursor-not-allowed ",
  {
    variants: {
      variant: {
        default: "disabled:opacity-50",
        visible: "disabled:opacity-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      icon,
      passwordVisble,
      onClickIcon,
      hasNoEyeIcon = false,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="relative w-full">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={
            type === "password"
              ? showPassword || passwordVisble
                ? "text"
                : "password"
              : type
          }
          className={cn(inputVariants({ className }), icon && "pl-11 ")}
          ref={ref}
          {...props}
        />
        {type === "password" && !hasNoEyeIcon && (
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
            {showPassword ? (
              <EyeOff
                onClick={() => {
                  if (onClickIcon) onClickIcon();
                  togglePasswordVisibility();
                }}
                className="h-5 w-5 lg:w-4 lg:h-4"
              />
            ) : (
              <Eye
                onClick={() => {
                  if (onClickIcon) onClickIcon();
                  togglePasswordVisibility();
                }}
                className=" h-5 w-5 lg:w-4 lg:h-4"
              />
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
