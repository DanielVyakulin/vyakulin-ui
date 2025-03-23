import React from 'react';
import Section from '@/components/docs/section';
import DocsLayout from '@/components/docs/layout';

export default function Docs() {

  const pageNavItems = [
    { href: "#", text: "S" }
  ];

  return (
    <DocsLayout navItems={pageNavItems}>
    </DocsLayout>
  );
}
