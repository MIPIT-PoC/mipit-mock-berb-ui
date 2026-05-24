'use client'

/**
 * @file theme-provider.tsx
 * @description Thin wrapper around next-themes' ThemeProvider used by the root layout to enable forced dark-mode theming across the BRE_B mock UI.
 * @author Nicolás
 * @project MIPIT-PoC — Cross-border Instant Payments Middleware
 */
import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
