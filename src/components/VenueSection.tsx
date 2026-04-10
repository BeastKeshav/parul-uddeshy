import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VenueSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-36 px-6 bg-gradient-deep overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-peach/15 blur-3xl animate-soft-glow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blush/15 blur-3xl animate-soft-glow" style={{ animationDelay: '2s' }} />
      
      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-gold/25 rounded-tl-2xl" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-gold/25 rounded-br-2xl" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <p className="text-gold text-xs tracking-[0.4em] uppercase font-body mb-4">📍 The Venue</p>
        <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-2">Where Dreams Meet</h2>
        <div className="ornamental-divider my-8">
          <span className="text-gold text-sm">❀</span>
        </div>

        <div className="glass-strong rounded-3xl p-10 md:p-16 gold-border-strong">
          <h3 className="font-script text-4xl md:text-5xl text-foreground mb-4">Sundar Van Paradise</h3>
          <p className="text-muted-foreground font-body text-base mb-2">
            Dausa, Jaipur, Rajasthan
          </p>
          <div className="ornamental-divider my-6">
            <span className="text-gold text-xs">✦</span>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden gold-border-strong aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.7!2d76.3!3d26.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzAwLjAiTiA3NsKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 250 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue location"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VenueSection;
