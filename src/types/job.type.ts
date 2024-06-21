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

export type JobFilterParamsTypes = {
  searchParams: {
    q?: string,
    type?: string,
    location?: string,
    remote?: string,
  }
}

export type CitiesTypes = {
  country: string,
    geonameid: number,
    name: string,
    subcountry: string,
}