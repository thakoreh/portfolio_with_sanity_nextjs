type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type AppPrivacyPolicyProps = {
  appName: string;
  summary: string;
  sections: PolicySection[];
};

const effectiveDate = "July 15, 2026";
const supportEmail = "hiren.thakore58@gmail.com";

export default function AppPrivacyPolicy({ appName, summary, sections }: AppPrivacyPolicyProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-24 md:py-32">
      <div className="mb-10">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-emerald-300">
          Android app privacy
        </p>
        <h1 className="text-4xl font-semibold text-white md:text-6xl">
          {appName} Privacy Policy
        </h1>
        <p className="mt-5 text-sm text-zinc-500">Effective date: {effectiveDate}</p>
      </div>

      <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30">
        <div className="border-b border-white/10 bg-gradient-to-br from-emerald-400/15 via-cyan-400/10 to-transparent p-7 md:p-10">
          <p className="max-w-3xl text-lg leading-8 text-zinc-100">{summary}</p>
        </div>

        <div className="space-y-10 p-7 md:p-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-7 text-zinc-300">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-4 space-y-3 pl-5 text-zinc-300">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="list-disc leading-7 marker:text-emerald-300">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <p className="mt-4 leading-7 text-zinc-300">
              {appName} is published by Hiren Thakore. For privacy or support questions, email{" "}
              <a className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200" href={`mailto:${supportEmail}`}>
                {supportEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
