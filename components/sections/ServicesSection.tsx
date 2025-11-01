"use client";

import { Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import ServicesCard from "../shared/ServicesCard";
import { API_BASE_URL } from "@/utils/api";

type Service = {
    id: number;
    logo: string | null;
    title: string;
    short_description: string;
    image_url: string | null;
};

const ServicesSection = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/service/`);
                const data: Service[] = await res.json();
                setServices(data);
            } catch (error) {
                console.error("Failed to fetch services:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    if (loading)
        return <p className="text-white text-center py-10">Loading...</p>;
    if (!services.length)
        return (
            <p className="text-white text-center py-10">
                No services available.
            </p>
        );

    return (
        <section id="service" className="text-white pb-15">
            <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-5xl font-bold pb-8">
                    My award-winning digital services
                </p>
                <p className="md:text-lg">
                    I deliver transformative digital journeys for renowned
                    global brands by combining <br /> creativity, AI innovation,
                    and modern technology.
                </p>
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-15 gap-10">
                {services.map((service) => (
                    <ServicesCard
                        key={service.id}
                        logo={
                            service.image_url ? (
                                <img
                                    src={service.image_url}
                                    alt={service.title}
                                    className="w-10 h-10 object-contain"
                                />
                            ) : (
                                <Code2 className="w-10 h-10 text-blue" />
                            )
                        }
                        title={service.title}
                        desc={service.short_description}
                    />
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
