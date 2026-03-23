import Link from "next/link";
import Image from "next/image";
import { profile } from "../data/profile";
import FeaturedProjects from "../components/FeaturedProjects";

export default function Home() {
  const t = profile.fr;

  return (
    <section className="flex flex-col gap-10 sm:gap-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-3xl flex-col gap-4 sm:gap-5">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
            {t.hero.badge}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {t.name}
          </h1>

          <p className="text-base text-white/70 sm:text-lg lg:text-xl">
            {t.hero.title}
          </p>

          <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg lg:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
            >
              {t.hero.ctas.primary}
            </Link>

            <Link
              href="/projects"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/85 transition hover:border-white/25 hover:bg-white/10"
            >
              {t.hero.ctas.secondary}
            </Link>

            <Link
              href="/cv"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/85 transition hover:border-white/25"
            >
              {t.hero.ctas.tertiary}
            </Link>

            <Link
              href="https://www.linkedin.com/in/hugo-tekeng-a31295292"
              target="_blank"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/85 transition hover:border-white/25"
            >
              Ouvrir LinkedIn
            </Link>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-6">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/45">
              Formation & expériences
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <Link
                href="/university"
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="flex h-16 items-center justify-center rounded-xl bg-white/5">
                  <Image
                    src="/images/logos/uqtr.jpg"
                    alt="UQTR"
                    width={120}
                    height={48}
                    className="h-10 w-auto object-contain opacity-85 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>

                <div className="mt-3">
                  <p className="text-sm font-semibold leading-6 text-white">
                    Université du Québec à Trois-Rivières (UQTR)
                  </p>
                  <p className="text-sm text-white/65">Informatique</p>
                </div>
              </Link>

              <Link
                href="/university"
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="flex h-16 items-center justify-center rounded-xl bg-white/5">
                  <Image
                    src="/images/logos/dschang.jpg"
                    alt="Université de Dschang"
                    width={120}
                    height={48}
                    className="h-10 w-auto object-contain opacity-85 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>

                <div className="mt-3">
                  <p className="text-sm font-semibold leading-6 text-white">
                    Université de Dschang
                  </p>
                  <p className="text-sm text-white/65">Mathématiques appliquées</p>
                </div>
              </Link>

              <Link
                href="/experience"
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="flex h-16 items-center justify-center rounded-xl bg-white/5">
                  <Image
                    src="/images/logos/lucatex.jpg"
                    alt="Lucatex"
                    width={120}
                    height={48}
                    className="h-10 w-auto object-contain opacity-85 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>

                <div className="mt-3">
                  <p className="text-sm font-semibold leading-6 text-white">
                    Lucatex
                  </p>
                  <p className="text-sm text-white/65">Stage Data Analyst</p>
                </div>
              </Link>

              <Link
                href="/experience"
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="flex h-16 items-center justify-center rounded-xl bg-white/5">
                  <Image
                    src="/images/logos/merveille-pressing.jpeg"
                    alt="Merveille Pressing"
                    width={120}
                    height={48}
                    className="h-10 w-auto object-contain opacity-85 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>

                <div className="mt-3">
                  <p className="text-sm font-semibold leading-6 text-white">
                    Merveille Pressing
                  </p>
                  <p className="text-sm text-white/65">
                    Technicien en informatique
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative h-32 w-32 sm:h-40 sm:w-40 lg:h-64 lg:w-64">
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/15 bg-white/5 backdrop-blur">
              <Image
                src="/images/avatar/avatar.jpeg"
                alt="Hugo Tekeng"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 639px) 128px, (max-width: 1023px) 160px, 256px"
              />
            </div>
          </div>
        </div>
      </div>

      <FeaturedProjects locale="fr" />
    </section>
  );
}