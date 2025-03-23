import React from 'react';
import Section from '@/components/docs/section';
import DocsLayout from '@/components/docs/layout';
export default function Docs() {

  const pageNavItems = [
    { href: "#intro", text: "Introduction" },
    { href: "#what", text: "What is Vyakulin-ui" }
  ];

  return (
    <DocsLayout navItems={pageNavItems}>
      <Section anchor="intro">
        <Section.Title>Introduction</Section.Title>
        <Section.Description>
          Welcome to Vyakulin-ui documentation!
        </Section.Description>
      </Section>
      <Section anchor="what">
        <Section.Title>What is Vyakulin-ui</Section.Title>
        <Section.Description>
        Vyakulin UI is a modern and elegant component library designed for  Next.js 15 and React 19 applications. It provides a clean design system  with:
          <ul>
            <li>Modern stack with Next.js 15 and React 19</li>
            <li>Turbopack optimization for blazing-fast performance</li>
            <li>SASS integration with utility-first classes (clsx)</li>
            <li>5000+ icons via React Icons</li>
            <li>Fully responsive components</li>
            <li>Type-safe JavaScript with JSConfig support</li>
          </ul>
        </Section.Description>
      </Section>
    </DocsLayout>
  );
}