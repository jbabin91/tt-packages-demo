import MuiSwitch, {
  type SwitchProps as MuiSwitchProps,
} from '@mui/material/Switch';

export type SwitchProps = MuiSwitchProps;
export function Switch(props: SwitchProps) {
  return <MuiSwitch {...props} />;
}
