import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border h-16 flex items-center justify-between px-6 md:px-12">
      <div className="text-xl font-bold text-primary">DisabilityWork</div>
      <div className="hidden md:flex gap-8">
        <Link
          href="/"
          className="text-foreground hover:text-primary transition-colors"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-foreground hover:text-primary transition-colors"
        >
          About
        </Link>
        <Link
          href="/applicant"
          className="text-foreground hover:text-primary transition-colors"
        >
          Applicant
        </Link>
        <Link
          href="/company"
          className="text-foreground hover:text-primary transition-colors"
        >
          Company
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {/* Mobile menu button placeholder */}
        <button className="md:hidden p-2 text-foreground">Menu</button>
      </div>
    </nav>
  );
}
