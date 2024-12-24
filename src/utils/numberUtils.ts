export const formatNumber = (number: number, locale = 'fr-GN'): string => {
  return number.toLocaleString(locale);
};

export const formatCurrency = (amount: number, currency = 'GNF', locale = 'fr-GN'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};