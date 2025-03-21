import DocsNav from "@/components/docsnav";
import React from 'react';
import '@/docs/style.scss';

export const metadata = {
  title: "Vyakulin UI Docs"
};

export default function DocsLayout({ children }) {
  return (
    <React.Fragment>
      <DocsNav>
        <DocsNav.Item href="/docs/variables">variables</DocsNav.Item>
        <DocsNav.List>Base:</DocsNav.List>
        <DocsNav.Item href="/docs/text">text</DocsNav.Item>
        <DocsNav.Item href="/docs/link">link</DocsNav.Item>
        <DocsNav.Item href="/docs/button">button</DocsNav.Item>
      </DocsNav>
      {children}
    </React.Fragment>
  );
}
