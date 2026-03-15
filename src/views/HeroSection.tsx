function HeroSection() {
  return (
    <section id="album" className="flex flex-col md:flex-row justify-between w-full bg-white px-4 py-16 md:px-20 fade-in" role="region" aria-labelledby="hero-title">
      <div className="w-full md:w-1/2 text-left">
        <h1 id="hero-title" className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
          Transformez chaque{" "}
          <span className="relative inline-block">
            <span
              className="bg-[linear-gradient(90deg,var(--primary-green),var(--secondary-green))] bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}
            >
              produit
            </span>
            <svg
              className="absolute left-0 bottom-0 w-full overflow-visible text-green-600"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
              style={{ height: 8, marginBottom: -4 }}
            >
              <path
                d="M 0 10 Q 50 0 100 10"
                fill="none"
                stroke="currentColor"
                strokeWidth={6}
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          en expérience de jeu
        </h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          YouCanWin connecte vos marques aux fans de football à travers des
          mécaniques de gamification innovantes.{" "}
          <span className="font-bold text-gray-800">
            Codes QR, cartes digitales, défis et récompenses.
          </span>
        </p>
        <div className="mt-6 md:mt-8 flex justify-between gap-2 md:gap-4 max-w-md">
          <div className="flex flex-col text-center p-2 md:p-3 min-w-[70px] md:min-w-[100px]">
            <p className="text-green-600 font-bold text-lg md:text-xl">500K+</p>
            <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">Interactions/mois</p>
          </div>
          <div className="flex flex-col text-center p-2 md:p-3 min-w-[70px] md:min-w-[100px]">
            <p className="text-red-600 font-bold text-lg md:text-xl">50+</p>
            <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">Marques actives</p>
          </div>
          <div className="flex flex-col text-center p-2 md:p-3 min-w-[70px] md:min-w-[100px]">
            <p className="text-green-600 font-bold text-lg md:text-xl">x3.5</p>
            <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">ROI moyen</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          <button className="btn-primary group" aria-label="Voir la démo">
            Voir la démo{" "}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              &gt;
            </span>
          </button>
          <button
            className="btn-secondary flex items-center gap-2"
            aria-label="Comment ça marche"
          >
            <svg
              className="w-5 h-5 shrink-0 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.65 4.65 0 0 1 8.91 14" />
              <line x1="12" y1="6" x2="12" y2="0" opacity="0.8" />
              <line x1="20" y1="11" x2="23" y2="11" opacity="0.8" />
              <line x1="12" y1="18" x2="12" y2="21" opacity="0.8" />
              <line x1="4" y1="11" x2="1" y2="11" opacity="0.8" />
              <line x1="7" y1="5" x2="3" y2="1" opacity="0.8" />
            </svg>
            Comment ça marche
          </button>
        </div>
        <div className="mt-16 md:mt-32">
          <p className="trust-title">ILS NOUS FONT CONFIANCE</p>
          <div className="flex flex-wrap gap-3 md:gap-4 trust-names text-gray-700">
            <p>Maroc Telecom</p>
            <p>Inwi</p>
            <p>Orange</p>
            <p>Carrefour</p>
          </div>
        </div>
      </div>

      <div className="relative mt-8 md:mt-0 w-full md:w-1/2 flex flex-col items-center justify-center album-frame rounded-2xl md:rounded-3xl bg-white/50 min-h-[240px] md:min-h-[280px]">
        <div className="flex items-center absolute -top-3 -right-3 md:-top-8 md:-right-16 z-50 rounded-lg md:rounded-xl bg-white p-2 md:p-4 shadow-lg border border-gray-100 max-w-[180px] md:max-w-[300px] h-14 md:h-20 gap-2 md:gap-4">
          <div className="rounded-lg bg-[#DCFCE7] w-8 h-8 md:w-12 md:h-12 flex items-center justify-center shrink-0">
            <svg
              className="w-4 h-4 md:w-7 md:h-7 text-green-700"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm8-2h6v6h-6V3zm2 2v2h2V5h-2zM3 15h6v6H3v-6zm2 2v2h2v-2H5zm8-2h6v6h-6v-6zm2 2v2h2v-2h-2z" />
            </svg>
          </div>
          <div className="min-w-0">
            <h2 className="font-semibold text-[#0F172A] text-xs md:text-sm">Scan QR Code</h2>
            <p className="text-[#64748B] text-[10px] md:text-xs mt-0.5">Débloquer une carte</p>
          </div>
        </div>

        <div className="album-mockup-header w-full">
          <div className="ml-3 md:ml-6 pt-2 md:pt-4 space-y-3 md:space-y-6">
            <div className="space-y-1 md:space-y-2">
              <p className="text-2xs font-medium">ALBUM DIGITAL 2025</p>
              <p className="font-bold text-sm md:text-base">Ma Collection</p>
            </div>
            <div className="flex space-x-2 md:space-x-4">
              <div className="flex flex-col">
                <h2 className="font-bold">127</h2>
                <span>Cartes</span>
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold">76%</h2>
                <span>Complet</span>
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold">#12</h2>
                <span>Rang</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 md:gap-4 p-2 md:p-4 flex-1 w-full max-w-full justify-items-center">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="card-placeholder rounded-lg w-[72px] h-[96px] md:w-[128px] md:h-[170.66px]"
            />
          ))}
        </div>

        <nav className="album-mockup-nav relative flex items-center justify-around w-full py-2 md:py-3 px-3 md:px-4 border-t border-gray-200 bg-white/80 shadow-[0_-1px_3px_rgba(0,0,0,0.06)]">
          <div className="flex flex-col items-center gap-1 md:gap-1.5">
            <div className="card-placeholder rounded-lg w-8 h-8 md:w-10 md:h-10" />
            <span className="text-[10px] md:text-xs text-gray-600">Scanner</span>
          </div>
          <div className="flex flex-col items-center gap-1 md:gap-1.5">
            <div className="card-placeholder rounded-lg w-8 h-8 md:w-10 md:h-10" />
            <span className="text-[10px] md:text-xs text-gray-600">Échanges</span>
          </div>
          <div className="flex flex-col items-center gap-1 md:gap-1.5">
            <div className="card-placeholder rounded-lg w-8 h-8 md:w-10 md:h-10" />
            <span className="text-[10px] md:text-xs text-gray-600">Profil</span>
          </div>
        </nav>

        <div className="absolute -bottom-3 -left-3 md:-bottom-10 md:-left-40 z-50 flex items-center rounded-lg md:rounded-xl bg-white p-2 md:p-4 shadow-lg border border-gray-100 max-w-[160px] md:max-w-[280px] h-14 md:h-auto gap-2 md:gap-4">
          <div className="rounded-lg bg-red-100 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shrink-0">
            <svg
              className="w-4 h-4 md:w-5 md:h-5 text-red-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 12v10H4V12" />
              <path d="M2 7h20v5H2z" />
              <path d="M12 22V7" />
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
            </svg>
          </div>
          <div className="min-w-0">
            <h2 className="font-semibold text-[#0F172A] text-xs md:text-sm">Récompense</h2>
            <p className="text-[#64748B] text-[10px] md:text-xs mt-0.5">Tirage hebdomadaire</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
