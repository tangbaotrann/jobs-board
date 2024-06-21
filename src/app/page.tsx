import { Metadata } from "next";

import Jobs from "@/components/jobs/jobs";
import getTitleJob from "@/lib/getTitleJob";
import { JobFilterValues } from "@/lib/validation";
import { JobFilterParamsTypes } from "@/types/job.type";

export const generateMetadata = ({ searchParams }: JobFilterParamsTypes): Metadata => {
  const { q, type, location, remote } = searchParams
  
  return {
    title: `${
      getTitleJob({
        q, type, location, remote: remote === "true"
      })
    } | Flow jobs`
  }
}

export default function Home({ searchParams }: JobFilterParamsTypes) {
  const { q, type, location, remote } = searchParams
  const filterValues: JobFilterValues = {
    q: q,
    type: type,
    location: location,
    remote: remote === "true",
  }

  return (
    <main className="container">
      <Jobs filterValues={filterValues} />
    </main>
  );
}
