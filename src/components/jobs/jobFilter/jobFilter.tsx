import prisma from "@/lib/prisma"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { jobTypes } from "@/constants/jobType.constants";
import { Checkbox } from "@/components/ui/checkbox";
import { filterJobs } from "@/lib/actions/jobs.action";
import { JobFilterValues } from "@/lib/validation";
import FormSubmitButton from "@/components/FormSubmitButton.tsx/FormSubmitButton";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type JobFilterValuesTypes = {
    defaultValue: JobFilterValues
}

async function JobFilter({ defaultValue }: JobFilterValuesTypes) {
    const distinctLocations = (await prisma.job.findMany({
        where: { approved: true },
        select: { location: true },
        distinct: ["location"],
    })
        .then(locations => (
            locations.map(({ location }) => location).filter(Boolean)
        ))) as string[];

    return (
        <section className="md:w-[240px] sticky top-0 h-fit bg-background border rounded-lg p-2">
            <form action={filterJobs} key={JSON.stringify(defaultValue)}>
                <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="q">Search: </Label>
                        <Input name="q" id="q" defaultValue={defaultValue.q}  placeholder="Enter title, company, etc." />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="type">Type</Label>
                        <Select name="type">
                            <SelectTrigger>
                                <SelectValue placeholder="Select type..." />
                            </SelectTrigger>
                            <SelectContent id="type">
                                <SelectGroup>
                                    {jobTypes.map(jobType => {
                                        return (
                                            <SelectItem key={jobType} value={jobType}>{jobType}</SelectItem>
                                        )
                                    })}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="location">Location: </Label>
                        <Select name="location">
                            <SelectTrigger>
                                <SelectValue placeholder="Select location..." />
                            </SelectTrigger>
                            <SelectContent id="location">
                                <SelectGroup>
                                    {distinctLocations.map(location => {
                                        return (
                                            <SelectItem key={location} value={location}>{location}</SelectItem>
                                        )
                                    })}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                        {/* {locationTypes.map(locationType => {
                            return (
                                <div key={locationType} className="flex items-center gap-2">
                                    <Checkbox id={locationType} name={locationType} />
                                    <Label htmlFor={locationType}>{locationType}</Label>
                                </div>
                            )
                        })} */}
                         <div className="flex items-center gap-2">
                            <Checkbox id="remote" name="remote" defaultChecked={defaultValue.remote} />
                            <Label htmlFor="remote">Remote jobs</Label>
                         </div>
                    </div>

                    <FormSubmitButton>Filter jobs</FormSubmitButton>
                </div>
            </form>
        </section>
    )
}

export default JobFilter