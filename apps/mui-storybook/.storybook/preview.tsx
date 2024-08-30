import {
  CssBaseline,
  darkTheme,
  lightTheme,
  ThemeProvider,
} from '@jbabin91/mui-theme';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview, ReactRenderer } from '@storybook/react';
import { themes } from '@storybook/theming';

const preview = {
  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
      GlobalStyles: CssBaseline,
      Provider: ThemeProvider,
      defaultTheme: 'light',
      themes: {
        dark: darkTheme,
        light: lightTheme,
      },
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
} satisfies Preview;

export default preview;
