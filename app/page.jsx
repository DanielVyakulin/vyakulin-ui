'use client';
import { Snip } from './components/elements';
import { SiGnubash } from "react-icons/si";

export default function Home() {
  return (
    <main className="all">
      <Snip name="bash" icon={<SiGnubash />}>
        npm install vyakulin-ui <br />
        <span># or</span> <br />
        pnpm add vyakulin-ui
      </Snip>
    </main>
  );
} 