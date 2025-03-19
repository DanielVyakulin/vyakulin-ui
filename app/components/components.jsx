import React from 'react';
import Link from 'next/link';

const Text = ({ children, type = 'p', className, ...props }) => {
  const variants = {
    h1: 't-h1',
    h2: 't-h2',
    h3: 't-h3',
    p: 't-p',
    sm: 't-sm',
    btn: 't-btn'
  };

  return (
    <p 
      className={`${variants[type]} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

const LinkV = ({ children, text = 'p', color = 'wh', href = '#', className, ...props }) => {
  return (
    <Link 
      href={href} 
      className={`link-${color} t-${text} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

const Button = ({ children, text = 'btn', color = 'wh', className, ...props }) => {
  return (
    <div 
      className={`btn-${color} t-${text} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Text, LinkV, Button }; 