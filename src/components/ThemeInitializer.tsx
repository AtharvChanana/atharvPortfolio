'use client';

import { useEffect } from 'react';
import { style, dataStyle } from '@/resources';

export function ThemeInitializer() {
  useEffect(() => {
    try {
      const root = document.documentElement;
      const defaultTheme = 'system';
      
      // Set defaults from config
      const config = {
        brand: style.brand,
        accent: style.accent,
        neutral: style.neutral,
        solid: style.solid,
        'solid-style': style.solidStyle,
        border: style.border,
        surface: style.surface,
        transition: style.transition,
        scaling: style.scaling,
        'viz-style': dataStyle.variant,
      };
      
      // Apply default values
      Object.entries(config).forEach(([key, value]) => {
        root.setAttribute('data-' + key, value);
      });
      
      // Resolve theme
      const resolveTheme = (themeValue: string | null) => {
        if (!themeValue || themeValue === 'system') {
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return themeValue;
      };
      
      // Apply saved theme
      const savedTheme = localStorage.getItem('data-theme');
      const resolvedTheme = resolveTheme(savedTheme);
      root.setAttribute('data-theme', resolvedTheme);
      
      // Apply any saved style overrides
      const styleKeys = Object.keys(config);
      styleKeys.forEach(key => {
        const value = localStorage.getItem('data-' + key);
        if (value) {
          root.setAttribute('data-' + key, value);
        }
      });
    } catch (e) {
      console.error('Failed to initialize theme:', e);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  return null;
}
