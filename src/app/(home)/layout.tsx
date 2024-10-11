import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zustand Multi-Step Form",
  description:
    "Multi-Step Form Example for Next.js with TypeScript and Zustand State Management Library ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
