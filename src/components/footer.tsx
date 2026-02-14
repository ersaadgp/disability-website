export function Footer() {
  return (
    <footer className="bg-secondary py-12 px-6 md:px-12 border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} DisabilityWork. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
