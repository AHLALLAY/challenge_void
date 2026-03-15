const steps = [
  {
    num: 1,
    badgeColor: "bg-green-600",
    iconSrc: "/shopping-cart.svg",
    iconAlt: "Icône chariot",
    title: "Achat produit",
    desc: "Le client achète votre produit en magasin",
  },
  {
    num: 2,
    badgeColor: "bg-green-600",
    iconSrc: null,
    iconAlt: null,
    title: "Scan QR code",
    desc: "Il scanne le code sur l'emballage",
  },
  {
    num: 3,
    badgeColor: "bg-green-600",
    iconSrc: null,
    iconAlt: null,
    title: "Déblocage carte",
    desc: "Une carte digitale est débloquée",
  },
  {
    num: 4,
    badgeColor: "bg-red-600",
    iconSrc: null,
    iconAlt: null,
    title: "Collection",
    desc: "Il complète sa collection",
  },
  {
    num: 5,
    badgeColor: "bg-red-600",
    iconSrc: null,
    iconAlt: null,
    title: "Récompenses",
    desc: "Participe aux tirages",
  },
];

function ParcoursClientSection() {
  return (
    <section className="flex flex-col justify-between w-full bg-white px-4 py-16 md:px-20 fade-in">
      <div className="text-center w-full">
        <h2 className="font-bold text-3xl md:text-4xl text-gray-900">
          Un parcours client simple et engageant
        </h2>
        <span className="text-lg text-gray-700">
          De l&apos;achat du produit à la récompense, en 5 étapes
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mt-12 justify-items-center">
        {steps.map((step) => (
          <div
            key={step.num}
            className="relative flex flex-col items-center text-center w-36 md:w-40 p-4 pt-6 bg-white rounded-2xl border border-gray-100 shadow-sm card-hover hover:shadow-md transition"
          >
            <div
              className={`absolute top-2 right-2 w-6 h-6 ${step.badgeColor} text-white rounded-full flex items-center justify-center font-bold text-xs`}
            >
              {step.num}
            </div>
            {step.iconSrc ? (
              <img
                src={step.iconSrc}
                alt={step.iconAlt ?? ""}
                className="h-10 w-10 border border-green-300 rounded-lg"
              />
            ) : (
              <div className="h-10 w-10" aria-hidden />
            )}
            <h3 className="font-bold text-gray-900 mt-2">{step.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ParcoursClientSection;
