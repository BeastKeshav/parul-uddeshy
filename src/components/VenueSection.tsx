import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VenueSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-32 px-6 bg-gradient-romantic overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-peach/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blush/20 blur-3xl" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-4">📍 The Venue</p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-2">Where Dreams Meet</h2>
        <div className="w-24 h-px bg-gold mx-auto my-8" />

        <div className="glass-strong rounded-2xl p-10 md:p-14 gold-border">
          <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Sundar Van Paradise</h3>
          <p className="text-muted-foreground font-body text-base mb-8">
            Dausa, Jaipur, Rajasthan
          </p>

          {/* Map embed */}
          <div className="rounded-xl overflow-hidden gold-border aspect-video">
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
