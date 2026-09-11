import { useEffect, useState } from "react";
import type { Technology } from "../../types/technology";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import StackSidebar from "../StackSidebar/StackSidebar";
import TechnologyCard from "../TechnologyCard/TechnologyCard";

const TechnologySection = () => {
    const [technologies, setTechnologies] = useState<Technology[]>([]);

    const [selectedTechnologies, setSelectedTechnologies] =
        useState<Technology[]>([]);

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

    const handleAddTechnology = (technology: Technology) => {
        const isAlreadySelected = selectedTechnologies.some(
            (item) => item.id === technology.id
        );

        if (isAlreadySelected) {
            return;
        }

        setSelectedTechnologies((previous) => [
            ...previous,
            technology,
        ]);
    };

    const handleRemoveTechnology = (id: string) => {
        setSelectedTechnologies((previous) =>
            previous.filter(
                (technology) => technology.id !== id
            )
        );
    };

    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
    };

    return (
        <section
            id="technologies"
            className="scroll-mt-20 bg-white pb-24 pt-10"
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
                        Pick the technologies you need to build your ideal
                        development stack.
                    </p>
                </div>

                {isLoading ? (
                    <LoadingSpinner />
                ) : error ? (
                    <div
                        className="mt-8 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600"
                        role="alert"
                    >
                        {error}
                    </div>
                ) : (
                    <div className="mt-8 grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_260px] xl:grid-cols-[minmax(0,1fr)_280px]">

                        {/* Technology Grid */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                            {technologies.map((technology) => (
                                <TechnologyCard
                                    key={technology.id}
                                    technology={technology}
                                    isSelected={selectedTechnologies.some(
                                        (selected) =>
                                            selected.id === technology.id
                                    )}
                                    onAdd={handleAddTechnology}
                                />
                            ))}
                        </div>

                        {/* Your Stack */}
                        <StackSidebar
                            selectedTechnologies={selectedTechnologies}
                            onRemove={handleRemoveTechnology}
                            onRemoveAll={handleRemoveAll}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default TechnologySection;