export const getFormattedDate = (data: Date): string => {
  const day: string = String(data.getDate()).padStart(2, '0');
  const month: string = String(data.getMonth() + 1).padStart(2, '0');
  return `${day}.${month}.${data.getFullYear()}`
}