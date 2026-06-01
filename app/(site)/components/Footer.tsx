import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/[0.08] bg-[#08090a]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-zinc-500 md:flex-row md:px-10 lg:px-16">
        <small className="font-mono uppercase tracking-[0.14em]">
          Copyright &copy; {new Date().getFullYear()} Hiren Thakore
        </small>

        <a
          href="https://github.com/thakoreh/portfolio_with_sanity_nextjs"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full px-3 py-2 transition-colors hover:bg-white/[0.05] hover:text-zinc-100"
        >
          <Code2 className="h-4 w-4" />
          Source repo
        </a>
      </div>
    </footer>
  );
}
