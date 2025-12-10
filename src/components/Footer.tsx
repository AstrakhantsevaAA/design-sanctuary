const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-background border-t border-border">
      <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="font-serif text-xl tracking-wide text-foreground">
          Elena<span className="text-primary">.</span>
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Elena Morisot. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Instagram
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pinterest
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
