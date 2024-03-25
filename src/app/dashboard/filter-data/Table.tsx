export default function Table() {
  const data = [
    {
      'category': 'Food',
      'description': 'Groceries from local supermarket',
      'date': '2024-03-20',
      'mode_of_payment': 'Credit Card',
      'amount': 50.0,
    },
    {
      'category': 'Food',
      'description': 'Groceries from local supermarket',
      'date': '2024-03-20',
      'mode_of_payment': 'Credit Card',
      'amount': 50.0,
    },
    {
      'category': 'Transportation',
      'description': 'Uber ride to work',
      'date': '2024-03-19',
      'mode_of_payment': 'Debit Card',
      'amount': 15.75,
    },
    {
      'category': 'Entertainment',
      'description': 'Movie tickets for Avengers: Endgame',
      'date': '2024-03-18',
      'mode_of_payment': 'Cash',
      'amount': 25.0,
    },
    {
      'category': 'Food',
      'description': 'Groceries from local supermarket',
      'date': '2024-03-20',
      'mode_of_payment': 'Credit Card',
      'amount': 50.0,
    },
    {
      'category': 'Transportation',
      'description': 'Uber ride to work',
      'date': '2024-03-19',
      'mode_of_payment': 'Debit Card',
      'amount': 15.75,
    },
    {
      'category': 'Entertainment',
      'description': 'Movie tickets for Avengers: Endgame',
      'date': '2024-03-18',
      'mode_of_payment': 'Cash',
      'amount': 25.0,
    },
    {
      'category': 'Shopping',
      'description': 'New clothes from the mall',
      'date': '2024-03-17',
      'mode_of_payment': 'Credit Card',
      'amount': 120.0,
    },
    {
      'category': 'Utilities',
      'description': 'Electricity bill payment',
      'date': '2024-03-16',
      'mode_of_payment': 'Online Banking',
      'amount': 80.0,
    },
    {
      'category': 'Food',
      'description': 'Groceries from local supermarket',
      'date': '2024-03-20',
      'mode_of_payment': 'Credit Card',
      'amount': 150.0,
    },
    {
      'category': 'Transportation',
      'description': 'Uber ride to work',
      'date': '2024-03-19',
      'mode_of_payment': 'Debit Card',
      'amount': 75.5,
    },
    {
      'category': 'Entertainment',
      'description': 'Movie tickets for Avengers: Endgame',
      'date': '2024-03-18',
      'mode_of_payment': 'Cash',
      'amount': 100.0,
    },
    {
      'category': 'Shopping',
      'description': 'New clothes from the mall',
      'date': '2024-03-17',
      'mode_of_payment': 'Credit Card',
      'amount': 250.0,
    },
    {
      'category': 'Utilities',
      'description': 'Electricity bill payment',
      'date': '2024-03-16',
      'mode_of_payment': 'Online Banking',
      'amount': 180.0,
    },
    {
      'category': 'Travel',
      'description': 'Flight tickets for vacation',
      'date': '2024-03-15',
      'mode_of_payment': 'Credit Card',
      'amount': 500.0,
    },
    {
      'category': 'Utilities',
      'description': 'Electricity bill payment',
      'date': '2024-03-16',
      'mode_of_payment': 'Online Banking',
      'amount': 180.0,
    },
    {
      'category': 'Travel',
      'description': 'Flight tickets for vacation',
      'date': '2024-03-15',
      'mode_of_payment': 'Credit Card',
      'amount': 500.0,
    },
    {
      'category': 'Utilities',
      'description': 'Electricity bill payment',
      'date': '2024-03-16',
      'mode_of_payment': 'Online Banking',
      'amount': 180.0,
    },
    {
      'category': 'Travel',
      'description': 'Flight tickets for vacation',
      'date': '2024-03-15',
      'mode_of_payment': 'Credit Card',
      'amount': 500.0,
    },
    {
      'category': 'Utilities',
      'description': 'Electricity bill payment',
      'date': '2024-03-16',
      'mode_of_payment': 'Online Banking',
      'amount': 180.0,
    },
    {
      'category': 'Travel',
      'description': 'Flight tickets for vacation',
      'date': '2024-03-15',
      'mode_of_payment': 'Credit Card',
      'amount': 500.0,
    },
    {
      'category': 'Utilities',
      'description': 'Electricity bill payment',
      'date': '2024-03-16',
      'mode_of_payment': 'Online Banking',
      'amount': 180.0,
    },

    // Other data items...
  ];
  return (
    <>
      {/* Desktop/Tablet View */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="hidden md:block">
          <table className="w-full bg-blue text-white">
            <thead>
              <tr className="text-14 text-left">
                <th className="w-10 px-4 py-1 whitespace-nowrap text-ellipsis">
                  No
                </th>
                <th className="w-32 px-4 py-1 whitespace-nowrap">Date</th>
                <th className="w-72 px-4 py-1 whitespace-nowrap">
                  Description
                </th>
                <th className="w-48 px-4 py-1 whitespace-nowrap">Category</th>
                <th className="w-32 px-4 py-1 whitespace-nowrap">Mode</th>
                <th className="px-4 py-1 whitespace-nowrap">Amount</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="flex-1 overflow-auto expense-list-scrollbar">
          <table className="w-full h-full ">
            <tbody className="divide-y divide-gray">
              {data.map((item, idx) => (
                <TableRow data={item} key={idx} serialNumber={idx + 1} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col gap-4 w-full md:hidden py-2 px-4">
        {data.map((item, idx) => (
          <TableItem data={item} key={idx} serialNumber={idx + 1} />
        ))}
      </div>
    </>
  );
}

// @ts-ignore

function TableRow({ data, serialNumber }) {
  console.log('rendered row');
  return (
    <tr className="text-12">
      <td className="w-10 px-4 py-1 whitespace-nowrap">{serialNumber}</td>
      <td className="w-32 px-4 py-1 whitespace-nowrap">{data.date}</td>
      <td className="w-72 px-4 py-1 whitespace-nowrap">{data.description}</td>
      <td className="w-48 px-4 py-1 whitespace-nowrap">{data.category}</td>
      <td className="w-32 px-4 py-1 whitespace-nowrap">
        {data.mode_of_payment}
      </td>
      <td className="px-4 py-1 whitespace-nowrap font-bold">
        Rs. {data.amount}
      </td>
    </tr>
  );
}
// @ts-ignore

function TableItem({ data, serialNumber }) {
  console.log('rendered mobile list');

  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col items-center">
        <div className="h-10 w-10 rounded-[50px] bg-blue"></div>
      </div>
      <div className="flex flex-col gap-[2px] w-full">
        <div className="flex items-center max-w-screen">
          <div className="flex-1 break-all text-16 font-semibold">
            {data.category}
          </div>
          <div className="w-fit px-2 text-18 font-bold">
            ₹{data.amount.toFixed(2)}
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="flex-1 break-words break-all text-mediumgray text-14">
            {data.description}
          </div>
          <div className="flex flex-col items-start h-full justify-start w-fit px-2 text-12">
            {data.date}
          </div>
        </div>
      </div>
    </div>
  );
}
