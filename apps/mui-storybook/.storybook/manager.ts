import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import type {
  API_PreparedIndexEntry,
  API_StatusObject,
} from '@storybook/types';

addons.setConfig({
  sidebar: {
    filters: {
      patterns: (
        item: API_PreparedIndexEntry & {
          status: Record<string, API_StatusObject | null>;
        },
      ): boolean => !(item.tags ?? []).includes('hideInSidebar'),
    },
  },
  theme: themes.dark,
});
