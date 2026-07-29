import type { CSSProperties } from "react";

const categories = [
  { id: "sertanejo", name: "Sertanejo", label: "Pack Sertanejo", tone: "lime" },
  { id: "sertanejo-raiz", name: "Sertanejo Raiz", label: "Pack Sertanejo Raiz", tone: "amber" },
  { id: "forro-arrocha", name: "Forró / Arrocha", label: "Pack Forró + Arrocha", tone: "orange" },
  { id: "pagode", name: "Pagode", label: "Pack Pagode", tone: "cyan" },
  { id: "rock-nacional", name: "Rock Nacional", label: "Pack Rock Nacional", tone: "violet" },
  { id: "gospel", name: "Gospel", label: "Pack Gospel", tone: "blue" },
] as const;

const WHATSAPP = "https://wa.me/5538984020274?text=Ol%C3%A1!%20Vim%20pela%20loja%20da%20BrazHits";

function ArrowIcon() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

export default function Home() {
  return (
    <main>
      <div className="top-line">Catálogo oficial BrazHits</div>
      <header className="site-header">
        <a className="brand" href="https://brazhits.com.br" aria-label="BrazHits — página inicial">
          <span>Braz</span><strong>Hits</strong>
        </a>
        <a className="support-link" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          Suporte <ArrowIcon />
        </a>
      </header>

      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="shell hero-content">
          <p className="eyebrow">ESCOLHA O SEU SOM</p>
          <h1>Todos os Packs BrazHits em <span>um só lugar.</span></h1>
          <p className="hero-copy">Navegue por gênero e encontre o Pack perfeito para animar o seu som.</p>
          <a className="hero-cta" href="#catalogo">Explorar catálogo <ArrowIcon /></a>
        </div>
      </section>

      <nav className="category-nav" aria-label="Gêneros disponíveis">
        <div className="shell category-scroll">
          {categories.map((category) => (
            <a key={category.id} href={`#${category.id}`}>{category.name}</a>
          ))}
        </div>
      </nav>

      <section className="catalog shell" id="catalogo">
        <div className="catalog-heading">
          <div>
            <p className="eyebrow">PACKS DISPONÍVEIS</p>
            <h2>Encontre o ritmo certo para você.</h2>
          </div>
          <p>Escolha um gênero para conhecer os Packs disponíveis.</p>
        </div>

        <div className="pack-grid">
          {categories.map((category, index) => (
            <article
              className={`pack-card tone-${category.tone}`}
              id={category.id}
              key={category.id}
              style={{ "--delay": `${index * 70}ms` } as CSSProperties}
            >
              <div className="cover-placeholder" role="img" aria-label={`Espaço reservado para a capa do ${category.label}`}>
                <div className="cover-top"><span>Braz</span><strong>Hits</strong></div>
                <div className="sound-bars" aria-hidden="true"><i /><i /><i /><i /><i /></div>
                <div className="cover-copy">
                  <small>CAPA EM BREVE</small>
                  <strong>{category.name}</strong>
                </div>
              </div>
              <h3>{category.label}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="help-strip">
        <div className="shell help-content">
          <div>
            <p className="eyebrow">PRECISA DE AJUDA?</p>
            <h2>Fale com a BrazHits antes de escolher.</h2>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            Conversar no WhatsApp <ArrowIcon />
          </a>
        </div>
      </section>

      <footer className="site-footer shell">
        <div className="brand"><span>Braz</span><strong>Hits</strong></div>
        <p>© 2026 BrazHits. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
