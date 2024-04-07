import prisma from "@/lib/prisma";
import JobItem from "./jobItem/jobItem";

export type JobTypes = {
  id: number;
  slug: string;
  title: string;
  type: string;
  locationType: string;
  location?: string;
  description?: string;
  salary: number;
  companyName: string;
  applicationEmail?: string;
  applicationUrl?: string;
  companyLogoUrl?: string;
  approved: boolean;
  createdAt: Date;
  updatedAt: Date;
};

async function Jobs() {
  const jobs = await prisma.job.findMany({
    where: {
      approved: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main>
      <h1>Jobs</h1>
      {JSON.parse(JSON.stringify(jobs)).map((job: JobTypes) => (
        <JobItem job={job} key={job.id} />
      ))}
    </main>
  );
}

export default Jobs;
