import Link from "next/link";
import Image from "next/image";
import { profile } from "../data/profile";
import FeaturedProjects from "../components/FeaturedProjects";


export default function Home() {
  const t = profile.fr;

  return (
    <section className="flex flex-col gap-10">
      {/* HERO */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
            {t.hero.badge}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            {t.name}
          </h1>

          <p className="text-lg text-white/70 md:text-xl">{t.hero.title}</p>

          <p className="max-w-2xl text-lg text-white/70 md:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
            >
              {t.hero.ctas.primary}
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/85 transition hover:border-white/25 hover:bg-white/10"
            >
              {t.hero.ctas.secondary}
            </Link>
            <Link
              href="/cv"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/85 transition hover:border-white/25"
            >
              {t.hero.ctas.tertiary}
            </Link>
            <Link
              href="https://www.linkedin.com/in/hugo-tekeng-a31295292 "
              target="_blank"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/85 transition hover:border-white/25"
            >
              Ouvrir LinkedIn
            </Link>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/45">
              Formation & expériences
            </p>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <Link
                href="/university"
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-white/20 hover:bg-white/8"
              >
                <div className="flex h-14 items-center justify-center rounded-xl bg-white/5">
                  <Image
                    src="/images/logos/uqtr.jpg"
                    alt="UQTR"
                    width={96}
                    height={40}
                    className="h-10 w-auto object-contain opacity-85 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-white">Université du Québec à Trois-Rivières (UQTR)</p>
                  <p className="text-sm text-white/65">Informatique</p>
                </div>
              </Link>

              <Link
                href="/university"
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-white/20 hover:bg-white/8"
              >
                <div className="flex h-14 items-center justify-center rounded-xl bg-white/5">
                  <Image
                    src="/images/logos/dschang.jpg"
                    alt="Université de Dschang"
                    width={96}
                    height={40}
                    className="h-10 w-auto object-contain opacity-85 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-white">Université de Dschang</p>
                  <p className="text-sm text-white/65">Mathématiques Appliquées</p>
                </div>
              </Link>

              <Link
                href="/experience"
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-white/20 hover:bg-white/8"
              >
                <div className="flex h-14 items-center justify-center rounded-xl bg-white/5">
                  <Image
                    src="/images/logos/lucatex.jpg"
                    alt="Lucatex"
                    width={96}
                    height={40}
                    className="h-10 w-auto object-contain opacity-85 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-white">Lucatex</p>
                  <p className="text-sm text-white/65">Stage Data Analyst</p>
                </div>
              </Link>

              <Link
                href="/experience"
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-white/20 hover:bg-white/8"
              >
                <div className="flex h-14 items-center justify-center rounded-xl bg-white/5">
                  <Image
                    src="/images/logos/merveille-pressing.jpeg"
                    alt="Merveille Pressing"
                    width={96}
                    height={40}
                    className="h-10 w-auto object-contain opacity-85 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-white">Merveille Pressing</p>
                  <p className="text-sm text-white/65">Technicien en informatique</p>
                </div>
              </Link>
            </div>
          </div>



        </div>

        {/* AVATAR */}
        <div className="mt-2 md:mt-0 flex items-center justify-center">
          <div className="relative h-40 w-40 md:h-64 md:w-64">

            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/15 bg-white/5 backdrop-blur">
              <Image
                src="/images/avatar/avatar.jpeg"
                alt="Hugo Tekeng"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

      </div>

      {/* FEATURED PROJECTS */}
      <FeaturedProjects locale="fr" />

    </section>
  );
}