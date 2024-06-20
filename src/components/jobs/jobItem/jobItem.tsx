import Image from "next/image";
import { Banknote, Briefcase, Clock, Globe2, MapPin } from "lucide-react";

import companyLogoPlaceholder from "@/assets/images/company-logo-placeholder.png";
import { formatMoney, relativeDate } from "@/lib/utils";
import Badge from "@/components/badge/badge";
import { JobTypes } from "@/types/job.type";
import JobInfo from "../jobInfo/jobInfo";

type JobPropTypes = {
  job: JobTypes;
};

function JobItem({ job }: JobPropTypes) {
  const {
    id,
    slug,
    title,
    type,
    locationType,
    location,
    description,
    salary,
    companyName,
    applicationEmail,
    applicationUrl,
    companyLogoUrl,
    approved,
    createdAt,
    updatedAt,
  } = job;

  return (
    <article className="flex gap-3 border rounded-lg p-5 hover:bg-muted/60">
      <Image
        src={companyLogoPlaceholder}
        alt="company-logo-placeholder"
        width={100}
        height={100}
        className="rounded-lg self-center"
      />

      <div className="flex-grow space-y-3">
        <div className="">
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-muted-foreground">{companyName}</p>
        </div>

        <div className="text-muted-foreground">
          <JobInfo className="flex items-center gap-1.5 max-sm:hidden">
            <Briefcase size={16} className="shrink-0" />
            {type}
          </JobInfo>
          <JobInfo className="flex items-center gap-1.5">
            <MapPin size={16} className="shrink-0" />
            {locationType}
          </JobInfo>
          <JobInfo className="flex items-center gap-1.5">
            <Globe2 size={16} className="shrink-0" />
            {location || "Worldwide"}
          </JobInfo>
          <JobInfo className="flex items-center gap-1.5">
            <Banknote size={16} className="shrink-0" />
            {formatMoney(salary)}
          </JobInfo>
          <JobInfo className="flex items-center gap-1.5 max-sm:hidden">
            <Clock size={16} className="shrink-0" />
            {relativeDate(createdAt)}
          </JobInfo>
        </div>
      </div>

      <div className="hidden max-sm:flex flex-col shrink-0 items-end justify-between">
        <Badge>{type}</Badge>
        <JobInfo className="flex items-center gap-1.5">
          <Clock size={16} className="shrink-0" />
          {relativeDate(createdAt)}
        </JobInfo>
      </div>
    </article>
  );
}

export default JobItem;
