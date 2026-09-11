const LoadingSpinner = () => {
    return (
        <div
            className="flex min-h-64 flex-col items-center justify-center"
            role="status"
            aria-live="polite"
        >
            <div className="h-9 w-9 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500" />

            <p className="mt-3 text-sm text-slate-500">
                Loading technologies...
            </p>
        </div>
    );
};

export default LoadingSpinner;