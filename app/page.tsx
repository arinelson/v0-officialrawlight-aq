import { redirect } from "next/navigation"

export default function Home() {
  // Redirect to Portuguese as default
  redirect("/pt/")
}
