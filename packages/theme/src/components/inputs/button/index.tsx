import MuiButton, {
  type LoadingButtonProps as MuiButtonProps,
} from '@mui/lab/LoadingButton';
import MuiIconButton, {
  type IconButtonProps as MuiIconButtonProps,
} from '@mui/material/IconButton';

// Button
export type ButtonProps = MuiButtonProps;
export function Button(props: ButtonProps) {
  return <MuiButton {...props} />;
}

// Icon Button
export type IconButtonProps = MuiIconButtonProps;
export function IconButton(props: IconButtonProps) {
  return <MuiIconButton {...props} />;
}
