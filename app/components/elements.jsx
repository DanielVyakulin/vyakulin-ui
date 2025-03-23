'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { FaCopy } from 'react-icons/fa6';

const Text = ({ children, text = 'p', className, ...props }) => {
  return (
    <div 
      className={`t-${text} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const LinkV = ({ children, text = 'p', color = 'wh', href = '#', background = false, className, ...props }) => {
  return (
    <Link 
      href={href} 
      className={clsx({
        [`t-${text} gap-1 ${className}`]: true,
        [`link-bg-${color}`]: background,
        [`link-${color}`]: !background
      })}
      {...props}
    >
      {children}
    </Link>
  );
};

const Button = ({ children, text = 'btn', color = 'wh', outline = false, className, ...props }) => {
  return (
    <div 
      className={clsx({
        [`t-${text} pv-1 ph-2 gap-1 ${className}`]: true,
        [`btn-${color}`]: !outline,
        [`btn-outline-${color}`]: outline
      })}
      {...props}
    >
      {children}
    </div>
  );
};

const Input = ({ color = 'wh', outline = false, label, className, text = 'sm', ...props }) => {
  return (
    <div className={`input-container t-${text} ${className}`}>
      <input
        type="text"
        className={clsx({
          [`input-${color} gap-1`]: !outline,
          [`input-outline-${color} gap-1`]: outline
        })}
        placeholder=""
        {...props}
      />
      <label className="input-label ph-1">{label}</label>
    </div>
  );
}

const BreadCrumb = ({ className, text = 'sm', ...props }) => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  return (
    <div 
      className={`breadcrumb ch gap-2 t-${text} ${className}`}
      {...props}
    >
      <LinkV href="/" text={text}>home</LinkV>
      {paths.map((path, index) => (
        <React.Fragment key={path}>
          <span className="breadcrumb-separator">&gt;</span>
          {index === paths.length - 1 ? (
            <LinkV text={text} color="ac">{path.charAt(0) + path.slice(1)}</LinkV>
          ) : (
            <LinkV 
              href={`/${paths.slice(0, index + 1).join('/')}`}
              text={text}
            >
              {path.charAt(0) + path.slice(1)}
            </LinkV>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

const Snip = ({ children, className, name, icon, ...props }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = typeof children === 'string' 
      ? children 
      : Array.isArray(children) 
        ? children.map(child => typeof child === 'string' ? child : '').join('')
        : '';
    
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <pre className={`snip ${className}`} {...props}>
      <div className="snip-name ch ph-2 pv-2">
        <Text text="h3" className="snip-name-language ch gap-1">{icon}{name}</Text>
        <p 
          className="link-wh-ac t-btn snip-name-copy ch gap-1"
          onClick={handleCopy}
        >
          <FaCopy />{copied ? 'Copied' : 'Copy'}
        </p>
      </div>
      <code className="snip-code t-p ph-2 pv-1">
        {children}
      </code>
    </pre>
  );
}

export { Text, LinkV, Button, Input, BreadCrumb, Snip }; 