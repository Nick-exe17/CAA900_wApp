import React from 'react';

export const Button = React.forwardRef(({ className, ...props }, ref) => {
  return <button className={`bg-blue-500 text-white px-4 py-2 rounded ${className}`} ref={ref} {...props} />;
});