export const getDateObject = (dateValue) => {
  const inputDate = new Date(dateValue);
  const offset = inputDate.getTimezoneOffset() * 60 * 1000;
  const adjustedDate = new Date(inputDate.getTime() + offset);
  return adjustedDate;
};
