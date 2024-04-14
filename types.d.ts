type FilterState = {
  category: string | null;
  paymentMode: string | null;
  fromAmount: number | null;
  toAmount: number | null;
  fromDate: Date | null;
  toDate: Date | null;
  reqUrl: string | null;
  page: string | null;
  cursor: string | null;
  searchQuery: string | null;
  [key: string]: string | number | Date | null;
};
