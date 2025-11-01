"use client";

import { useEffect, useState } from "react";
import ExperienceCard from "../shared/ExperienceCard";
import { API_BASE_URL } from "@/utils/api";

interface Experience {
    id: number;
    project_complete: number;
    companies_worked: number;
    client_satisfactions: number;
    years_of_experience: number;
}

export const ExperienceSection: React.FC = () => {
    const [experience, setExperience] = useState<Experience | null>(null);

    useEffect(() => {
        fetch(`${API_BASE_URL}/experience/`)
            .then((res) => res.json())
            .then((data) => {
                // The API returns an array, so take the first object
                setExperience(data[0]);
            })
            .catch((error) =>
                console.error("Error fetching experience:", error)
            );
    }, []);

    if (!experience) {
        return (
            <section className="text-white py-10 text-center">
                <p>Loading experience...</p>
            </section>
        );
    }

    return (
        <section className="text-white py-10">
            <div className="text-center mb-10">
                <p className="text-2xl sm:text-3xl md:text-5xl font-bold">
                    Experience
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ExperienceCard
                    title="Years of Experience"
                    text={`${String(experience.years_of_experience).padStart(
                        2,
                        "0"
                    )}+`}
                />

                <ExperienceCard
                    title="Projects Completed"
                    text={`${experience.project_complete}+`}
                />
                <ExperienceCard
                    title="Companies Worked"
                    text={`${String(experience.companies_worked).padStart(
                        2,
                        "0"
                    )}+`}
                />

                <ExperienceCard
                    title="Client Satisfaction"
                    text={`${experience.client_satisfactions}%`}
                />
            </div>
        </section>
    );
};
