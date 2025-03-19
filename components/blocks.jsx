'use client';

import { Text, LinkV } from './components';
import { SiTelegram, SiGithub } from "react-icons/si";

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Logo />  
        <nav className="header-nav">
          <LinkV text="btn" color="wh" href="/docs">Docs</LinkV>
          <LinkV text="btn" color="wh" href="/contact">Contact</LinkV>
        </nav>
        <div className="header-logos">
          <LinkV text="h2" color="wh" target="_blank" href="https://t.me/Vyakulin_tg"><SiTelegram /></LinkV>
          <LinkV text="h2" color="wh" target="_blank" href="https://github.com/DanielVyakulin"><SiGithub /></LinkV>
        </div>
      </div>
    </header>
  );
}

export function Logo() {
  return (
    <LinkV text="btn" color="wh" href="/" className="header__logo">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.25 20.25H9H2L9 15H12.25L9 3.5L22 11.25L12.25 20.25Z" fill="#E6E6E6"/>
      </svg>
      Vyakulin UI
    </LinkV>
  );
}