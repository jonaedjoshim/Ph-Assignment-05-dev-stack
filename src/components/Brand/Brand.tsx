interface BrandProps {
    compact?: boolean;
}

const Brand = ({ compact = false }: BrandProps) => {
    return (
        <a href="#home" className="flex items-center gap-2 group">
            <div className="brand-gradient flex h-7 w-7 items-center justify-center rounded-md text-base font-bold text-white shadow-sm transition group-hover:scale-105">
                DS
                {!compact && <span className="sr-only">Dev Stack logo placeholder</span>}
            </div>

            <span className="text-xl font-bold tracking-tight text-slate-900">
                Dev <span className="gradient-text">Stack</span>
            </span>
        </a>
    );
};

export default Brand;