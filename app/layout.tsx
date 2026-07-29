import type { Metadata } from "next";
import "./globals.css";

const publicUrl = "https://brazhits.com.br/loja/";

export const metadata: Metadata = {
  metadataBase: new URL(publicUrl),
  title: "Loja de Packs | BrazHits",
  description: "Conheça os Packs BrazHits de sertanejo, forró, arrocha, pagode, rock nacional e gospel.",
  alternates: { canonical: publicUrl },
  openGraph: {
    url: publicUrl,
    title: "Loja de Packs | BrazHits",
    description: "Todos os Packs BrazHits em um só lugar. Escolha o seu gênero e encontre o som certo para você.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
