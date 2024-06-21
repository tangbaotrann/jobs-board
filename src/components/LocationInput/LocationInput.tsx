import React, { forwardRef, useMemo, useState } from "react";

import { Input } from "../ui/input";
import citiesList from '@/lib/city-list'

interface LocationInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onLocationSelected: (location: string) => void
}

export default forwardRef<HTMLInputElement, LocationInputProps>(
    function LocationInput({ onLocationSelected, ...props }, ref) {
        const [locationSearchInput, setLocationSearchInput] = useState<string>("")

        const cities = useMemo(() => {
            if(!locationSearchInput.trim()) return []

            const searchWords = locationSearchInput.split(" ")

            return citiesList
                        .map(city => `${city.name}, ${city.subcountry}, ${city.country}`)
                        .filter(city => city.toLowerCase().startsWith(searchWords[0].toLowerCase())
                        && searchWords.every(w => city.toLowerCase().includes(w.toLowerCase()))
                    ).slice(0, 5)
        }, [locationSearchInput])

        return (
            <div className="relative">
                <Input {...props} ref={ref} onChange={e => setLocationSearchInput(e.target.value)} value={locationSearchInput} type="search" placeholder="Search for a city..." />

                {locationSearchInput.trim() && (
                    <div className="absolute bg-background shadow-xl border-x bottom-b z-20 divide-y rounded-b-lg">
                        <div>{!cities.length && <p>No results.</p>}</div>

                        {cities.map((city: string) => {
                            return <button key={city} className="block w-full text-start p-2">{city}</button>
                        })}
                    </div>
                )}
            </div>
        )
    }
)