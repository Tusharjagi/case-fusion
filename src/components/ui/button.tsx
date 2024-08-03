import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-purple-600 text-white shadow hover:bg-purple-700",
        destructive: "bg-red-600 text-white shadow-sm hover:bg-red-700",
        outline: "border border-purple-600 bg-transparent text-purple-600 shadow-sm hover:bg-purple-100",
        secondary: "bg-purple-500 text-white shadow-sm hover:bg-purple-600",
        ghost: "hover:bg-purple-100 hover:text-purple-600",
        link: "text-purple-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, isLoading, loadingText, variant, children, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {isLoading && loadingText ? loadingText : children}
        {isLoading ? (
          <span className="ml-1.5 flex items-center gap-1">
            <span className="animate-flashing w-1 h-1 bg-white rounded-full inline-block" />
            <span className="animate-flashing delay-100 w-1 h-1 bg-white rounded-full inline-block" />
            <span className="animate-flashing delay-200 w-1 h-1 bg-white rounded-full inline-block" />
          </span>
        ) : null}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
