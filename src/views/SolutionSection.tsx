import { useState } from "react";

function SolutionSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full bg-white px-4 py-16 md:px-20 fade-in">
      <div className="w-full md:w-1/2 flex justify-center">
        {!imgError ? (
          <img
            src="/img1.jpg"
            alt="Interface YouCanWin - overlay et ombre"
            className="rounded-2xl shadow-lg max-w-full h-auto min-h-[200px] bg-gray-100 object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="rounded-2xl shadow-lg w-full min-h-[280px] bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
            Image à venir
          </div>
        )}
      </div>
      <div className="w-full md:w-1/2 space-y-6 text-left">
        <span className="inline-block text-green-600 bg-green-100/60 px-2 rounded-lg font-semibold text-sm tracking-wide">
          Solution complète
        </span>
        <h2 className="font-bold text-2xl md:text-3xl text-gray-900 leading-tight">
          Le terrain de jeu digital de votre marque
        </h2>
        <p className="text-gray-600 leading-relaxed">
          YouCanWin transforme vos produits en expériences interactives.
          <br />
          Chaque achat devient une opportunité d&apos;engagement avec vos consommateurs.
        </p>
        <div className="space-y-3">
          <div className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm card-hover hover:shadow-md transition">
            <span className="text-green-600 text-xl shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </span>
            <div>
              <h3 className="font-bold text-gray-900">Activation instantanée</h3>
              <p className="text-sm text-gray-600 mt-0.5">QR codes uniques sur chaque produit</p>
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm card-hover hover:shadow-md transition">
            <span className="text-green-500 text-xl shrink-0 bg-card-icon rounded-lg p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
            <div>
              <h3 className="font-bold text-gray-900">Collection digitale</h3>
              <p className="text-sm text-gray-600 mt-0.5">Cartes de joueurs, raretés, échanges</p>
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm card-hover hover:shadow-md transition">
            <span className="text-green-500 text-xl shrink-0 bg-card-icon rounded-lg p-2">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33331 5.00004V15.8334M8.33331 5.00004V3.33337C8.33331 3.00374 8.43106 2.68151 8.6142 2.40742C8.79733 2.13334 9.05763 1.91972 9.36217 1.79358C9.66672 1.66743 10.0018 1.63442 10.3251 1.69873C10.6484 1.76304 10.9454 1.92178 11.1785 2.15486C11.4116 2.38795 11.5703 2.68492 11.6346 3.00822C11.6989 3.33153 11.6659 3.66664 11.5398 3.97118C11.4136 4.27572 11.2 4.53602 10.9259 4.71916C10.6518 4.90229 10.3296 5.00004 9.99998 5.00004H8.33331ZM8.33331 5.00004V2.91671C8.33331 2.50466 8.21113 2.10187 7.98221 1.75927C7.75329 1.41667 7.42792 1.14964 7.04724 0.991959C6.66656 0.834277 6.24767 0.79302 5.84354 0.873406C5.43941 0.953792 5.0682 1.15221 4.77684 1.44357C4.48548 1.73493 4.28706 2.10614 4.20668 2.51027C4.12629 2.9144 4.16755 3.33329 4.32523 3.71397C4.48291 4.09464 4.74994 4.42002 5.09254 4.64894C5.43514 4.87786 5.83794 5.00004 6.24998 5.00004H8.33331ZM2.49998 8.33337H14.1666M2.49998 8.33337C2.05795 8.33337 1.63403 8.15778 1.32147 7.84522C1.00891 7.53266 0.833313 7.10874 0.833313 6.66671C0.833313 6.22468 1.00891 5.80076 1.32147 5.4882C1.63403 5.17564 2.05795 5.00004 2.49998 5.00004H14.1666C14.6087 5.00004 15.0326 5.17564 15.3452 5.4882C15.6577 5.80076 15.8333 6.22468 15.8333 6.66671C15.8333 7.10874 15.6577 7.53266 15.3452 7.84522C15.0326 8.15778 14.6087 8.33337 14.1666 8.33337M2.49998 8.33337V14.1667C2.49998 14.6087 2.67557 15.0327 2.98813 15.3452C3.3007 15.6578 3.72462 15.8334 4.16665 15.8334H12.5C12.942 15.8334 13.3659 15.6578 13.6785 15.3452C13.9911 15.0327 14.1666 14.6087 14.1666 14.1667V8.33337" stroke="#16A34A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <h3 className="font-bold text-gray-900">Récompenses exclusives</h3>
              <p className="text-sm text-gray-600 mt-0.5">
                Tirages au sort, lots partenaires, expériences VIP
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm card-hover hover:shadow-md transition">
            <span className="text-green-500 text-xl shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </span>
            <div>
              <h3 className="font-bold text-gray-900">Analytics avancés</h3>
              <p className="text-sm text-gray-600 mt-0.5">Dashboard temps réel, insights consommateurs</p>
            </div>
          </div>
        </div>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          aria-label="Planifier une démo"
        >
          Planifier une démo
          <span className="text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}

export default SolutionSection;
