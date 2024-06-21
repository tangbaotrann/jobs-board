'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createJobSchema, CreateJobValues } from "@/lib/validation";
import FormSubmitButton from "@/components/FormSubmitButton.tsx/FormSubmitButton";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { jobTypes, locationTypes } from "@/constants/jobType.constants";
import LocationInput from "@/components/LocationInput/LocationInput";

function NewJobForm() {
    const form = useForm<CreateJobValues>({
        resolver: zodResolver(createJobSchema)
    })

    const {
        handleSubmit,
        watch,
        trigger,
        control,
        setValue,
        setFocus,
        formState: { isSubmitting }
    } = form

    const onSubmit = async (values: CreateJobValues) => {
        alert('Submitted!')
    }

    return (
        <div className="container">
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
                    <FormField control={control} name="title" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Job title</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g Front-end Dev..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    
                    <FormField control={control} name="type" render={({ field: { onChange, ...fieldValues } }) => (
                        <FormItem>
                            <FormLabel>Job type</FormLabel>
                            <FormControl>
                                <Select onValueChange={onChange} {...fieldValues}>
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
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <FormField control={control} name="companyName" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company name</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g Company name..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                   
                    <FormField control={control} name="companyLogoUrl" render={({ field: { value, onChange: handleOnChange, ...fieldValues } }) => (
                        <FormItem>
                            <FormLabel>Logo url</FormLabel>
                            <FormControl>
                                <Input type="file" accept="image/*" onChange={e => {
                                    const file = e.target.files?.[0]
                                    handleOnChange(file)
                                }} placeholder="e.g Company name..." {...fieldValues} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <FormField control={control} name="locationType" render={({ field: { onChange, ...fieldValues } }) => (
                        <FormItem>
                            <FormLabel>Location type</FormLabel>
                            <FormControl>
                                <Select onValueChange={onChange} {...fieldValues}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="All location..." />
                                    </SelectTrigger>
                                    <SelectContent id="locationType">
                                        <SelectGroup>
                                            {locationTypes.map(locationType => {
                                                return <SelectItem key={locationType} value={locationType}>{locationType}</SelectItem>
                                            })}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <FormField control={control} name="location" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Office location</FormLabel>

                            <FormControl>
                                <LocationInput onLocationSelected={() => {}} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <FormSubmitButton>Create job</FormSubmitButton>
                </form>
            </Form>
        </div>
    )
}

export default NewJobForm;