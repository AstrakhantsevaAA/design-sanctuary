import heroImage from "@/assets/hero-living-room.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant modern living room interior design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-secondary/90 text-sm tracking-[0.3em] uppercase mb-6 animate-fade-up opacity-0 stagger-1">
          Interior Design Studio
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-secondary leading-tight mb-8 animate-fade-up opacity-0 stagger-2 text-balance">
          Creating Spaces That <em className="italic">Inspire</em> Living
        </h1>
        <p className="text-secondary/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 stagger-3">
          Transforming houses into homes with timeless elegance and thoughtful design
        </p>
        <div className="animate-fade-up opacity-0 stagger-4">
          <a
            href="#portfolio"
            className="inline-block px-8 py-4 bg-secondary text-foreground font-medium tracking-wide hover:bg-secondary/90 transition-all duration-300"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0" style={{ animationDelay: "1s" }}>
        <div className="w-px h-16 bg-secondary/50" />
      </div>
    </section>
  );
};

export default Hero;
