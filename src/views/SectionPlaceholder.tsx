function SectionPlaceholder() {
  return (
    <section
      className="flex flex-col justify-between w-full bg-yellow-50 px-4 py-12 md:px-20"
      role="region"
      aria-label="Section à compléter"
    >
      <div className="text-center w-full py-8">
        <h2 className="font-bold text-2xl md:text-3xl text-gray-900">
          Section à compléter
        </h2>
        <p className="text-gray-600 mt-2">
          Contenu à définir (offres, jeux, album 2025, etc.)
        </p>
      </div>
    </section>
  );
}

export default SectionPlaceholder;
