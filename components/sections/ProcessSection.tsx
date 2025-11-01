import Image from "next/image";
import ProcessStep from "../shared/ProcessStep";

export default function ProcessSection() {
    const steps = [
        {
            step: 1,
            title: "Discover",
            subtitle: "Understand users & problems",
            description:
                "In this phase, I focus on deeply understanding the users and uncovering their real needs and challenges. Through both qualitative and quantitative research methods—like user interviews and surveys—I gather valuable insights about user behavior and pain points. This helps me build a solid foundation before moving forward with defining the right problem to solve.",
            icon: (
                <Image
                    src="/images/4.png"
                    alt="Logo"
                    width={200}
                    height={50}
                    className="text-blue"
                />
            ),
        },
        {
            step: 2,
            title: "Define",
            subtitle: "Pinpoint the main problem",
            description:
                "In this phase, I carefully review all the research findings to understand the core problem clearly. I analyze the data to find patterns and insights, create user personas, empathy map, storyboard and map out user journeys. This helps me focus on the real issues that need solving, so my design can be purposeful and effective.",
            icon: (
                <Image
                    src="/images/3.png"
                    alt="Logo"
                    width={200}
                    height={50}
                    className="text-blue"
                />
            ),
        },
        {
            step: 3,
            title: "Develop",
            subtitle: "Explore possible solutions",
            description:
                "In this phase, I explore different ideas and possible solutions based on the defined problem. I start sketching concepts, creating wireframes, and building interactive prototypes to test how users might interact with the product. It's a creative and experimental stage where I turn insights into visual directions and begin shaping real design solutions.",
            icon: (
                <Image
                    src="/images/2.png"
                    alt="Logo"
                    width={200}
                    height={50}
                    className="text-blue"
                />
            ),
        },
        {
            step: 4,
            title: "Deliver",
            subtitle: "Finalize and implement",
            description:
                "In the final phase, I refine the best solution based on user feedback and usability testing. Once everything feels right, I prepare the final high-fidelity designs and hand off the necessary assets and guidelines to developers. This phase ensures that the design is not only visually polished but also functional and ready for real-world use.",
            icon: (
                <Image
                    src="/images/1.png"
                    alt="Logo"
                    width={200}
                    height={50}
                    className="text-blue"
                />
            ),
        },
    ];

    return (
        <section className="py-15 text-white">
            <div className="text-center">
                <p className="text-2xl sm:text-3xl text-white md:text-5xl font-bold pb-8">
                    My Working Process
                </p>
                <p className="md:text-lg">
                    I follow the Double Diamond design process — Discover,
                    Define, Develop, and Deliver — to deeply <br /> understand
                    user needs and create thoughtful, effective design
                    solutions.
                </p>
            </div>
            <div className="space-y-12 relative mt-15">
                {steps.map((step, index) => (
                    <ProcessStep
                        key={step.step}
                        {...step}
                        isLast={index === steps.length - 1}
                    />
                ))}
            </div>
        </section>
    );
}
