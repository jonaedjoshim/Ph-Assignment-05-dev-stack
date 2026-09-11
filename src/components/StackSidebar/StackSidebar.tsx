const StackSidebar = () => {
    return (
        <aside className="rounded-xl border border-slate-200 bg-white p-5 lg:sticky lg:top-24">
            <h3 className="text-sm font-bold text-slate-900">
                Your Stack
            </h3>

            <p className="mt-1 text-[10px] text-slate-400">
                No technologies selected yet.
            </p>

            <div className="mt-5 flex min-h-28 items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50/50 px-4">
                <p className="text-center text-[10px] leading-5 text-slate-400">
                    Your stack is empty.
                    <br />
                    Add technologies to get started.
                </p>
            </div>
        </aside>
    );
};

export default StackSidebar;