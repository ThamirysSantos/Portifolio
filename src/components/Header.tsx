import Link from "next/link";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto">
        <Link href="/">
          <h1>
            Thamirys <span>.</span>
          </h1>
        </Link>
      </div>
    </header>
  );
}
