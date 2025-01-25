import { Hero } from "@/components/landing/hero";
import { SecurityFeatures } from "@/components/landing/security-features";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-foreground">
      <Header />
      <Hero />
      <SecurityFeatures />
    </main>
  );
}
