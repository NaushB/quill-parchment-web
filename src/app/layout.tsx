import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quill & Parchment | Professional Transcript Proofreading",
  description: "Expert transcript proofreading for court reporters. Rule-Based. Reporter-Focused. Reliable. Based in Markham, Ontario.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "#0f0e0b", color: "#e8e4dc", margin: 0, fontFamily: "Georgia, serif" }}>
        <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "#0f0e0b", borderBottom: "1px solid #2d2820", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <Link href="/" style={{ fontFamily: playfair.style.fontFamily, fontSize: "20px", color: "#c9973a", textDecoration: "none", fontWeight: 700 }}>
            Quill & Parchment
          </Link>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            {[["Services","/services"],["Rates","/rates"],["Samples","/samples"],["How It Works","/how-it-works"],["About","/about"],["Blog","/blog"],["Contact","/contact"]].map(([label,href]) => (
              <Link key={href} href={href} style={{ color: "#8a7f6e", textDecoration: "none", fontSize: "14px", fontFamily: "monospace" }}>{label}</Link>
            ))}
            <Link href="/contact" style={{ background: "#c9973a", color: "#0f0e0b", padding: "8px 18px", borderRadius: "4px", fontSize: "13px", fontFamily: "monospace", fontWeight: 700, textDecoration: "none" }}>Get a Quote</Link>
          </div>
        </nav>
        <main>{children}</main>
        <footer style={{ background: "#0a0906", borderTop: "1px solid #2d2820", padding: "48px 32px", marginTop: "80px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "40px" }}>
            <div>
              <div style={{ fontFamily: playfair.style.fontFamily, fontSize: "18px", color: "#c9973a", marginBottom: "8px" }}>Quill & Parchment</div>
              <div style={{ color: "#8a7f6e", fontSize: "13px", lineHeight: 1.7 }}>Rule-Based. Reporter-Focused. Reliable.</div>
            </div>
            <div>
              <div style={{ color: "#e8e4dc", fontFamily: "monospace", fontSize: "12px", letterSpacing: "2px", marginBottom: "16px" }}>SERVICES</div>
              {[["Transcript Proofreading","/services"],["Rates","/rates"],["Samples","/samples"],["Preferences","/preferences"],["Blog","/blog"]].map(([l,h]) => (
                <div key={h}><Link href={h} style={{ color: "#8a7f6e", fontSize: "14px", textDecoration: "none" }}>{l}</Link></div>
              ))}
            </div>
            <div>
              <div style={{ color: "#e8e4dc", fontFamily: "monospace", fontSize: "12px", letterSpacing: "2px", marginBottom: "16px" }}>CONTACT</div>
              <div style={{ color: "#8a7f6e", fontSize: "14px", lineHeight: 2 }}>
                <div>+1 647 986 5007</div>
                <div>kjbutt@quillandparchment.ca</div>
                <div>55 Yale Lane, Markham</div>
                <div>Ontario L6B 1G7</div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", color: "#8a7f6e", fontSize: "12px", marginTop: "40px", fontFamily: "monospace" }}>© 2025 Quill & Parchment. All rights reserved.</div>
        </footer>
      </body>
    </html>
  );
}
