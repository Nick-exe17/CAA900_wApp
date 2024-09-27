import React from 'react';

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return <input className={`border rounded px-2 py-1 ${className}`} ref={ref} {...props} />;
});