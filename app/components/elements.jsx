'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { FaCopy } from 'react-icons/fa6';

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
      className={clsx(variants[text], className)}
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
      className={clsx(`link-${color}`, `gap-1`, `t-${text}`, className)}
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
      className={clsx(buttonClass, `gap-1 ph-2 ph-1`, `t-${text}`, className)}
      {...props}
    >
      {children}
    </div>
  );
};

const Inp = ({ color = 'wh', outline = false, label, value, onChange, className, text = 'sm', ...props }) => {
  const inputClass = outline ? `input-outline-${color}` : `input-${color}`;
  return (
    <div className={clsx('input-container', `t-${text}`, className)}>
      <input
        type="text"
        className={clsx(inputClass, `gap-1`)}
        value={value}
        onChange={onChange}
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
    <div className={clsx('breadcrumb ch gap-2', `t-${text}`, className)} {...props}>
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
    <pre className={clsx('snip', className)} {...props}>
      <div className="snip-name ch ph-2 pv-2">
        <Text text="h3" className="snip-name-language ch gap-1">{icon}{name}</Text>
        <p 
          className="link-wh-ac t-btn snip-name-copy" 
          onClick={handleCopy}
        >
          <FaCopy />{copied ? 'copied' : 'copy'}
        </p>
      </div>
      <code className="snip-code t-p ph-2 pv-1">
        {children}
      </code>
    </pre>
  );
}

export { Text, LinkV, Button, Inp, BreadCrumb, Snip }; 