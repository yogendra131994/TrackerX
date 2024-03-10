function formatIndianRupees(amount: string) {
  // Convert the float number into a string
  const amountStr = amount.toString();

  // Split the string into integer and decimal parts
  const [integerPart, decimalPart] = amountStr.split('.');

  // Format the integer part with commas for thousands separator
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ',',
  );

  // Concatenate the formatted integer part with the decimal part
  const formattedAmount = decimalPart
    ? `${formattedIntegerPart}.${decimalPart}`
    : formattedIntegerPart;

  // Append the Indian Rupee symbol ('₹') to the formatted amount
  console.log(formattedAmount);
  return `${formattedAmount}`;
}

export { formatIndianRupees };
