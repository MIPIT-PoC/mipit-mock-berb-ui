/**
 * @file layout.tsx
 * @description Root Next.js App Router layout that wires the dark-mode ThemeProvider, global stylesheet, and page metadata for the BRE_B mock simulator.
 * @author Carlos
 * @project MIPIT-PoC — Cross-border Instant Payments Middleware
 */
import type { Metadata } from 'next';
import { ThemeProvider } from '../components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'BRE_B Mock Simulator',
  description: 'Simulador de transacciones BRE_B',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
