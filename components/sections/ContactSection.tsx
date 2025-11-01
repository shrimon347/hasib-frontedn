"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { API_BASE_URL } from "@/utils/api";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type ContactDetails = {
    phone_number: string;
    email: string;
    location: string;
};

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email_address: "",
        subject: "",
        project_details: "",
    });

    const [contactDetails, setContactDetails] = useState<ContactDetails | null>(
        null
    );
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        const fetchContactDetails = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/mydetails/`);
                const data: ContactDetails[] = await res.json();
                setContactDetails(data[0] || null);
            } catch (error) {
                console.error("Failed to fetch contact details:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchContactDetails();
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await fetch(`${API_BASE_URL}/contact-us/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                toast.success(
                    "Message sent successfully! Thank you for reaching out."
                );
                setFormData({
                    first_name: "",
                    last_name: "",
                    email_address: "",
                    subject: "",
                    project_details: "",
                });
            } else {
                toast.error("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting contact form:", error);
            toast.error("An unexpected error occurred.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="contact" className="pb-15 text-white">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-16">
                Get in Touch with Me
            </h2>

            <div className="grid md:grid-cols-2 gap-10 md:place-items-center">
                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 p-6 rounded-2xl"
                >
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="font-medium">First Name *</label>
                            <Input
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                                required
                                value={formData.first_name}
                                onChange={handleChange}
                                className="text-white placeholder:text-gray-300 border border-transparent focus-visible:ring-blue mt-3 bg-blue/10"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium">
                                Last Name{" "}
                                <span className="text-gray-300">
                                    (Optional)
                                </span>
                            </label>
                            <Input
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                value={formData.last_name}
                                onChange={handleChange}
                                className="text-white placeholder:text-gray-300 border border-transparent focus-visible:ring-blue mt-3 bg-blue/10"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm text-white font-medium">
                            Email Address *
                        </label>
                        <Input
                            type="email"
                            name="email_address"
                            placeholder="name@example.com"
                            required
                            value={formData.email_address}
                            onChange={handleChange}
                            className="text-white placeholder:text-gray-300 border border-transparent focus-visible:ring-blue mt-3 bg-blue/10"
                        />
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="text-sm font-medium">Subject *</label>
                        <Input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="text-white placeholder:text-gray-300 border border-transparent focus-visible:ring-blue mt-3 bg-blue/10"
                        />
                    </div>

                    {/* Project Details */}
                    <div>
                        <label className="text-sm font-medium">
                            Project Details{" "}
                            <span className="text-gray-300">(Optional)</span>
                        </label>
                        <Textarea
                            name="project_details"
                            placeholder="Project details here..."
                            value={formData.project_details}
                            onChange={handleChange}
                            className="text-white placeholder:text-gray-300 border border-transparent focus-visible:ring-blue mt-3 bg-blue/10"
                        />
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                        <Button
                            type="submit"
                            disabled={submitting}
                            className="rounded-3xl px-8 py-5 bg-blue border border-transparent text-white font-semibold transition-all duration-300 ease-out hover:border-blue hover:bg-transparent hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] focus:ring-2 focus:ring-blue focus:ring-offset-2"
                        >
                            {submitting ? "Sending..." : "Submit Message"}
                        </Button>
                    </div>
                </form>

                {/* Contact Info */}
                {loading ? (
                    <p className="text-white text-center py-10">
                        Loading contact info...
                    </p>
                ) : contactDetails ? (
                    <div className="flex flex-col justify-center space-y-8 p-6">
                        <div className="flex flex-col gap-3">
                            <Phone className="w-6 h-6 text-gray-300" />
                            <p className="text-gray-300 text-sm">
                                Phone Number:
                            </p>
                            <p className="font-semibold text-lg">
                                {contactDetails.phone_number}
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <Mail className="w-6 h-6 text-gray-300" />
                            <p className="text-gray-300 text-sm">
                                Email Address:
                            </p>
                            <p className="font-semibold text-lg">
                                {contactDetails.email}
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <MapPin className="w-6 h-6 text-gray-300" />
                            <p className="text-gray-300 text-sm">Location:</p>
                            <p className="font-semibold text-lg">
                                {contactDetails.location}
                            </p>
                        </div>
                    </div>
                ) : (
                    <p className="text-white text-center py-10">
                        No contact info found.
                    </p>
                )}
            </div>
        </section>
    );
};
