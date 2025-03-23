import DocsNav from "@/components/docs/docsnav";
import React from 'react';
import '@/docs/style.scss';
import Nav from "@/components/docs/nav";

export default function DocsLayout({ children, navItems = [] }) {
  return (
    <React.Fragment>
      <DocsNav>
        <DocsNav.Item href="/docs/variables">variables</DocsNav.Item>
        <DocsNav.List>Base:</DocsNav.List>
        <DocsNav.Item href="/docs/text">text</DocsNav.Item>
        <DocsNav.Item href="/docs/link">link</DocsNav.Item>
        <DocsNav.Item href="/docs/button">button</DocsNav.Item>
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
