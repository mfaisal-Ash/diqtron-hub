"use client";

import { motion } from "framer-motion";

const stack = [
  { label: "NETFLIX", rotate: -10, offset: -34, tint: "bg-brand-teal" },
  { label: "SPOTIFY", rotate: -3, offset: -10, tint: "bg-brand-gold" },
  { label: "YOUTUBE", rotate: 4, offset: 14, tint: "bg-brand-teal" },
  { label: "CANVA", rotate: 11, offset: 38, tint: "bg-brand-gold" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const card = (rotate) => ({
  hidden: { opacity: 0, y: 36, rotate: rotate * 1.8, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    rotate,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
});

export default function Hero({ waLink, productCount }) {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:pt-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-5"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1.5 text-sm text-brand-gold">
            {productCount} aplikasi tersedia hari ini
          </span>
          <h1 className="max-w-2xl font-display text-4xl leading-[1.1] text-paper sm:text-5xl md:text-6xl">
            Langganan aplikasi favoritmu,{" "}
            <span className="italic text-brand-gold">tinggal chat.</span>
          </h1>
          <p className="max-w-md text-balance text-base text-paper/70 sm:text-lg">
            Silakan Pilih Paket sesuai kebutuhanmu. Lalu tekan tombol WhatsApp, admin kami akan memproses pesananmu dalam hitungan menit.
          </p>
          {waLink && (
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-wa px-7 py-3.5 font-medium text-ink shadow-card transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Chat admin sekarang
              <ArrowIcon />
            </a>
          )}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative hidden h-40 w-full max-w-md items-center justify-center sm:flex"
          aria-hidden="true"
        >
          {stack.map((item, i) => (
            <motion.div
              key={item.label}
              variants={card(item.rotate)}
              style={{ marginLeft: i === 0 ? 0 : -56 }}
              className="flex h-24 w-40 shrink-0 flex-col justify-between rounded-ticket border border-ink-line bg-ink-soft p-3 shadow-ticket"
            >
              <div
                className={`h-2 w-8 rounded-full ${
                  i % 2 === 0 ? "bg-brand-teal" : "bg-brand-gold"
                }`}
              />
              <p className="font-stub text-[11px] tracking-wide text-paper/60">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 8h9m0 0L8.5 4m4 4L8.5 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
