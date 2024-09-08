import MuiFab, { type FabProps as MuiFabProps } from '@mui/material/Fab';

export type FabProps = MuiFabProps;
export function Fab(props: FabProps) {
  return <MuiFab {...props} />;
}
