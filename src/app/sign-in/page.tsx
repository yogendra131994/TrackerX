import { Button } from '@mui/material';
import Image from 'next/image';
import icons from '../assets/icons/icons';
const signInIcons = icons.signInIcons;

export default function SignIn() {
  const handleSignup = async (data: FormData) => {
    'use server';
  };
  return (
    <div className="grid grid-cols-2 h-screen w -screen">
      {/* left column */}
      <div className="col-span-1 h-full w-full px-8 py-8 bg-blue">
        <div className="flex h-full w-full justify-center items-center select-none">
          <div className="w-full">
            <div className="w-full mb-8">
              <Image height={30} src={icons.logo_white} alt="" />
            </div>
            <div className="flex items-center justify-center w-full">
              <Image
                placeholder="empty"
                loading="lazy"
                className="object-cover"
                src={signInIcons.vectorIllustration}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* right column */}
      <div className="flex col-span-1 h-full w-full items-center justify-center px-8 py-8 ">
        <div className="">
          <div className="font-bold text-24 text-black text-left mb-1">
            Track, Submit, and Visualize Your Expenses
          </div>
          <div className="text-14 mb-6 text-darkgray">
            Welcome back! Please sign in to your account.
          </div>
          <div className="mb-4">
            {/* <TextField
              id="filled-number"
              label="Email Address"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
              fullWidth
              variant="standard"
              sx={{
                '.MuiFilledInput-input': { background: 'white' },
                '.MuiInputLabel-root': {
                  fontSize: 18,
                  color: '#55acee',
                  fontWeight: '400',
                },
                '&:focus-within': {
                  '.MuiInputLabel-root': {
                    fontWeight: '500',
                  },
                },
              }}
            /> */}
          </div>
          <div className="mb-4">
            {/* <TextField
              id="filled-number"
              label="Password"
              type="password"
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
              fullWidth
              variant="standard"
              sx={{
                '.MuiFilledInput-input': { background: 'white' },
                '.MuiInputLabel-root': {
                  fontSize: 18,
                  color: '#55acee',
                  fontWeight: '400',
                },
                '&:focus-within': {
                  '.MuiInputLabel-root': {
                    fontWeight: '500',
                  },
                },
              }}
            /> */}
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-0">
              {/* <FormControlLabel
                control={<Checkbox defaultChecked />}
                label=""
                sx={{
                  color: '#5C677D',
                  '&  .MuiSvgIcon-root': { fontSize: 20 },
                }}
              /> */}
              <div className="text-blue_1 font-medium text-12 text-blue">
                Remember me
              </div>
            </div>
            <div className="flex text-blue font-medium text-12 items-center">
              Forgot Password?
            </div>
          </div>
          <div className="flex flex-row-reverse gap-4">
            <Button
              size="medium"
              style={{ backgroundColor: '#55acee', textTransform: 'none' }}
              variant="contained"
            >
              Sign in
            </Button>
            <form action={handleSignup}>
              <Button
                size="medium"
                variant="outlined"
                style={{ textTransform: 'none', color: '#55acee' }}
                type="submit"
              >
                Sign up
              </Button>
            </form>
            {/* <SignupButton /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
