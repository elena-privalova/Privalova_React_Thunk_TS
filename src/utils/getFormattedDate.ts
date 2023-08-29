export const getFormattedDate = (data: string): string => {
  const formattedDate = new Date(data);
  const day: string = String(formattedDate.getDate()).padStart(2, '0');
  const month: string = String(formattedDate.getMonth() + 1).padStart(2, '0');
  return `${day}.${month}.${formattedDate.getFullYear()}`
}