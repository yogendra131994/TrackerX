import { client } from '@/app/xata/services';
import { DateTime } from 'next-auth/providers/kakao';

export async function POST(request: Request) {
  const formData = await request.formData();

  const description = formData.get('description') as string;
  const category = formData.get('category') as string;
  const subcategory = formData.get('subcategory') as string;
  const modeofpayment = formData.get('modeofpayment') as string;
  const email = 'yogendra.pawar@spit.ac.in'; // Assuming this is constant
  const amount =
    typeof formData.get('amount') === 'string'
      ? parseFloat(formData.get('amount') as string)
      : 0;
  const date = formData.get('date') as DateTime;
  const res = await client.db.transactions.create({
    date,
    description,
    category,
    subcategory,
    modeofpayment,
    email,
    amount,
  });
  return Response.json({
    date,
    description,
    category,
    subcategory,
    modeofpayment,
    email,
    amount,
  });
}
