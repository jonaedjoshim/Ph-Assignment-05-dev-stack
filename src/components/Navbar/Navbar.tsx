import { Menu, X } from "lucide-react";
import { useState } from "react";
import Brand from "../Brand/Brand";
import { navigationLinks } from "../../constants/navigation";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen((previous) => !previous);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Desktop brand */}
                <div className="hidden md:block">
                    <Brand />
                </div>

                {/* Mobile hamburger */}
                <button
                    type="button"
                    onClick={handleMenuToggle}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                    className="flex h-9 w-9 items-center justify-center rounded-md text-slate-700 transition hover:bg-slate-100 md:hidden"
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {/* Mobile centered brand */}
                <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
                    <Brand compact />
                </div>

                {/* Desktop navigation */}
                <nav
                    className="hidden items-center gap-7 md:flex"
                    aria-label="Main navigation"
                >
                    {navigationLinks.map((link, index) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`text-xs font-medium transition-colors hover:text-pink-500 ${index === 0 ? "text-pink-500" : "text-slate-600"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Authentication buttons */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <button
                        type="button"
                        className="text-[10px] font-medium text-slate-700 transition hover:text-pink-500 sm:text-xs"
                    >
                        Sign In
                    </button>

                    <button
                        type="button"
                        className="bg-pink-600 text-white hover:bg-pink-500 rounded-full px-3 py-2 text-[9px] font-semibold transition hover:opacity-90 sm:px-4 sm:text-xs"
                    >
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Mobile navigation */}
            {isMenuOpen && (
                <nav
                    className="border-t border-slate-100 bg-white px-4 py-3 md:hidden"
                    aria-label="Mobile navigation"
                >
                    <div className="mx-auto flex max-w-7xl flex-col">
                        {navigationLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={handleMenuClose}
                                className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700 transition-colors last:border-b-0 hover:text-pink-500"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Navbar;