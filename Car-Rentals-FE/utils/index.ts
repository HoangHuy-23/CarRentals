import exp from "constants";

export const formatDate = (date: Date) => {
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export const formatDateToString = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export const formatDateToStringType2 = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}h${minutes}, ${day}/${month}/${year}`;
};

export const formatDateToLocalDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const formatDateToStringType1 = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}, ${day}/${month}`;
};

export const formatDayToString = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}/${month}/${year}`;
};

export const formatTimeToString = (date: Date) => {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
};

export function formatPrice(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const formatPriceToK = (num: number): string => {
  if (num >= 1000) {
    const thousands = num / 1000;
    return (
      thousands.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 3,
      }) + "K"
    );
  }
  return num.toLocaleString();
};

export const calculatorInsurance = (num: number) => {
  return num * 0.1;
};

export const calculatorVAT = (num: number) => {
  return num * 0.1;
};

export const calculatorRentalFee = (price: number, day: number) => {
  return (price + price * 0.1) * day;
};

export function updateDateWithTime(date: Date, timeString: string) {
  // Parse the time string to get hours and minutes
  const [hours, minutes] = timeString.split(":").map(Number);

  // Update the date object with the new time
  date.setHours(hours);
  date.setMinutes(minutes);

  return date;
}

export function addHoursAndRoundMinutes(date: Date, hoursToAdd: number) {
  // Clone the date to avoid mutating the original date
  const newDate = new Date(date.getTime());

  // Add the hours
  newDate.setHours(newDate.getHours() + hoursToAdd);

  // Round the minutes to the nearest 00 or 30
  const minutes = newDate.getMinutes();
  if (minutes < 30) {
    newDate.setMinutes(0, 0, 0); // Set minutes to 00
  } else {
    newDate.setMinutes(30, 0, 0); // Set minutes to 30
  }

  return newDate;
}

export function calculateDaysDifference(date1: Date, date2: Date): number {
  // Ensure date1 is earlier than date2
  if (date1 > date2) {
    [date1, date2] = [date2, date1];
  }

  // Calculate the difference in milliseconds
  const diffInMilliseconds = date2.getTime() - date1.getTime();

  // Convert milliseconds to hours
  const diffInHours = diffInMilliseconds / (1000 * 60 * 60);

  // Convert hours to days, rounding up to the nearest whole number
  const diffInDays = Math.ceil(diffInHours / 24);

  return diffInDays;
}
