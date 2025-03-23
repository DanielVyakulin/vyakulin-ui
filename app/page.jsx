'use client';
import '@/style.scss';
import React from 'react';
import { FaAlignCenter, FaFeatherPointed, FaPalette, FaSass } from 'react-icons/fa6';
import { Snip, Text } from '@/components/elements';
import { SiGnubash, SiNextdotjs } from "react-icons/si";
import Feature from '@/components/feature';

export default function Home() {
  return (
    <React.Fragment>
      <div className="text-blocks ch gap-10">
        <div className="quick-start cv gap-10">
          <div className="welcome cv gap-6">
            <Text text="h1">Welcome to Vyakulin UI</Text>
            <Text text="p">It is a modern, lightweight component library designed for React applications using Next.js 15 and React 19. Built with developer experience in mind, it offers a responsive, customizable, and easy-to-use set of components powered by SCSS styling and React Icons.</Text>
          </div>
          <div className="installation cv gap-6">
            <Text text="h1">Installation</Text>
            <div className="cv gap-4">
              <Text text="h2">Package</Text>
              <Snip name="bash" icon={<SiGnubash />}>
                npm install vyakulin-ui
              </Snip>
            </div>
            <div className="cv gap-4">
              <Text text="h2">Development</Text>
              <Snip name="bash" icon={<SiGnubash />}>
                git clone https://github.com/DanielVyakulin/vyakulin-ui.git <br />
                cd vyakulin-ui <br />
                npm install <br />
                npm run dev
              </Snip>
            </div>
          </div>
        </div>
        <div className="key-features cv gap-6">
          <Text text="h1">Key Features</Text>
          <div className="features cv gap-5">
            <Feature icon={<SiNextdotjs />}>
              <Feature.Title>Next.js 15 + Turbopack</Feature.Title>
              <Feature.Description>Optimized for performance with the latest Next.js features.</Feature.Description>
            </Feature>
            <Feature icon={<FaSass />}>
              <Feature.Title>SCSS Support</Feature.Title>
              <Feature.Description>Leverage variables, mixins, and modular styles for seamless customization.</Feature.Description>
            </Feature>
            <Feature icon={<FaAlignCenter />}>
              <Feature.Title>Responsive Design</Feature.Title>
              <Feature.Description>Components adapt flawlessly to all screen sizes.</Feature.Description>
            </Feature>
            <Feature icon={<FaFeatherPointed />}>
              <Feature.Title>Lightweight</Feature.Title>
              <Feature.Description>Minimal footprint ensures fast load times.</Feature.Description>
            </Feature>
            <Feature icon={<FaPalette />}>
              <Feature.Title>Themeable</Feature.Title>
              <Feature.Description>Customize colors, typography, and spacing via SCSS variables.</Feature.Description>
            </Feature>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
} 