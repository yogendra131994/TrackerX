'use client';
import Button from '@mui/material/Button';
interface ButtonProps {
  onClick: () => void;
  text: string;
}
export function ContainedButton({ onClick, text }: ButtonProps) {
  return (
    <Button
      size="medium"
      style={{ backgroundColor: '#55acee', textTransform: 'none' }}
      variant="contained"
      onClick={onClick}
    >
      Sign in
    </Button>
  );
}

export function OutlinedButton({ onClick, text }: ButtonProps) {
  return (
    <Button
      size="medium"
      variant="outlined"
      style={{ textTransform: 'none', color: '#55acee' }}
      onClick={onClick}
    >
      {text}{' '}
    </Button>
  );
}
