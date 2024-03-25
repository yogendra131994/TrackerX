import GoogleProvider from 'next-auth/providers/google';
// When you ran `xata init` it created a `src/xata.ts` that exports the client
import { XataClient } from '../../xata';
const client = new XataClient();
const options = {
  providers: [
    // Auth JS provides many providers, but we'll only use Google for this demo
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {},
      },
      checks: ['none'],
    }),
  ],
  callbacks: {
    async signIn(user: any, account: any, metadata: any) {
      console.log('Sign in data received:', { user, account, metadata });
      const record = await client.db.users.create({
        email: user.user.email,
        name: user.user.name,
      });
      console.log(record);
      return true; // Return true to allow sign in
    },
  },
};
export default options;
