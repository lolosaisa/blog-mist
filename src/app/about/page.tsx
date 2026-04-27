import { Navbar } from "@/app/_components/navbar";
import { Footer } from "@/app/_components/footer";
import Link from "next/link";

const networks = ["Ethereum", "Base", "Arbitrum", "Optimism", "Polygon", "StarkNet"];

const principles = [
  { title: "Non-custodial", body: "MIST never holds user funds. All transactions go through on-chain smart contracts." },
  { title: "Compliance-first", body: "Built on Privacy Pools — endorsed by Vitalik Buterin. Prove innocence without revealing identity." },
  { title: "No tracking", body: "Zero cookies, zero behavioral analytics. Privacy extends beyond the blockchain." },
  { title: "Passkey auth", body: "Login with biometrics via WebAuthn. No passwords or seed phrases to hack or phish." },
  { title: "Open protocol", body: "Auditable smart contracts. Free to use — users only pay standard gas fees." },
  { title: "ZK proofs", body: "Mathematical certainty — not obscurity. The network confirms validity without seeing sender, receiver, or amount." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">

        {/* Hero */}
        <section className="mb-16">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border mb-4">
            About MIST.cash
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight mb-4">
            Private payments for a public blockchain world
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            MIST.cash builds privacy infrastructure for decentralized finance — letting anyone
            send and receive USDC privately, without exposing wallet history, balances, or identity.
          </p>
        </section>

        {/* Two column cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display font-bold text-lg mb-3">The problem we solve</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every transaction on a public blockchain is permanent and searchable. When you pay
              someone in USDC, they can see your entire balance, transaction history, and every
              wallet you've touched. MIST breaks that link.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display font-bold text-lg mb-3">How it works</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Generate a private payment link. Anyone can send USDC from Ethereum, Base, Arbitrum,
              Optimism, Polygon, or StarkNet. Withdraw privately using zero-knowledge proofs —
              deposits and withdrawals are mathematically unlinkable.
            </p>
          </div>
        </section>

        <div className="h-px bg-border mb-16" />

        {/* Principles */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-6">Core principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {principles.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-sm mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-border mb-16" />

        {/* Networks */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-4">Supported networks</h2>
          <div className="flex flex-wrap gap-2">
            {networks.map((n) => (
              <span
                key={n}
                className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border border-border bg-secondary text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {n}
              </span>
            ))}
          </div>
        </section>

        <div className="h-px bg-border mb-16" />

        {/* Blog banner */}
        <section className="mb-16 rounded-xl border border-border bg-secondary p-8 flex gap-6 items-start">
          <div className="rounded-lg border border-border bg-card p-2.5 mt-1 shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-display font-bold text-xl mb-2">This is the MIST.cash blog</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Deep dives into privacy tech, DeFi compliance, zero-knowledge proofs, and the future
              of private on-chain finance. All articles are written by the MIST team and contributors
              — no fluff, no sponsored content.
            </p>
            <Link
              href="/"
              className="text-sm font-semibold underline underline-offset-4 hover:text-primary transition-colors"
            >
              Browse all articles →
            </Link>
          </div>
        </section>

        {/* Legal footer note */}
        <p className="text-xs text-muted-foreground leading-relaxed">
          MIST.cash provides privacy-preserving transaction infrastructure. It is not a mixer.
          All transactions are compliant through Privacy Pool–based proof-of-innocence mechanisms.
          Non-custodial — MIST never holds user funds.
        </p>

      </main>

      <Footer />
    </div>
  );
}