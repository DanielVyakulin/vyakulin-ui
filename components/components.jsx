import React from 'react';
import NextLink from 'next/link';

const Text = ({ children, type = 'p', ...props }) => {
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
      className={variants[type]}
      {...props}
    >
      {children}
    </p>
  );
};

const Link = ({ children, text = 'p', color = 'wh', href = '#', ...props }) => {
  return (
    <NextLink 
      href={href} 
      className={`link-${color} t-${text}`}
      {...props}
    >
      {children}
    </NextLink>
  );
};

const Button = ({ children, text = 'btn', color = 'wh', ...props }) => {
  return (
    <div 
      className={`btn-${color} t-${text}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Text, Link, Button };