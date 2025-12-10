import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <p className="text-primary-foreground/70 text-sm tracking-[0.2em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Ready to transform your space? I'd love to hear about your project. 
              Reach out for a consultation and let's discuss how we can bring your vision to life.
            </p>
            <div className="space-y-4">
              <a href="mailto:hello@elenamorisot.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail size={18} />
                <span>hello@elenamorisot.com</span>
              </a>
              <a href="tel:+12125551234" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone size={18} />
                <span>+1 (212) 555-1234</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin size={18} />
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary-foreground text-primary font-medium tracking-wide hover:bg-primary-foreground/90 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
