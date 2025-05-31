import AnalyticsOverview from "@/components/analytics/AnalyticsOverview";
import { redirect } from "next/navigation";

export default function Home() {
  // redirect("/onboard");

  return (
    <>
    <AnalyticsOverview/>
    </>
  )
}
