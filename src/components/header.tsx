import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-center w-full h-20 px-8 backdrop-blur-lg border-b sticky top-0">
      <Image
        src="https://rqsfebcljeizuojtkabi.supabase.co/storage/v1/object/public/logo/logo-compressed.png"
        alt="Logo"
        width={150}
        height={50}
      />
    </header>
  );
}
