function CtaSection() {
  return (
    <section className="section-cta">
      <h2 className="section-cta__title">
        Prêt à transformer votre marketing ?
      </h2>
      <p className="section-cta__text">
        Rejoignez les marques qui engagent leurs fans avec YouCanWin
      </p>
      <div className="section-cta__buttons">
        <button
          type="button"
          className="btn-cta-primary"
          aria-label="Planifier une démo gratuite"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M5.00001 4.16683V0.833496M11.6667 4.16683V0.833496M4.16668 7.50016H12.5M2.50001 15.8335H14.1667C14.6087 15.8335 15.0326 15.6579 15.3452 15.3453C15.6577 15.0328 15.8333 14.6089 15.8333 14.1668V4.16683C15.8333 3.7248 15.6577 3.30088 15.3452 2.98832C15.0326 2.67576 14.6087 2.50016 14.1667 2.50016H2.50001C2.05798 2.50016 1.63406 2.67576 1.3215 2.98832C1.00894 3.30088 0.833344 3.7248 0.833344 4.16683V14.1668C0.833344 14.6089 1.00894 15.0328 1.3215 15.3453C1.63406 15.6579 2.05798 15.8335 2.50001 15.8335Z"
              stroke="currentColor"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Planifier une démo gratuite
        </button>
        <button
          type="button"
          className="btn-cta-secondary"
          aria-label="Nous contacter"
        >
          <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.833435 3.3335L7.40844 7.71683C7.68232 7.89956 8.00419 7.99708 8.33343 7.99708C8.66268 7.99708 8.98455 7.89956 9.25843 7.71683L15.8334 3.3335M2.5001 12.5002H14.1668C14.6088 12.5002 15.0327 12.3246 15.3453 12.012C15.6578 11.6994 15.8334 11.2755 15.8334 10.8335V2.50016C15.8334 2.05814 15.6578 1.63421 15.3453 1.32165C15.0327 1.00909 14.6088 0.833496 14.1668 0.833496H2.5001C2.05807 0.833496 1.63415 1.00909 1.32159 1.32165C1.00903 1.63421 0.833435 2.05814 0.833435 2.50016V10.8335C0.833435 11.2755 1.00903 11.6994 1.32159 12.012C1.63415 12.3246 2.05807 12.5002 2.5001 12.5002Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Nous contacter
        </button>
      </div>
    </section>
  );
}

export default CtaSection;
