'use client';
import { TextField } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import icons from '../assets/icons/icons';
import {
  ContainedButton,
  OutlinedButton,
} from '../dashboard/components/buttons/Button';
const signInIcons = icons.signInIcons;

export default function SignIn() {
  const router = useRouter();

  const handleSignUp = async () => {
    router.push('/api/auth/callback/google');
  };
  const handleSignIn = async () => {};
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2  h-screen w-screen">
      {/* left column */}
      <div className="col-span-1 h-full w-full px-8 py-8 bg-blue  hidden lg:block">
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
      <div className="flex col-span-1 h-full w-full items-center justify-center px-4 md:px-4 lg:px-8 lg:py-8 overflow-x-hidden">
        <div className="w-full">
          <div className="w-full mb-8 lg:hidden block">
            <Image height={30} src={icons.logo_black} alt="" />
          </div>
          <div className="font-bold text-24 text-black text-left mb-1">
            Track, Submit, and Visualize Your Expenses
          </div>
          <div className="text-14 mb-6 text-darkgray">
            Welcome back! Please sign in to your account.
          </div>
          <div className="mb-4">
            <TextField
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
            />
          </div>
          <div className="mb-4">
            <TextField
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
            />
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-1">
              <div>
                <input type="checkbox" />
              </div>
              <div className="text-blue_1 font-medium text-12 text-blue">
                Remember me
              </div>
            </div>
            <div className="flex text-blue font-medium text-12 items-center">
              Forgot Password?
            </div>
          </div>
          <div className="flex flex-row-reverse gap-4">
            <ContainedButton text="Sign up" onClick={handleSignIn} />
            <OutlinedButton text="Sign in" onClick={handleSignUp} />
          </div>
        </div>
      </div>
    </div>
  );
}
