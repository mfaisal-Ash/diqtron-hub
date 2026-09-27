"use client";

import { motion } from "framer-motion";

export default function Footer({ waLink, dataSource }) {
  return (
    <>
      <footer className="border-t border-ink-line px-6 py-10 text-center text-sm text-paper/45">
        <p>
          © {new Date().getFullYear()} Diqtron-hub.
        </p>
        {dataSource === "fallback" && (
          <p className="mt-2 text-xs text-brand-gold/70">
            Menampilkan data cadangan lokal (spreadsheet belum terhubung).
          </p>
        )}
      </footer>

      {waLink && (
        <motion.a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer nofollow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 16 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-wa shadow-ticket sm:hidden"
          aria-label="Chat admin via WhatsApp"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#0E1424" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.35a9.86 9.86 0 0 0 4.62 1.16h.01c5.46 0 9.91-4.45 9.91-9.9C21.96 6.44 17.5 2 12.04 2Z" />
          </svg>
        </motion.a>
      )}
    </>
  );
}
