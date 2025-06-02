import { format } from "date-fns";
import { format as formatWithOrdinal } from "date-fns";

export function formatDate(date: Date) {
  const day = format(date, "do"); // e.g., 20th
  const month = format(date, "MMM"); // May
  const time = format(date, "h:mmaaa").toLowerCase(); // 5:02pm
  return `${month} ${day}, ${time}`;
}
