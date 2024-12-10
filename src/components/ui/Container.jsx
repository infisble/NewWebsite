import React from 'react';
import clsx from 'clsx';

export function Container({ children, className }) {
  return (
    <div className={clsx('container mx-auto px-4', className)}>
      {children}
    </div>
  );
}