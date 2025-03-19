import "./styles/globals.scss";
import { montserrat } from './fonts.js';

export const metadata = {
  title: "Vyakulin UI",
  description: "ui-kit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
