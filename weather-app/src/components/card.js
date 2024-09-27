import React from 'react';

export const Card = ({ className, ...props }) => {
  return <div className={`bg-white shadow-md rounded-lg p-4 ${className}`} {...props} />;
};

export const CardHeader = ({ className, ...props }) => {
  return <div className={`mb-4 ${className}`} {...props} />;
};

export const CardContent = ({ className, ...props }) => {
  return <div className={className} {...props} />;
};

export const CardTitle = ({ className, ...props }) => {
  return <h2 className={`text-xl font-bold ${className}`} {...props} />;
};