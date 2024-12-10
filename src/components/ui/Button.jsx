import React from 'react';
import clsx from 'clsx';

export function PrimaryButton({ children, className, type = 'button', onClick, ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center px-6 py-3',
        'rounded-md font-semibold',
        'bg-primary-200 text-dark-900',
        'hover:bg-primary-300 transition-colors duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}