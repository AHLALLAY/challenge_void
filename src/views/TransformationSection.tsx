function TransformationSection() {
  return (
    <section
      className="flex flex-col justify-between w-full bg-[linear-gradient(90deg,var(--primary-green),var(--secondary-green))] text-white px-4 py-12 md:px-20"
    >
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold">
          Transformez vos ventes en expérience mémorable
        </h1>
        <p className="text-base text-white/90 mt-2">
          YouCanWin offre à vos clients plus qu&apos;un produit : une expérience
          interactive complète autour du football
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-4 mt-8 max-w-5xl mx-auto">
        <div className="flex flex-col justify-center items-center bg-white/10 rounded-lg p-4 w-full md:w-[240px] h-[228px]">
          <div className="bg-white/20 w-20 h-20 flex items-center justify-center rounded-lg shrink-0">
            <svg
              width="24"
              height="27"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3333 10.6668V1.3335L1.33334 16.0002H10.6667V25.3335L22.6667 10.6668H13.3333Z"
                stroke="white"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="font-semibold mt-2">Engagement immédiat</p>
          <p className="font-normal text-center text-sm">
            Chaque produit devient une opportunité de jeu
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-white/10 rounded-lg p-4 w-full md:w-[240px] h-[228px]">
          <div className="bg-white/20 w-20 h-20 flex items-center justify-center rounded-lg shrink-0">
            <svg
              width="27"
              height="24"
              viewBox="0 0 27 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.0907 3.09064C2.53354 3.64779 2.09158 4.30923 1.79004 5.03719C1.48851 5.76514 1.33331 6.54537 1.33331 7.3333C1.33331 8.12124 1.48851 8.90146 1.79004 9.62942C2.09158 10.3574 2.53354 11.0188 3.0907 11.576L13.3334 21.8186L23.576 11.576C24.7013 10.4507 25.3334 8.92461 25.3334 7.3333C25.3334 5.742 24.7013 4.21586 23.576 3.09064C22.4508 1.96541 20.9247 1.33327 19.3334 1.33327C17.7421 1.33327 16.2159 1.96541 15.0907 3.09064L13.3334 4.84797L11.576 3.09064C11.0189 2.53348 10.3574 2.09151 9.62948 1.78998C8.90152 1.48845 8.1213 1.33325 7.33337 1.33325C6.54543 1.33325 5.76521 1.48845 5.03725 1.78998C4.30929 2.09151 3.64785 2.53348 3.0907 3.09064Z"
                stroke="white"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="font-medium mt-2">Fidélisation naturelle</p>
          <p className="text-sm text-center">
            Les clients reviennent pour compléter leur collection
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-white/10 rounded-lg p-4 w-full md:w-[240px] h-[228px]">
          <div className="bg-white/20 w-20 h-20 flex items-center justify-center rounded-lg shrink-0">
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9976 16.9119C19.4411 17.6174 17.7519 17.9824 16.043 17.9824C14.334 17.9824 12.6448 17.6174 11.0883 16.9119M23.131 11.5439C20.6344 11.0916 18.3455 9.85965 16.5929 8.02512C14.8403 6.19058 13.7142 3.84781 13.3763 1.33325C7.41095 1.33325 2.35228 5.49325 1.33362 11.1013M1.33362 16.4693C2.04169 19.0915 3.6183 21.3959 5.80576 23.006C7.99321 24.6161 10.6621 25.4365 13.3763 25.3333C19.3416 25.3333 24.4003 21.1733 25.419 15.5653M8.95495 15.1226C9.22429 14.5839 9.37629 13.9759 9.37629 13.3333C9.37629 12.6906 9.22429 12.0826 8.95495 11.5439C8.55189 10.7381 7.88856 10.0919 7.07241 9.7101C6.25627 9.32831 5.33513 9.23324 4.45821 9.44032C3.5813 9.64739 2.79998 10.1445 2.24084 10.851C1.68169 11.5576 1.37748 12.4322 1.37748 13.3333C1.37748 14.2343 1.68169 15.1089 2.24084 15.8155C2.79998 16.522 3.5813 17.0191 4.45821 17.2262C5.33513 17.4333 6.25627 17.3382 7.07241 16.9564C7.88856 16.5746 8.55189 15.9284 8.95495 15.1226Z"
                stroke="white"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="font-medium mt-2">Viralité organique</p>
          <p className="text-sm text-center">
            Les fans partagent et échangent entre eux
          </p>
        </div>
      </div>
    </section>
  );
}

export default TransformationSection;
