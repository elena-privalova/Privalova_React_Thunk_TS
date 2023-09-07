export const getFormattedFullName = (firstName: string, lastName: string): string => {
  if (firstName != null) return `${firstName} ${lastName}`;
  return '';
};

