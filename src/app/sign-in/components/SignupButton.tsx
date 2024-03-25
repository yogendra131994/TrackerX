import { Button } from '@mui/material';

export default function SignupButton() {
  const handleSignup = async (data: FormData) => {};
  console.log('Hello');
  return (
    <form action={handleSignup}>
      <div>
        <Button
          size="medium"
          variant="outlined"
          style={{ textTransform: 'none', color: '#55acee' }}
          type="submit"
        >
          Sign up
        </Button>
      </div>
    </form>
  );
}
