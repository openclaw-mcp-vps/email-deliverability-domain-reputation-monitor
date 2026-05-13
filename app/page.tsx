export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Email Deliverability
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Monitor Your Domain&apos;s{" "}
          <span className="text-[#58a6ff]">Email Reputation Score</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Track your domain across 50+ blacklists, monitor DNS health, and get
          step-by-step fixes to land in the inbox — not spam.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Monitoring — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No setup fees.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "50+ Blacklist Checks",
            "SPF / DKIM / DMARC Audit",
            "Real-time Alerts",
            "Reputation Score",
            "Actionable Fixes",
            "Weekly Reports"
          ].map((f) => (
            <span
              key={f}
              className="px-4 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Mock dashboard card */}
        <div className="mt-14 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-[#8b949e]">yourdomain.com</span>
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-green-900 text-green-400">HEALTHY</span>
          </div>
          <div className="flex gap-6 mb-4">
            <div>
              <p className="text-3xl font-bold text-[#58a6ff]">94</p>
              <p className="text-xs text-[#6e7681] mt-0.5">Reputation Score</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">0</p>
              <p className="text-xs text-[#6e7681] mt-0.5">Blacklists</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">3/3</p>
              <p className="text-xs text-[#6e7681] mt-0.5">DNS Records</p>
            </div>
          </div>
          <div className="w-full bg-[#0d1117] rounded-full h-2">
            <div className="bg-[#58a6ff] h-2 rounded-full" style={{width:"94%"}} />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15<span className="text-lg font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#6e7681] mb-6">Per domain monitored</p>
          <ul className="space-y-3 mb-8">
            {[
              "Continuous blacklist monitoring",
              "SPF, DKIM & DMARC validation",
              "Instant email alerts",
              "Weekly deliverability reports",
              "Actionable fix recommendations",
              "Up to 5 domains"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-12 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which blacklists do you check?",
              a: "We check 50+ major DNS-based blacklists including Spamhaus, Barracuda, SORBS, SpamCop, and more — covering the lists used by Gmail, Outlook, and Yahoo."
            },
            {
              q: "How quickly will I be alerted if my domain is blacklisted?",
              a: "Checks run every 30 minutes. If your domain appears on any blacklist, you receive an email alert within minutes so you can act fast."
            },
            {
              q: "Can I monitor multiple domains?",
              a: "Yes. The Pro plan supports up to 5 domains. Each domain gets its own reputation score, blacklist status, and DNS health report."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg p-5 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
