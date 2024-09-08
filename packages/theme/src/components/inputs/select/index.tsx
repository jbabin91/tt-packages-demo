import MuiSelect, {
  type SelectProps as MuiSelectProps,
} from '@mui/material/Select';

export type SelectProps = MuiSelectProps;
export function Select(props: SelectProps) {
  return <MuiSelect {...props} />;
}
