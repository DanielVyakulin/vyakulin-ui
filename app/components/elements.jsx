import React from 'react';
import Link from 'next/link';

const Text = ({ children, text = 'p', className, ...props }) => {
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
      className={`${variants[text]} ${className}`}
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

const Button = ({ children, text = 'btn', color = 'wh', outline = false, className, ...props }) => {
  const buttonClass = outline ? `btn-outline-${color}` : `btn-${color}`;
  
  return (
    <div 
      className={`${buttonClass} t-${text} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const Inp = ({ color = 'wh', outline = false, label, value, onChange, className, text = 'sm', ...props }) => {
  const inputClass = outline ? `input-outline-${color}` : `input-${color}`;
  return (
    <div className={`input-container t-${text} ${className}`}>
      <input
        type="text"
        className={inputClass}
        value={value}
        onChange={onChange}
        placeholder=""
        {...props}
      />
      <label className="input-label">{label}</label>
    </div>
  );
}

export { Text, LinkV, Button, Inp }; 