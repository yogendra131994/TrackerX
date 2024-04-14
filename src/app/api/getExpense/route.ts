import { client } from '@/app/xata/services';

export async function GET(req: Request) {
  console.log(req);
  const url: URL = new URL(req.url);

  // Extract query parameters from the URL
  const paymentMode = url.searchParams.get('paymentMode');
  const fromDate = url.searchParams.get('fromDate');
  const toDate = url.searchParams.get('toDate');
  const category = url.searchParams.get('category');
  const fromAmount = url.searchParams.get('fromAmount');
  const toAmount = url.searchParams.get('toAmount');
  const searchQuery = url.searchParams.get('searchQuery');
  const page = url.searchParams.get('page');
  const cursor = url.searchParams.get('cursor');

  console.log('payment mode', paymentMode);

  // Construct the filter object based on available query parameters
  const filter: any = { email: 'yogendra.pawar@spit.ac.in' };
  if (paymentMode) filter.modeofpayment = paymentMode;
  if (fromDate && toDate) {
    filter.$all = [
      {
        'date': { $ge: new Date(fromDate) },
      },
      {
        'date': { $le: new Date(toDate) },
      },
    ];
  }
  if (fromAmount && toAmount) {
    filter.$all = [
      { amount: { $ge: parseFloat(fromAmount) } },
      { amount: { $le: parseFloat(toAmount) } },
    ];
  }
  if (category) {
    filter.category = category;
  }

  const pagination = { size: 20 } as {
    size: number;
    after?: any;
    before?: any;
  };

  if (page === 'n') {
    pagination.after = cursor;
  } else if (page === 'p') {
    pagination.before = cursor;
  }
  // Add more conditions for other query parameters if needed

  // Fetch data from the database based on the constructed filter
  // const res = await client.db.transactions.search(searchQuery ?? '', filter);
  let res = await client.db.transactions.filter(filter).getPaginated({
    pagination,
  });

  // const res = await client.db.transactions.filter(filter).getAll();
  // console.log(res);
  return Response.json(res);
}
