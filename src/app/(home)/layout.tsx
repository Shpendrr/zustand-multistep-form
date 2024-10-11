import type { Metadata } from "next";
import "@/style/tailwind.css";
import Container from "@/components/shared/container/container";

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
      <body>
        <Container>
          <main className="flex justify-center items-center h-screen mx-auto">
            {children}
          </main>
        </Container>
      </body>
    </html>
  );
}
