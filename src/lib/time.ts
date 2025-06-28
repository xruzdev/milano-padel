import { parseISO } from "date-fns";
import { fromZonedTime, toZonedTime } from "date-fns-tz";

const timeZone = "America/Argentina/Buenos_Aires";

/**
 * Convierte una fecha en formato ISO (ej: '2025-06-18') a UTC como Date,
 * ajustado desde la zona horaria local (Argentina).
 */
export function toUtcFromLocalISO(dateStr: string): Date {
  const localDate = parseISO(dateStr);
  return fromZonedTime(localDate, timeZone);
}

/**
 * Convierte un Date (en UTC) a hora local (GMT-3) como objeto Date.
 */
export function toLocalDate(date: Date): Date {
  return toZonedTime(date, timeZone);
}

/**
 * Verifica si una fecha ISO es el mismo día que hoy en zona local GMT-3.
 */
export function isTodayLocal(dateStr: string): boolean {
  const localDate = parseISO(dateStr);
  const now = toLocalDate(new Date());

  return (
    localDate.getFullYear() === now.getFullYear() &&
    localDate.getMonth() === now.getMonth() &&
    localDate.getDate() === now.getDate()
  );
}

/**
 * Obtiene la hora actual en minutos en zona GMT-3.
 */
export function getCurrentLocalMinutes(): number {
  const now = toLocalDate(new Date());
  return now.getHours() * 60 + now.getMinutes();
}
