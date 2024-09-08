import MuiAutocomplete, {
  type AutocompleteProps,
} from '@mui/material/Autocomplete';
import type { ChipTypeMap } from '@mui/material/Chip';
import type React from 'react';

export { type AutocompleteProps } from '@mui/material/Autocomplete';
export function Autocomplete<
  Value extends NonNullable<unknown>,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
>(
  props: AutocompleteProps<
    Value,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >,
) {
  return <MuiAutocomplete {...props} />;
}
