import Logo from "../../../components/Logo";

export default function Footer() {
    return (
        <footer className="bg-zinc-100 dark:bg-zinc-900 font-bold w-full mt-auto">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-12 py-12 md:py-16 max-w-screen-2xl mx-auto">

                {/* Brand - always first */}
                <div className="md:col-span-1">
                    <div className="flex justify-center md:justify-start mb-4">
                        <Logo />
                    </div>
                    <p className="text-zinc-400 text-xs leading-relaxed text-center md:text-left md:max-w-xs">
                        Elevating the everyday through curated design and intentional living.
                        Silence is the ultimate luxury.
                    </p>
                </div>

                {/* Newsletter - first on md+, last on mobile */}
                <div className="flex flex-col gap-4 md:col-span-1 order-last md:order-none">
                    <span className="text-xs uppercase tracking-widest text-primary font-bold">
                        Newsletter
                    </span>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-zinc-200 dark:bg-zinc-800 rounded-l-md px-4 py-2 w-full text-xs outline-none focus:ring-1 focus:ring-primary"
                        />
                        <button className="bg-primary text-white px-4 py-2 rounded-r-md text-xs font-bold hover:bg-primary/80 transition-colors">
                            Join
                        </button>
                    </div>
                </div>

                {/* Discover & Connect - second on md+, first on mobile? Actually last on mobile */}
                <div className="flex flex-row gap-8 md:col-span-2 order-none md:order-none">
                    {/* Discover */}
                    <div className="flex flex-col gap-4 flex-1">
                        <span className="text-xs uppercase tracking-widest text-primary font-bold">
                            Discover
                        </span>
                        <a className="text-zinc-400 dark:text-zinc-500 hover:text-primary transition-colors text-xs uppercase tracking-widest cursor-pointer">
                            Shop All
                        </a>
                        <a className="text-zinc-400 dark:text-zinc-500 hover:text-primary transition-colors text-xs uppercase tracking-widest cursor-pointer">
                            New Arrivals
                        </a>
                        <a className="text-zinc-400 dark:text-zinc-500 hover:text-primary transition-colors text-xs uppercase tracking-widest cursor-pointer">
                            Sustainability
                        </a>
                    </div>

                    {/* Connect */}
                    <div className="flex flex-col gap-4 flex-1">
                        <span className="text-xs uppercase tracking-widest text-primary font-bold">
                            Connect
                        </span>
                        <a className="text-zinc-400 dark:text-zinc-500 hover:text-primary transition-colors text-xs uppercase tracking-widest cursor-pointer">
                            Privacy Policy
                        </a>
                        <a className="text-zinc-400 dark:text-zinc-500 hover:text-primary transition-colors text-xs uppercase tracking-widest cursor-pointer">
                            Terms of Service
                        </a>
                        <a className="text-zinc-400 dark:text-zinc-500 hover:text-primary transition-colors text-xs uppercase tracking-widest cursor-pointer">
                            Contact Us
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="px-4 md:px-12 py-6 border-t border-zinc-200 dark:border-zinc-800 text-center text-[10px] text-zinc-400 tracking-widest uppercase">
                © 2026 Fabric Flora. All rights reserved.
            </div>

        </footer>
    );
}