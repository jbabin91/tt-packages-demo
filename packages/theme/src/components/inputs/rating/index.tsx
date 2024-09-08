import MuiRating, {
  type RatingProps as MuiRatingProps,
} from '@mui/material/Rating';

export type RatingProps = MuiRatingProps;
export function Rating(props: RatingProps) {
  return <MuiRating {...props} />;
}
