"use client";

import { useState, type CSSProperties } from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_DEPLOY_BASE_PATH ?? "";
type CatalogType = "clips" | "musicas";
type Pack = {
  id: string; name: string; label: string; tone: string; image: string;
  checkout: string; quantity: string; quality: string; type: CatalogType;
};

const clipPacks: Pack[] = [
  { id: "clips-sertanejo", name: "Sertanejo", label: "Pack de Clipes Sertanejo", tone: "lime", image: "pack-sertanejo-2026.jpg", checkout: "https://checkout.brazhits.com.br/checkout/cms3nyhqu00q101ojp5uriham?offer=7JM1ZJ5", quantity: "+500 CLIPES", quality: "MP4 1080p", type: "clips" },
  { id: "clips-sertanejo-raiz", name: "Sertanejo Raiz", label: "Pack de Clipes Sertanejo Raiz", tone: "amber", image: "pack-sertanejo-raiz-modao.jpg", checkout: "https://checkout.brazhits.com.br/checkout/cms3qwbhf02ey01q2uric6p6b?offer=ct9lej3", quantity: "+200 CLIPES", quality: "MP4 1080p", type: "clips" },
  { id: "clips-forro-arrocha", name: "Forró / Arrocha", label: "Pack de Clipes Forró + Arrocha", tone: "orange", image: "pack-forro-arrocha-2026.jpg", checkout: "https://checkout.brazhits.com.br/checkout/cms50qbo101h701pxcrnwl7zn?offer=142tf5w", quantity: "+200 CLIPES", quality: "MP4 1080p", type: "clips" },
  { id: "clips-pagode", name: "Pagode", label: "Pack de Clipes Pagode", tone: "cyan", image: "pack-pagode-2026.jpg", checkout: "https://checkout.brazhits.com.br/checkout/cms50tr7p01jg01pxv6hv8di0?offer=3wkrmwo", quantity: "+200 CLIPES", quality: "MP4 1080p", type: "clips" },
  { id: "clips-rock-nacional", name: "Rock Nacional", label: "Pack de Clipes Rock Nacional", tone: "violet", image: "pack-rock-nacional.jpg", checkout: "https://checkout.brazhits.com.br/checkout/cms514n1801rx01ocfhh2ar5y?offer=d58z8ku", quantity: "+200 CLIPES", quality: "MP4 1080p", type: "clips" },
  { id: "clips-gospel", name: "Gospel", label: "Pack de Clipes Gospel", tone: "blue", image: "pack-gospel-2026.jpg", checkout: "https://checkout.brazhits.com.br/checkout/cms50v6lf01kk01pxtf8e60hm?offer=064ob69", quantity: "+200 CLIPES", quality: "MP4 1080p", type: "clips" },
];

const musicPacks: Pack[] = [
  { id: "musicas-sertanejo", name: "Sertanejo 2026", label: "Pack de Músicas Sertanejo", tone: "lime", image: "musicas-sertanejo-2026.png", checkout: "https://checkout.brazhits.com.br/checkout/cmsdixa8e0n4w01omtl42bd2t?offer=4qvvse2", quantity: "+500 MÚSICAS", quality: "MP3 320 kbps", type: "musicas" },
  { id: "musicas-sertanejo-raiz", name: "Sertanejo Raiz", label: "Pack de Músicas Sertanejo Raiz", tone: "amber", image: "musicas-sertanejo-raiz-modao.png", checkout: "https://checkout.brazhits.com.br/checkout/cmseva9y80d1301pvob0fcl3e?offer=av91syt", quantity: "+500 MÚSICAS", quality: "MP3 320 kbps", type: "musicas" },
  { id: "musicas-gospel", name: "Gospel 2026", label: "Pack de Músicas Gospel", tone: "blue", image: "musicas-gospel-2026.png", checkout: "https://checkout.brazhits.com.br/checkout/cmsfh75xe090801oib5gfw1te?offer=zzn196z", quantity: "+500 MÚSICAS", quality: "MP3 320 kbps", type: "musicas" },
  { id: "musicas-rock-nacional", name: "Rock Nacional", label: "Pack de Músicas Rock Nacional", tone: "violet", image: "musicas-rock-nacional.png", checkout: "https://checkout.brazhits.com.br/checkout/cmsfhjb36094h01oi0dsomtab?offer=kc43nl3", quantity: "+500 MÚSICAS", quality: "MP3 320 kbps", type: "musicas" },
];

const WHATSAPP = "https://wa.me/5538984020274?text=Ol%C3%A1!%20Vim%20pela%20loja%20da%20BrazHits";
function ArrowIcon() { return <span className="arrow" aria-hidden="true">→</span>; }

export default function Home() {
  const [activeCatalog, setActiveCatalog] = useState<CatalogType>("clips");
  const packs = activeCatalog === "clips" ? clipPacks : musicPacks;
  const isClips = activeCatalog === "clips";

  function selectCatalog(type: CatalogType) {
    setActiveCatalog(type);
    window.requestAnimationFrame(() => {
      document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <main>
      <div className="top-line">Catálogo oficial BrazHits</div>
      <header className="site-header">
        <a className="brand" href="https://brazhits.com.br" aria-label="BrazHits — página inicial"><span>Braz</span><strong>Hits</strong></a>
        <a className="support-link" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Suporte <ArrowIcon /></a>
      </header>

      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="shell hero-content">
          <p className="eyebrow">ESCOLHA O SEU SOM</p>
          <h1>Todos os Packs BrazHits em <span>um só lugar.</span></h1>
          <p className="hero-copy">Escolha entre Packs de Clipes ou de Músicas, encontre seu ritmo e siga direto para uma compra rápida e segura.</p>
          <a className="hero-cta" href="#catalogo">Explorar catálogo <ArrowIcon /></a>
        </div>
      </section>

      <nav className="catalog-nav" aria-label="Escolha o tipo de Pack">
        <div className="shell catalog-switch">
          <button className={isClips ? "active" : ""} type="button" aria-pressed={isClips} onClick={() => selectCatalog("clips")}>
            <span>Packs de Clipes</span><small>6 opções em MP4 1080p</small>
          </button>
          <button className={!isClips ? "active" : ""} type="button" aria-pressed={!isClips} onClick={() => selectCatalog("musicas")}>
            <span>Packs de Músicas</span><small>4 opções em MP3 320 kbps</small>
          </button>
        </div>
      </nav>

      <section className="catalog shell" id="catalogo">
        <div className="catalog-heading">
          <div>
            <p className="eyebrow">{isClips ? "PACKS DE CLIPES" : "PACKS DE MÚSICAS"}</p>
            <h2>{isClips ? "Escolha seus clipes em Full HD." : "Escolha suas músicas em alta qualidade."}</h2>
          </div>
          <p>{isClips ? "Todos os clipes em MP4 1080p, organizados e prontos para reproduzir." : "Todas as músicas em MP3 320 kbps, organizadas para você ouvir com a melhor qualidade."}</p>
        </div>

        <div className="pack-grid" key={activeCatalog}>
          {packs.map((pack, index) => (
            <a
              className={`pack-card tone-${pack.tone} type-${pack.type}`}
              id={pack.id}
              key={pack.id}
              href={pack.checkout}
              aria-label={`Comprar ${pack.label}, ${pack.quantity}, ${pack.quality}`}
              style={{ "--delay": `${index * 70}ms` } as CSSProperties}
            >
              <div className="pack-cover">
                <img src={`${BASE_PATH}/${pack.image}`} alt="" width="1200" height="1200" loading={index < 2 ? "eager" : "lazy"} />
                <div className="cover-top"><span>Braz</span><strong>Hits</strong></div>
                <div className="sound-bars" aria-hidden="true"><i /><i /><i /><i /><i /></div>
                <div className="cover-copy"><span className="cover-quantity">{pack.quantity}</span><strong>{pack.name}</strong></div>
                <span className="cover-action" aria-hidden="true"><ArrowIcon /></span>
              </div>
              <div className="pack-details">
                <span className="pack-kind">{isClips ? "PACK DE CLIPES" : "PACK DE MÚSICAS"}</span>
                <h3>{pack.label}</h3>
                <p className="pack-quality">{pack.quality} <span>•</span> Acesso imediato</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="help-strip">
        <div className="shell help-content">
          <div><p className="eyebrow">PRECISA DE AJUDA?</p><h2>Fale com a BrazHits antes de escolher.</h2></div>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Conversar no WhatsApp <ArrowIcon /></a>
        </div>
      </section>

      <footer className="site-footer shell">
        <div className="brand"><span>Braz</span><strong>Hits</strong></div>
        <p>© 2026 BrazHits. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
