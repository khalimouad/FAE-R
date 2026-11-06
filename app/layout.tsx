import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FAE-R INC. | First Aid & Workplace Safety",
  description: "First aid supplies, training, and workplace health and safety services for organizations in Montréal, Québec.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
