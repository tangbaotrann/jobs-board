import prisma from "@/lib/prisma";
import JobItem from "./jobItem/jobItem";
import { JobTypes } from "@/types/job.type";
import JobFilter from "./jobFilter/jobFilter";
import { JobFilterValues } from "@/lib/validation";
import { Prisma } from "@prisma/client";
import getTitleJob from "@/lib/getTitleJob";

type JobFilterPropsTypes = {
  filterValues: JobFilterValues;
}

async function Jobs({ filterValues }: JobFilterPropsTypes) {
  const { q, type, location, remote } = filterValues

  const searchValueString = q?.split(' ').filter(w => w.length > 0).join(' & ')

  const searchFilter: Prisma.JobWhereInput = searchValueString ? {
    OR: [
      { title: { search: searchValueString } },
      { companyName: { search: searchValueString } },
      { type: { search: searchValueString } },
      { locationType: { search: searchValueString } },
      { location: { search: searchValueString } },
    ]
  } : {}

  const where: Prisma.JobWhereInput = {
    AND: [
      searchFilter,
      type ? { type } : {},
      location ? { location } : {},
      remote ? { locationType: "remote"} : {},
      { approved: true }
    ],
  }

  const jobs = await prisma.job.findMany({
    where: where,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main>
      <div className="text-center">
        <h1 className="text-4xl font-bold">{getTitleJob(filterValues)}</h1>
        <p className="text-muted-foreground">Find your dream job.</p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <JobFilter defaultValue={filterValues} />

        <div className="grow space-y-4">
          {JSON.parse(JSON.stringify(jobs)).map((job: JobTypes) => (
            <JobItem job={job} key={job.id} />
          ))}

          {JSON.parse(JSON.stringify(jobs)).length === 0 && (
            <p className="text-center m-auto">No jobs.</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Jobs;
