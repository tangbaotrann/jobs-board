import { Metadata } from "next"
import NewJobForm from "./NewJobForm"

export const metadata: Metadata = {
    title: "Create Job",
    description: "Create a new job",
}

function CreateJobPage() {
    return (
        <NewJobForm />
    )
}

export default CreateJobPage