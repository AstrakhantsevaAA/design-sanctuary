const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-muted overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-accent/30 to-muted flex items-center justify-center">
                <span className="font-serif text-6xl text-primary/20">E</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">About Me</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Elena Morisot
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 15 years of experience in luxury residential design, I believe that every 
                space has a story waiting to be told. My approach combines timeless elegance with 
                modern sensibility, creating interiors that are both beautiful and deeply personal.
              </p>
              <p>
                Based in New York, I work with clients who appreciate the art of thoughtful design—
                those who understand that a well-designed home is not just about aesthetics, but 
                about creating an environment that enhances daily life.
              </p>
            </div>
            <div className="mt-8 flex gap-12">
              <div>
                <p className="font-serif text-4xl text-foreground">15+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-foreground">200+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
