export function isAppointmentDateAllowed(value: string) {
  const selectedDate = new Date(`${value}T00:00:00`);

  if (Number.isNaN(selectedDate.getTime())) {
    return false;
  }

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const maxDate = new Date(today);

  maxDate.setDate(maxDate.getDate() + 90);

  return selectedDate >= today && selectedDate <= maxDate;
}

export function formatDateForMexico(value: string) {
  const date = new Date(`${value}T12:00:00`);

  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatTime(value: string) {
  const [hours, minutes] = value.split(":").map(Number);

  const date = new Date();

  date.setHours(hours, minutes, 0, 0);

  return new Intl.DateTimeFormat("es-MX", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

export function formatDateObjectForMexico(date: Date) {
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function getMexicoDateInputValue(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Mexico_City",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value;

  const month = parts.find((part) => part.type === "month")?.value;

  const day = parts.find((part) => part.type === "day")?.value;

  return `${year}-${month}-${day}`;
}

export function getAppointmentDateRange() {
  const now = new Date();

  const minDate = getMexicoDateInputValue(now);

  const maxDateObject = new Date(now);
  maxDateObject.setDate(maxDateObject.getDate() + 90);

  const maxDate = getMexicoDateInputValue(maxDateObject);

  return {
    minDate,
    maxDate,
  };
}
