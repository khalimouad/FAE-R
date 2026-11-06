import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "FAE-R Hub", description: "Plateforme institutionnelle FAE-R INC." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html>; }
