import type { JobData } from "@/types/job";
import switchboard from "../../content/jobs/switchboard-upgrade-cost-melbourne";
import houseRewiring from "../../content/jobs/house-rewiring-cost-melbourne";
import evCharger from "../../content/jobs/ev-charger-installation-cost-melbourne";
import ceilingFan from "../../content/jobs/ceiling-fan-installation-cost-melbourne";

// Register every job data file here. generateStaticParams reads this list.
// Adding a new cost page = one import + one entry in the array below.
export const ALL_JOBS: JobData[] = [switchboard, houseRewiring, evCharger, ceilingFan];

export function getJob(slug: string): JobData | undefined {
  return ALL_JOBS.find((j) => j.slug === slug);
}
