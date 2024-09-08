import MuiSlider, {
  type SliderProps as MuiSliderProps,
} from '@mui/material/Slider';

export type SliderProps = MuiSliderProps;
export function Slider(props: SliderProps) {
  return <MuiSlider {...props} />;
}
