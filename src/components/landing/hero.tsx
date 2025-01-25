import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CodePreview } from "@/components/landing/code-preview";

export function Hero() {
  return (
    <section className="w-full max-w-5xl mx-auto pt-32 pb-16 px-4">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Clerk but you own the code
        </h1>
        <p className="text-lg text-muted-foreground max-w-[42rem] leading-normal mt-4">
          Authentication should live in your project, not a node_modules folder.
          Complete auth built with security in mind, that you can actually build
          on.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link href="https://github.com/your-repo" target="_blank">
            <Button>View on GitHub</Button>
          </Link>
          <Link href="/demo">
            <Button variant="secondary">Try demo</Button>
          </Link>
        </div>
      </div>
      <div className="w-full">
        <CodePreview />
      </div>
    </section>
  );
}
