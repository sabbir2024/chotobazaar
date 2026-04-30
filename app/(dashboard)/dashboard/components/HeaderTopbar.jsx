export default function HeaderTopbar({ user }) {
    return (
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <span className="text-primary  font-bold text-xs uppercase tracking-[0.2em] mb-2 block">
                    Executive Overview
                </span>
                <h1 className="text-2xl sm:text-3xl dark:text-white md:text-4xl font-black tracking-tighter text-on-surface">
                    Good Morning, <span className="uppercase text-primary">{user?.user?.name}</span>.
                </h1>
            </div>

            {/* User Profile Card */}
            <div className="bg-surface-container-lowest p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-outline-variant/10 group hover:scale-[1.02] transition-transform duration-300">
                <div className="relative">
                    <img
                        alt="User Profile"
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh-V43BcDKnkU-xwTBMX5ter6T9vO4vXKSWRDlfbgXVPVKMrTjWmm43VvrxtRdnJwwoTFmNeuLDSaHQfuyFTxMtqDUoPhMavF6BrPNBE8eyDLr14Eiz9UhAmFu4z5ICtzPK0HmBtUNi05XJ2tsmeiK0M2MQDKxRJGpuewp2aAk7A4FjaFS-7ODxbS4KdeIEeEv4F0tN1INqhkvP3ef1ERBkEfOlykM8FvDCRqR-y9Tmm21BfaoxlKuOPV8eIAr0neEGRLgkNecpA"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-primary text-on-primary w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center border-2 border-white">
                        <span className="material-symbols-outlined text-[10px] sm:text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                            verified
                        </span>
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold dark:text-primary uppercase truncate">{user?.user?.name}</h3>
                    <p className="text-xs text-on-surface-variant truncate">{user?.user?.email}</p>
                </div>
                <button className="text-[10px] font-bold uppercase tracking-widest px-2 sm:px-3 py-1.5 sm:py-2 bg-surface-container-low text-primary rounded-lg hover:bg-primary hover:text-on-primary transition-colors whitespace-nowrap">
                    Edit Profile
                </button>
            </div>
        </header>
    );
}