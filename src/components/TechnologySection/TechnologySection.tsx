import { useEffect, useState } from "react";
import type { Technology } from "../../types/technology";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const TechnologySection = () => {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTechnologies = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const response = await fetch("/data/technologies.json");

                if (!response.ok) {
                    throw new Error("Failed to load technologies.");
                }

                const data: Technology[] = await response.json();

                setTechnologies(data);
            } catch (error) {
                const message =
                    error instanceof Error
                        ? error.message
                        : "Something went wrong while loading technologies.";

                setError(message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTechnologies();
    }, []);

    return (
        <section
            id="technologies"
            className="scroll-mt-20 bg-white py-16"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                        Explore the{" "}
                        <span className="gradient-text">
                            Technologies
                        </span>
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        Pick the technologies that match your project and build your ideal
                        development stack.
                    </p>
                </div>

                {isLoading && <LoadingSpinner />}

                {!isLoading && error && (
                    <div
                        className="mt-8 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600"
                        role="alert"
                    >
                        {error}
                    </div>
                )}

                {!isLoading && !error && (
                    <div className="mt-8">
                        <p className="text-sm font-medium text-slate-600">
                            {technologies.length} technologies loaded successfully.
                        </p>

                        {/* Temporary list.
                This will be replaced with TechnologyCard in Commit 6. */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {technologies.map((technology) => (
                                <span
                                    key={technology.id}
                                    className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
                                >
                                    {technology.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TechnologySection;