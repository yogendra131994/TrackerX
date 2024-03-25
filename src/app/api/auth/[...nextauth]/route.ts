//@ts-nocheck
import auth from '@/app/xata/auth';
import NextAuth from 'next-auth/next';
const handler = NextAuth(auth);
export { handler as GET, handler as POST };
