export const formatDate = (dateString: string, locale = 'fr-GN') => {
  return new Date(dateString).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatDateTime = (dateString: string, locale = 'fr-GN') => {
  return new Date(dateString).toLocaleString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatDateForInput = (date: Date): string => {
  return date.toISOString().split('T')[0];
};