import { useState } from "react";

const catalogueItems = [
  {
    title: "Album digital 2025",
    desc: "Collection de cartes avec échanges et défis.",
    badge: "STAR",
    img: "/album-digital-2025.jpg",
    alt: "Album digital 2025",
  },
  {
    title: "Quiz Football",
    desc: "Questions sur l'actualité et l'histoire de foot.",
    badge: "BIENTÔT",
    img: "/quiz-football.jpg",
    alt: "Quiz Football",
    fallbackImg: "/quiz-football.png",
  },
  {
    title: "Tombola digitale",
    desc: "Tirages au sort avec lots sponsorisés.",
    badge: null,
    img: "/tombola-digitale.png",
    alt: "Tombola digitale",
  },
  {
    title: "Pronostics",
    desc: "Collection de cartes avec échanges et défis.",
    badge: null,
    img: "/pronostics.png",
    alt: "Pronostics",
  },
];

function CatalogueSection() {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const [srcFallback, setSrcFallback] = useState<Record<number, string>>({});

  const handleImageError = (index: number, item: (typeof catalogueItems)[0]) => {
    const fallback = "fallbackImg" in item && item.fallbackImg;
    const currentSrc = srcFallback[index] ?? item.img;
    if (fallback && currentSrc === item.img) {
      setSrcFallback((prev) => ({ ...prev, [index]: item.fallbackImg! }));
    } else {
      setFailedImages((prev) => new Set(prev).add(index));
    }
  };

  return (
    <section className="section-catalogue" id="jeux">
      <div className="section-catalogue__header">
        <h2 className="section-catalogue__title">Catalogue de jeux</h2>
        <p className="section-catalogue__subtitle">
          Des mécaniques éprouvées pour engager vos audiences
        </p>
      </div>
      <div className="section-catalogue__grid">
        {catalogueItems.map((item, i) => (
          <div key={i} className="catalogue-card">
            {item.badge && (
              <div
                className={`catalogue-card__badge catalogue-card__badge--${item.badge === "STAR" ? "star" : "bientot"}`}
              >
                {item.badge}
              </div>
            )}
            <div className="catalogue-card__media">
              {item.img && !failedImages.has(i) ? (
                <img
                  src={srcFallback[i] ?? item.img}
                  className="catalogue-card__img"
                  alt={item.alt}
                  onError={() => handleImageError(i, item)}
                />
              ) : (
                <div
                  className="catalogue-card__img"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--card-placeholder-start), var(--card-placeholder-end))",
                  }}
                  aria-hidden
                />
              )}
            </div>
            <div className="catalogue-card__body">
              <h3 className="catalogue-card__title">{item.title}</h3>
              <p className="catalogue-card__desc">{item.desc}</p>
              {i === 0 && (
                <a href="#" className="catalogue-card__link">
                  Découvrir &gt;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CatalogueSection;
