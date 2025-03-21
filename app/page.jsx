'use client';
import './style.scss';
import { FaAlignCenter, FaFeatherPointed, FaPalette, FaSass } from 'react-icons/fa6';
import { Snip, Text } from './components/elements';
import { SiGnubash, SiNextdotjs } from "react-icons/si";
import Feature from './components/feature';

export default function Home() {
  return (
    <main className="all">
      <div className="text-blocks ch gap-10">
        <div className="quick-start cv gap-10">
          <div className="welcome cv gap-6">
            <Text text="h1">Welcome to Vyakulin UI</Text>
            <Text text="p">It is a modern, lightweight component library designed for React applications using Next.js 15 and React 19. Built with developer experience in mind, it offers a responsive, customizable, and easy-to-use set of components powered by SCSS styling and React Icons.</Text>
          </div>
          <div className="installation cv gap-6">
            <Text text="h1">Installation</Text>
            <Snip name="bash" icon={<SiGnubash />}>
              npm install vyakulin-ui <br />
              <span># or</span> <br />
              pnpm add vyakulin-ui
            </Snip>
          </div>
        </div>
        <div className="key-features cv gap-6">
          <Text text="h1">Key Features</Text>
          <div className="features cv gap-5">
            <Feature title="Next.js 15 + Turbopack" icon={<SiNextdotjs />}>Optimized for performance with the latest Next.js features.</Feature>
            <Feature title="SCSS Support" icon={<FaSass />}>Leverage variables, mixins, and modular styles for seamless customization.</Feature>
            <Feature title="Responsive Design" icon={<FaAlignCenter />}>Components adapt flawlessly to all screen sizes.</Feature>
            <Feature title="Lightweight" icon={<FaFeatherPointed />}>Minimal footprint ensures fast load times.</Feature>
            <Feature title="Themeable" icon={<FaPalette />}>Customize colors, typography, and spacing via SCSS variables.</Feature>
          </div>
        </div>
      </div>
    </main>
  );
} 