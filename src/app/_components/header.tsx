import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center bg-background- justify-between mb-16 mt-8 px-5">
      {/* Blog title / logo */}
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-navy-deep hover:text-navy-lighter transition-colors">
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-gold">MIST.cash</span>
          <span className="text-navy-deep">| Blog</span>
        </Link>
      </h1>

      {/* Tagline */}
      <p className="mt-4 md:mt-0 text-sm md:text-base text-navy-medium font-semibold">
        Send anything to anyone privately, with full compliance
      </p>
    </header>
  );
};

export default Header;
