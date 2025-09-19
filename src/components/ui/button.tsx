import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

// Define the button styles with variants using `cva`
const buttonClasses = cva('h-9 rounded-full px-4', {
  variants: {
    variant: {
      primary: 'borer-white text-white bg-transparent border-primary hover:bg-white hover:text-black',
      secondary: 'text-white font-bold bg-blue-300 transition-all duration-300 ease-in hover:text-white hover-gradient-move',
    },
    size: {
      sm: 'h-9',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

// Button props interface with variant support
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
}

// Button component
const Button: React.FC<ButtonProps> = ({ variant, size, className, children, ...props }) => {
  return (
    <button className={clsx(buttonClasses({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
