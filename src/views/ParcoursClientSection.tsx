const svgProps = { width: 40, height: 40, viewBox: "0 0 24 24", fill: "none" as const, xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true };
const stroke = "currentColor";
const strokeWidth = "1";
const strokeLine = "round";
const strokeJoin = "round";

const StepIcons = {
  cart: (
    <svg {...svgProps} className="text-green-600" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap={strokeLine} strokeLinejoin={strokeJoin}>
      <path d="M1 1H3L3.4 3M3.4 3H19L15 11H5M3.4 3L5 11M5 11L2.707 13.293C2.077 13.923 2.523 15 3.414 15H15M15 15C14.4696 15 13.9609 15.2107 13.5858 15.5858C13.2107 15.9609 13 16.4696 13 17C13 17.5304 13.2107 18.0391 13.5858 18.4142C13.9609 18.7893 14.4696 19 15 19C15.5304 19 16.0391 18.7893 16.4142 18.4142C16.7893 18.0391 17 17.5304 17 17C17 16.4696 16.7893 15.9609 16.4142 15.5858C16.0391 15.2107 15.5304 15 15 15ZM7 17C7 17.5304 6.78929 18.0391 6.41421 18.4142C6.03914 18.7893 5.53043 19 5 19C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17C3 16.4696 3.21071 15.9609 3.58579 15.5858C3.96086 15.2107 4.46957 15 5 15C5.53043 15 6.03914 15.2107 6.41421 15.5858C6.78929 15.9609 7 16.4696 7 17Z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  scan: (
    <svg {...svgProps} className="text-green-600" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap={strokeLine} strokeLinejoin={strokeJoin}>
      <path d="M9 1V2M15 13H17M11 13H9V17M9 6V9M9 9H9.01M9 9H13.01M13 17H17M1 9H5M17 9H17.01M2 5H4C4.26522 5 4.51957 4.89464 4.70711 4.70711C4.89464 4.51957 5 4.26522 5 4V2C5 1.73478 4.89464 1.48043 4.70711 1.29289C4.51957 1.10536 4.26522 1 4 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V4C1 4.26522 1.10536 4.51957 1.29289 4.70711C1.48043 4.89464 1.73478 5 2 5ZM14 5H16C16.2652 5 16.5196 4.89464 16.7071 4.70711C16.8946 4.51957 17 4.26522 17 4V2C17 1.73478 16.8946 1.48043 16.7071 1.29289C16.5196 1.10536 16.2652 1 16 1H14C13.7348 1 13.4804 1.10536 13.2929 1.29289C13.1054 1.48043 13 1.73478 13 2V4C13 4.26522 13.1054 4.51957 13.2929 4.70711C13.4804 4.89464 13.7348 5 14 5ZM2 17H4C4.26522 17 4.51957 16.8946 4.70711 16.7071C4.89464 16.5196 5 16.2652 5 16V14C5 13.7348 4.89464 13.4804 4.70711 13.2929C4.51957 13.1054 4.26522 13 4 13H2C1.73478 13 1.48043 13.1054 1.29289 13.2929C1.10536 13.4804 1 13.7348 1 14V16C1 16.2652 1.10536 16.5196 1.29289 16.7071C1.48043 16.8946 1.73478 17 2 17Z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  card: (
    <svg {...svgProps} className="text-green-600" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap={strokeLine} strokeLinejoin={strokeJoin}>
      <path d="M17 9H3M17 9C17.5304 9 18.0391 9.21071 18.4142 9.58579C18.7893 9.96086 19 10.4696 19 11V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V11C1 10.4696 1.21071 9.96086 1.58579 9.58579C1.96086 9.21071 2.46957 9 3 9M17 9V7C17 6.46957 16.7893 5.96086 16.4142 5.58579C16.0391 5.21071 15.5304 5 15 5M3 9V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5M15 5V3C15 2.46957 14.7893 1.96086 14.4142 1.58579C14.0391 1.21071 13.5304 1 13 1H7C6.46957 1 5.96086 1.21071 5.58579 1.58579C5.21071 1.96086 5 2.46957 5 3V5M15 5H5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  collection: (
    <svg {...svgProps} className="text-green-600" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap={strokeLine} strokeLinejoin={strokeJoin}>
      <path d="M10 3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V4C14 4.26522 14.1054 4.51957 14.2929 4.70711C14.4804 4.89464 14.7348 5 15 5H18C18.2652 5 18.5196 5.10536 18.7071 5.29289C18.8946 5.48043 19 5.73478 19 6V9C19 9.26522 18.8946 9.51957 18.7071 9.70711C18.5196 9.89464 18.2652 10 18 10H17C16.4696 10 15.9609 10.2107 15.5858 10.5858C15.2107 10.9609 15 11.4696 15 12C15 12.5304 15.2107 13.0391 15.5858 13.4142C15.9609 13.7893 16.4696 14 17 14H18C18.2652 14 18.5196 14.1054 18.7071 14.2929C18.8946 14.4804 19 14.7348 19 15V18C19 18.2652 18.8946 18.5196 18.7071 18.7071C18.5196 18.8946 18.2652 19 18 19H15C14.7348 19 14.4804 18.8946 14.2929 18.7071C14.1054 18.5196 14 18.2652 14 18V17C14 16.4696 13.7893 15.9609 13.4142 15.5858C13.0391 15.2107 12.5304 15 12 15C11.4696 15 10.9609 15.2107 10.5858 15.5858C10.2107 15.9609 10 16.4696 10 17V18C10 18.2652 9.89464 18.5196 9.70711 18.7071C9.51957 18.8946 9.26522 19 9 19H6C5.73478 19 5.48043 18.8946 5.29289 18.7071C5.10536 18.5196 5 18.2652 5 18V15C5 14.7348 4.89464 14.4804 4.70711 14.2929C4.51957 14.1054 4.26522 14 4 14H3C2.46957 14 1.96086 13.7893 1.58579 13.4142C1.21071 13.0391 1 12.5304 1 12C1 11.4696 1.21071 10.9609 1.58579 10.5858C1.96086 10.2107 2.46957 10 3 10H4C4.26522 10 4.51957 9.89464 4.70711 9.70711C4.89464 9.51957 5 9.26522 5 9V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H9C9.26522 5 9.51957 4.89464 9.70711 4.70711C9.89464 4.51957 10 4.26522 10 4V3Z" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  reward: (
    <svg {...svgProps} className="text-green-600" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap={strokeLine} strokeLinejoin={strokeJoin}>
      <path d="M10 6V19M10 6V4C10 3.60444 10.1173 3.21776 10.3371 2.88886C10.5568 2.55996 10.8692 2.30362 11.2346 2.15224C11.6001 2.00087 12.0022 1.96126 12.3902 2.03843C12.7781 2.1156 13.1345 2.30608 13.4142 2.58579C13.6939 2.86549 13.8844 3.22186 13.9616 3.60982C14.0387 3.99778 13.9991 4.39992 13.8478 4.76537C13.6964 5.13082 13.44 5.44318 13.1111 5.66294C12.7822 5.8827 12.3956 6 12 6H10ZM10 6V3.5C10 3.00555 9.85338 2.5222 9.57867 2.11108C9.30397 1.69995 8.91352 1.37952 8.45671 1.1903C7.99989 1.00108 7.49723 0.951575 7.01227 1.04804C6.52732 1.1445 6.08186 1.3826 5.73223 1.73223C5.3826 2.08187 5.1445 2.52732 5.04804 3.01228C4.95157 3.49723 5.00108 3.99989 5.1903 4.45671C5.37952 4.91352 5.69995 5.30397 6.11107 5.57867C6.5222 5.85338 7.00555 6 7.5 6H10ZM3 10H17M3 10C2.46957 10 1.96086 9.78929 1.58579 9.41421C1.21071 9.03914 1 8.53043 1 8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21072 2.46957 6 3 6H17C17.5304 6 18.0391 6.21072 18.4142 6.58579C18.7893 6.96086 19 7.46957 19 8C19 8.53043 18.7893 9.03914 18.4142 9.41421C18.0391 9.78929 17.5304 10 17 10M3 10V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H15C15.5304 19 16.0391 18.7893 16.4142 18.4142C16.7893 18.0391 17 17.5304 17 17V10" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
} as const;

type StepIconKey = keyof typeof StepIcons;

const steps: { num: number; badgeColor: string; iconBg: string; iconBorder: string; iconShadow: string; icon: StepIconKey; title: string; desc: string }[] = [
  { num: 1, badgeColor: "bg-green-600", iconBg: "bg-emerald-50", iconBorder: "border-emerald-200", iconShadow: "shadow-[0_2px_8px_rgba(16,185,129,0.15)]", icon: "cart", title: "Achat produit", desc: "Le client achète votre produit en magasin" },
  { num: 2, badgeColor: "bg-green-600", iconBg: "bg-emerald-50", iconBorder: "border-emerald-200", iconShadow: "shadow-[0_2px_8px_rgba(16,185,129,0.15)]", icon: "scan", title: "Scan QR code", desc: "Il scanne le code sur l'emballage" },
  { num: 3, badgeColor: "bg-green-600", iconBg: "bg-emerald-50", iconBorder: "border-emerald-200", iconShadow: "shadow-[0_2px_8px_rgba(16,185,129,0.15)]", icon: "card", title: "Déblocage carte", desc: "Une carte digitale est débloquée" },
  { num: 4, badgeColor: "bg-red-600", iconBg: "bg-red-50", iconBorder: "border-red-200", iconShadow: "shadow-[0_2px_8px_rgba(239,68,68,0.12)]", icon: "collection", title: "Collection", desc: "Il complète sa collection" },
  { num: 5, badgeColor: "bg-red-600", iconBg: "bg-red-50", iconBorder: "border-red-200", iconShadow: "shadow-[0_2px_8px_rgba(239,68,68,0.12)]", icon: "reward", title: "Récompenses", desc: "Participe aux tirages" },
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
              <div className={`flex items-center justify-center h-12 w-12 rounded-xl border ${step.iconBorder} ${step.iconBg} ${step.iconShadow} transition-shadow hover:shadow-md`}>
                {StepIcons[step.icon]}
              </div>
            <h3 className="font-bold text-gray-900 mt-2">{step.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ParcoursClientSection;
