import { DateTime } from 'luxon';

export const getFormattedDate = (data: string): string => {
  return DateTime.fromISO(data).toFormat('MMMM d, yyyy');
};

