import bedroomImage from "@/assets/project-bedroom.jpg";
import kitchenImage from "@/assets/project-kitchen.jpg";
import bathroomImage from "@/assets/project-bathroom.jpg";
import heroImage from "@/assets/hero-living-room.jpg";

const projects = [
  {
    id: 1,
    title: "The Serene Suite",
    category: "Bedroom",
    image: bedroomImage,
  },
  {
    id: 2,
    title: "Marble & Brass Kitchen",
    category: "Kitchen",
    image: kitchenImage,
  },
  {
    id: 3,
    title: "Spa Sanctuary",
    category: "Bathroom",
    image: bathroomImage,
  },
  {
    id: 4,
    title: "Contemporary Living",
    category: "Living Room",
    image: heroImage,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-muted">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Portfolio</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Selected Works
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground tracking-wide uppercase">
                  {project.category}
                </p>
                <h3 className="font-serif text-xl text-foreground mt-1 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
