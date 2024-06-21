import { jobTypes, locationTypes } from '@/constants/jobType.constants'
import { z } from 'zod'

// Filter search Jobs
export const jobFilterSchema = z.object({
    q: z.string().optional(),
    type: z.string().optional(),
    location: z.string().optional(),
    remote: z.coerce.boolean().optional(),
})

const requiredString = z.string().min(1, "Required!")
const numbRequiredString = requiredString.regex(/^\d+$/, "Must be number!")

const jobTypeSchema = requiredString.refine(val => (jobTypes.includes(val), "Invalid jobs type!"))
const companyLogoSchema = z.custom<File | undefined>()
    .refine(file => !file || (file instanceof File && file.type.startsWith("image/")), "Must be an image file!")
    .refine(file => !file || (file.size < 1024 * 1024 * 2), "File must be less than 2MB!")
const applicationSchema = z.object({
    applicationEmail: z.string().max(100).email().optional().or(z.literal("")),
    applicationUrl: z.string().max(100).url().optional().or(z.literal(""))
})
    .refine(data => data.applicationEmail || data.applicationUrl, {
        message: "Email or Url is required!",
        path: ["applicationEmail"]
    })
const locationSchema = z.object({
    locationType: requiredString.refine(val => (locationTypes.includes(val), "Invalid location type!")),
    location: z.string().max(100).optional()
})
    .refine(data => !data.locationType || data.locationType === "remote" || data.location, {
        message: "Location is required!",
        path: ["location"]
    })

// Create jobs
export const createJobSchema = z.object({
    title: requiredString.max(100),
    type: jobTypeSchema,
    companyName: requiredString.max(100),
    companyLogoUrl: companyLogoSchema,
    description: requiredString.max(200).optional(),
    salary: numbRequiredString.max(9, "Number can't be longer than 9 digits!"),
})
    .and(applicationSchema)
    .and(locationSchema)

export type JobFilterValues = z.infer<typeof jobFilterSchema>

export type CreateJobValues = z.infer<typeof createJobSchema>