import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8">
      <header className="bg-grey-tundora h-20 sm:h-20 md:h-20 lg:h-20 xl:h-20">
        <nav className="flex h-full items-center">
          <a
            href="#"
            className="white-alabaster h-30  text-white-alabaster ml-12  uppercase"
          >
            All tours
          </a>
        </nav>
      </header>
    </main>
  );
}
