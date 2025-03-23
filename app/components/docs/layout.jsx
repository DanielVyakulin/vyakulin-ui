'use client';

import DocsNav from "@/components/docs/docsnav";
import React from 'react';
import '@/docs/style.scss';
import Nav from "@/components/docs/nav";

export default function DocsLayout({ children, navItems = [] }) {
  return (
    <React.Fragment>
      <DocsNav>
      <DocsNav.Item href="/docs/variables">Variables</DocsNav.Item>
        <DocsNav.List title="Base">
          <DocsNav.Item href="/docs/text">Text</DocsNav.Item>
          <DocsNav.Item href="/docs/link">Link</DocsNav.Item>
          <DocsNav.Item href="/docs/button">Button</DocsNav.Item>
        </DocsNav.List>
        <DocsNav.List title="Input">
          <DocsNav.Item href="/docs/input-text">Text</DocsNav.Item>
          <DocsNav.Item href="/docs/input-radio">Radio</DocsNav.Item>
          <DocsNav.Item href="/docs/input-checkbox">Checkbox</DocsNav.Item>
        </DocsNav.List>
      </DocsNav>
      <div className="main cv gap-10">
        {children}
      </div>
      <Nav>
        <Nav.Title>On this page</Nav.Title>
        <Nav.List>
          {navItems.map((item, index) => (
            <Nav.Item key={index} href={item.href}>{item.text}</Nav.Item>
          ))}
        </Nav.List>
      </Nav>
    </React.Fragment>
  );
}
