export const moneyFormat=(amount) => {
  if (typeof amount !== 'number') {
    throw new TypeError('Amount must be a number');
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}