import { Palette, Home, Lightbulb, Ruler } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Full Home Design",
    description: "Complete interior design services from concept to installation, creating cohesive spaces throughout your home.",
  },
  {
    icon: Palette,
    title: "Color Consultation",
    description: "Expert guidance on color palettes that reflect your personality and enhance your space's natural light.",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description: "Strategic furniture placement and layout optimization to maximize both function and flow.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Custom lighting solutions that create ambiance and highlight architectural features.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Services</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            What I Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every project begins with understanding your vision. I offer a range of services 
            tailored to bring your dream spaces to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              <service.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
