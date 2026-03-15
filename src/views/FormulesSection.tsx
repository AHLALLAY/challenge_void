const CheckIcon = ({ color = "#16A34A" }: { color?: string }) => (
  <svg
    width="14"
    height="10"
    viewBox="0 0 14 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.833328 5.8335L4.16666 9.16683L12.5 0.833496"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function FormulesSection() {
  return (
    <section className="section-formules fade-in" id="offres">
      <div className="section-formules__header">
        <h2 className="section-formules__title">
          Des formules adaptées à votre échelle
        </h2>
        <p className="section-formules__subtitle">
          Choisissez la solution qui correspond à vos besoins et votre ambition
        </p>
      </div>
      <div className="formules-grid">
        <div className="pricing-card">
          <span className="pricing-card__icon">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 8V1L1.00002 12H8.00002V19L17 8H10Z"
                stroke="#16A34A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="pricing-card__content">
            <p className="pricing-card__name">Starter</p>
            <p className="pricing-card__tagline">Campagne locale</p>
            <p className="pricing-card__desc">Idéal pour tester sur un marché</p>
            <p className="pricing-card__price">
              Tarification sur mesure selon vos volumes
            </p>
            <ul className="pricing-card__features">
              {[
                "Jusqu'à 1000 utilisateurs",
                "Jusqu'à 10K QR codes",
                "1 pays / région",
                "Album standard (équipe nationale)",
                "Hébergement Cloud sécurisé",
                "Backoffice simplifié",
                "Support par email",
                "1 marque",
              ].map((text, i) => (
                <li key={i} className="pricing-card__feature">
                  <CheckIcon />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <button className="pricing-card__cta" type="button">
              Demander un devis
            </button>
          </div>
        </div>

        <div className="pricing-card pricing-card--scale">
          <div className="pricing-card__badge">POPULAIRE</div>
          <span className="pricing-card__icon">
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1H19M19 1V9M19 1L11 9L7 5L1 11"
                stroke="#DC2626"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="pricing-card__content">
            <p className="pricing-card__name">Scale</p>
            <p className="pricing-card__tagline">Expansion nationale</p>
            <p className="pricing-card__desc">Pour des campagnes d&apos;envergure</p>
            <p className="pricing-card__price">
              Tarification sur mesure selon vos volumes
            </p>
            <ul className="pricing-card__features">
              {[
                "Jusqu'à 50 000 utilisateurs",
                "QR codes illimités",
                "Multi-pays (jusqu'à 5)",
                "Album complet (toutes les équipes)",
                "Cloud ou On-Premise",
                "Backoffice avancé avec analytics",
                "Support prioritaire 24/7",
                "Jusqu'à 3 marques",
                "API REST disponible",
              ].map((text, i) => (
                <li key={i} className="pricing-card__feature">
                  <CheckIcon color="#DC2626" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <button className="pricing-card__cta pricing-card__cta--primary" type="button">
              Planifier une démo
            </button>
          </div>
        </div>

        <div className="pricing-card">
          <span className="pricing-card__icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.055 9H3C3.53043 9 4.03914 9.21071 4.41421 9.58579C4.78929 9.96086 5 10.4696 5 11V12C5 12.5304 5.21071 13.0391 5.58579 13.4142C5.96086 13.7893 6.46957 14 7 14C7.53043 14 8.03914 14.2107 8.41421 14.5858C8.78929 14.9609 9 15.4696 9 16V18.945M6 1.935V3.5C6 4.16304 6.26339 4.79893 6.73223 5.26777C7.20107 5.73661 7.83696 6 8.5 6H9C9.53043 6 10.0391 6.21071 10.4142 6.58579C10.7893 6.96086 11 7.46957 11 8C11 8.53043 11.2107 9.03914 11.5858 9.41421C11.9609 9.78929 12.4696 10 13 10C13.5304 10 14.0391 9.78929 14.4142 9.41421C14.7893 9.03914 15 8.53043 15 8C15 7.46957 15.2107 6.96086 15.5858 6.58579C15.9609 6.21071 16.4696 6 17 6H18.064M13 18.488V16C13 15.4696 13.2107 14.9609 13.5858 14.5858C13.9609 14.2107 14.4696 14 15 14H18.064M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                stroke="#16A34A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="pricing-card__content">
            <p className="pricing-card__name">Entreprise</p>
            <p className="pricing-card__tagline">Solution globale</p>
            <p className="pricing-card__desc">Pour les groupes internationaux</p>
            <p className="pricing-card__price">
              Tarification sur mesure selon vos volumes
            </p>
            <ul className="pricing-card__features">
              {[
                "Utilisateurs illimités",
                "QR codes illimités",
                "Déploiement mondial",
                "Albums personnalisés par région",
                "Infrastructure dédiée (On-Premise)",
                "Multi-marques illimité",
                "Développements sur-mesure",
                "Account manager dédié",
                "SLA garanti 99.9%",
                "Formation et onboarding complet",
              ].map((text, i) => (
                <li key={i} className="pricing-card__feature">
                  <CheckIcon />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <button className="pricing-card__cta" type="button">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormulesSection;
