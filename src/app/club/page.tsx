import { redirect } from "next/navigation"

// /club has no list view of its own; the club list lives at /clubs.
export default function ClubIndexPage() {
  redirect("/clubs")
}
