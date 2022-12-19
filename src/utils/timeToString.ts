export function timeToString(date: Date): string {
  const yearString = date.getFullYear().toString();
  const monthString = (date.getMonth() + 1).toString().padStart(2, '0');
  const dayString = date.getDate().toString().padStart(2, '0');
  const dateString = `${yearString}-${monthString}-${dayString}`;
  return dateString;
}
