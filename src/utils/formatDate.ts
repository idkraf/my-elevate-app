import { Timestamp } from "firebase/firestore";

export function formatDate(timestamp: Timestamp): string {
  if (!timestamp) return "";
  const date = new Date(timestamp.seconds * 1000);
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
