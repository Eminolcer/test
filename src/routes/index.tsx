import { createFileRoute } from "@tanstack/react-router";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import salonInterior from "@/assets/salon-interior.jpg";
import hairTexture from "@/assets/hair-texture.jpg";
import ceramicStill from "@/assets/ceramic-still.jpg";
import whatsappVideoHero from "@/assets/whatsapp-video-hero.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CB Hairdesign — Frisørsalon i Roskilde" },
      {
        name: "description",
        content:
          "CB Hairdesign er en moderne frisørsalon i Roskilde med fokus på præcision, håndværk og personlig styling. Bestil tid på 46 36 46 66.",
      },
      { property: "og:title", content: "CB Hairdesign — Frisørsalon i Roskilde" },
      {
        property: "og:description",
        content:
          "En moderne frisørsalon i Roskilde, hvor morgenlyset møder præcision og håndværk.",
      },
      { property: "og:image", content: salonInterior },
      { name: "twitter:image", content: salonInterior },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-canvas font-sans text-ink">
      <Nav />
      <main>
        <Hero />
        <Video />
        <Content />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
      <a href="#" className="group flex items-center gap-3" aria-label="CB Hairdesign — forside">
        <span className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-ink/10 transition-colors group-hover:ring-ceramic/40">
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-6 w-6 text-ink"
          >
            <path
              d="M42 18C38 14 30 14 26 18C20 24 20 40 26 46C30 50 38 50 42 46"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32 14V50C32 50 48 50 48 41C48 32 32 32 32 32C32 32 46 32 46 23C46 14 32 14 32 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M42 32C45 32 48 30 48 26"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </span>
        <span className="flex flex-col leading-none">
          <span className="font-display text-2xl italic tracking-tight">CB Hairdesign</span>
          <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.32em] text-ink-soft">
            Roskilde · Est. 2024
          </span>
        </span>
      </a>
      <div className="flex items-center gap-8 text-sm font-medium tracking-wide">
        <a href="#behandlinger" className="hidden transition-colors hover:text-ceramic sm:inline">
          Behandlinger
        </a>
        <a href="#galleri" className="hidden transition-colors hover:text-ceramic sm:inline">
          Galleri
        </a>
        <a
          href="tel:+4546364666"
          className="rounded-full bg-ink px-5 py-2.5 text-canvas ring-1 ring-ink transition-colors hover:bg-ceramic hover:ring-ceramic"
        >
          Bestil tid
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-12 pb-24">
      <div className="flex flex-col items-end gap-16 lg:flex-row">
        <div className="animate-fade-up lg:w-3/5">
          <h1 className="mb-8 max-w-[20ch] font-display text-6xl leading-none text-balance md:text-8xl">
            Ro til dit hår, <span className="italic">lys til dit sind.</span> Book tid nu!
          </h1>
          <p className="max-w-[40ch] text-lg leading-relaxed text-ink-soft text-pretty md:text-xl">
            En moderne salon i hjertet af Roskilde, hvor morgenlyset møder
            præcision og håndværk.
          </p>
        </div>
        <div className="w-full animate-fade-up lg:w-2/5" style={{ animationDelay: "120ms" }}>
          <img
            src={salonInterior}
            alt="CB Hairdesign salon interiør med blødt morgenlys"
            width={800}
            height={1024}
            className="aspect-[4/5] w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-black/5"
          />
        </div>
      </div>
    </section>
  );
}

function Video() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="overflow-hidden rounded-2xl bg-sand/50 ring-1 ring-black/5">
        <video
          src={whatsappVideoHero.url}
          poster={salonInterior}
          controls
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="aspect-video w-full object-cover"
          aria-label="CB Hairdesign salon video"
        />
      </div>
      <p className="mt-4 text-center text-sm text-ink-soft">
        Stemningen i salonen — rolig, lys og personlig.
      </p>
    </section>
  );
}

const services = [
  { name: "Dameklip & Styling", note: "Inklusiv vask og hovedbundsmassage", price: "Fra 545,-" },
  { name: "Herreklip", note: "Præcis klipning tilpasset din stil", price: "Fra 425,-" },
  { name: "Balayage & Farve", note: "Naturlige nuancer med fokus på hårpleje", price: "Fra 950,-" },
  { name: "Kur & Behandling", note: "Dybdegående pleje, glans og styrke", price: "Fra 295,-" },
];

const hours = [
  { day: "Mandag", time: "07:00 – 12:00", closed: false },
  { day: "Tirsdag", time: "07:00 – 12:00", closed: false },
  { day: "Onsdag", time: "Lukket", closed: true },
  { day: "Torsdag", time: "Lukket", closed: true },
  { day: "Fredag", time: "07:00 – 12:00", closed: false },
  { day: "Lørdag – Søndag", time: "Lukket", closed: true },
];

function Content() {
  return (
    <section className="border-y border-hairline bg-sand/50 px-6 py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-20 lg:flex-row">
        <div className="flex-1 space-y-32">
          <div id="behandlinger">
            <h2 className="mb-12 max-w-[30ch] font-display text-4xl text-balance md:text-5xl">
              Vores behandlinger
            </h2>
            <div className="divide-y divide-ink/10">
              {services.map((s) => (
                <div key={s.name} className="flex items-baseline justify-between gap-6 py-6">
                  <div>
                    <h3 className="text-lg font-medium">{s.name}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{s.note}</p>
                  </div>
                  <span className="shrink-0 font-medium tabular-nums">{s.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="galleri" className="grid grid-cols-2 gap-4">
            <img
              src={hairTexture}
              alt="Tekstur af blødt naturligt hår i dagslys"
              loading="lazy"
              width={608}
              height={800}
              className="aspect-[3/4] w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-black/5"
            />
            <div className="pt-12">
              <img
                src={ceramicStill}
                alt="Keramisk vase med tørrede pampasgræs"
                loading="lazy"
                width={608}
                height={800}
                className="aspect-[3/4] w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-black/5"
              />
            </div>
          </div>
        </div>

        <aside className="lg:w-80">
          <div className="sticky top-12 space-y-8">
            <div className="space-y-8 rounded-2xl bg-canvas p-8 ring-1 ring-black/5">
              <div>
                <h4 className="mb-6 text-xs font-semibold tracking-[0.2em] text-ink-soft uppercase">
                  Åbningstider
                </h4>
                <ul className="space-y-4 text-sm">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className={`flex justify-between ${h.closed ? "text-ink/30" : ""}`}
                    >
                      <span className={h.closed ? "" : "text-ink-soft"}>{h.day}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-hairline pt-8">
                <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-ink-soft uppercase">
                  Kontakt
                </h4>
                <a
                  href="tel:+4546364666"
                  className="block text-xl font-medium transition-colors hover:text-ceramic"
                >
                  +45 46 36 46 66
                </a>
              </div>

              <a
                href="tel:+4546364666"
                className="block w-full rounded-xl bg-ink px-6 py-4 text-center text-sm font-medium text-canvas ring-1 ring-ink transition-colors hover:bg-ceramic hover:ring-ceramic"
              >
                Bestil tid
              </a>
            </div>

            <p className="px-8 text-xs leading-relaxed text-ink-soft">
              Roskilde, Danmark.
              <br />
              Vi glæder os til at se dig.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-7xl border-t border-hairline px-6 py-20">
      <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
        <div className="space-y-4">
          <span className="font-display text-2xl italic">CB Hairdesign</span>
          <p className="max-w-[30ch] text-sm text-ink-soft">
            En salon med fokus på det personlige udtryk og sundt, smukt hår.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <div className="space-y-4">
            <h5 className="text-xs font-semibold tracking-widest text-ink-soft uppercase">
              Følg os
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="transition-colors hover:text-ceramic">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-ceramic">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-xs font-semibold tracking-widest text-ink-soft uppercase">
              Kontakt
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+4546364666" className="transition-colors hover:text-ceramic">
                  46 36 46 66
                </a>
              </li>
              <li className="text-ink-soft">Roskilde, DK</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-12 text-xs text-ink-soft">© {new Date().getFullYear()} CB Hairdesign</p>
    </footer>
  );
}
