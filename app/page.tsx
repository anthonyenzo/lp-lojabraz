import type { CSSProperties } from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_DEPLOY_BASE_PATH ?? "";

const packs = [
  {
    id: "sertanejo",
    name: "Sertanejo",
    label: "PACK @brazhits_ +500 Clipes Sertanejo 2026",
    image: "pack-sertanejo-2026.jpg",
    checkout: "https://checkout.brazhits.com.br/checkout/cms3nyhqu00q101ojp5uriham?offer=7JM1ZJ5",
  },
  {
    id: "sertanejo-raiz",
    name: "Sertanejo Raiz",
    label: "PACK @brazhits_ +200 Clipes Sertanejo Raiz/Modão",
    image: "pack-sertanejo-raiz-modao.jpg",
    checkout: "https://checkout.brazhits.com.br/checkout/cms3qwbhf02ey01q2uric6p6b?offer=ct9lej3",
  },
  {
    id: "forro-arrocha",
    name: "Forró / Arrocha",
    label: "PACK @brazhits_ +200 Clipes Forró/Arrocha 2026",
    image: "pack-forro-arrocha-2026.jpg",
    checkout: "https://checkout.brazhits.com.br/checkout/cms50qbo101h701pxcrnwl7zn?offer=142tf5w",
  },
  {
    id: "pagode",
    name: "Pagode",
    label: "PACK @brazhits_ +200 Clipes Pagode 2026",
    image: "pack-pagode-2026.jpg",
    checkout: "https://checkout.brazhits.com.br/checkout/cms50tr7p01jg01pxv6hv8di0?offer=3wkrmwo",
  },
  {
    id: "rock-nacional",
    name: "Rock Nacional",
    label: "PACK @brazhits_ +200 Clipes Rock Nacional",
    image: "pack-rock-nacional.jpg",
    checkout: "https://checkout.brazhits.com.br/checkout/cms514n1801rx01ocfhh2ar5y?offer=d58z8ku",
  },
  {
    id: "gospel",
    name: "Gospel",
    label: "PACK @brazhits_ +200 Clipes Gospel 2026",
    image: "pack-gospel-2026.jpg",
    checkout: "https://checkout.brazhits.com.br/checkout/cms50v6lf01kk01pxtf8e60hm?offer=064ob69",
  },
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
          <p className="hero-copy">Navegue por gênero, escolha seu Pack e siga direto para uma compra rápida e segura.</p>
          <a className="hero-cta" href="#catalogo">Explorar catálogo <ArrowIcon /></a>
        </div>
      </section>

      <nav className="category-nav" aria-label="Gêneros disponíveis">
        <div className="shell category-scroll">
          {packs.map((pack) => (
            <a key={pack.id} href={`#${pack.id}`}>{pack.name}</a>
          ))}
        </div>
      </nav>

      <section className="catalog shell" id="catalogo">
        <div className="catalog-heading">
          <div>
            <p className="eyebrow">PACKS DISPONÍVEIS</p>
            <h2>Encontre o ritmo certo para você.</h2>
          </div>
          <p>Toque em um Pack para acessar o checkout e finalizar sua compra.</p>
        </div>

        <div className="pack-grid">
          {packs.map((pack, index) => (
            <a
              className="pack-card"
              id={pack.id}
              key={pack.id}
              href={pack.checkout}
              aria-label={`Comprar ${pack.label}`}
              style={{ "--delay": `${index * 70}ms` } as CSSProperties}
            >
              <div className="pack-cover">
                <img
                  src={`${BASE_PATH}/${pack.image}`}
                  alt={`Capa do ${pack.label}`}
                  width="1200"
                  height="1200"
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <span className="cover-action" aria-hidden="true"><ArrowIcon /></span>
              </div>
              <h3>{pack.label}</h3>
            </a>
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
