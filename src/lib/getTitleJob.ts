import { JobFilterValues } from "./validation"

const getTitleJob = ({ q, type, location, remote }: JobFilterValues) => {
    const titlePrefix = q ? `${q} jobs` : type ? `${type} developer jobs` : remote ? `Remote developer jobs` : `All developer jobs`
  
    const titleSuffix = location ? ` in ${location}` : ''
  
    return `${titlePrefix}${titleSuffix}`
}

export default getTitleJob