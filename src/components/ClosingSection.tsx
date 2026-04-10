import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ClosingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-32 px-6 bg-ivory overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blush/20 to-transparent" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-center relative z-10"
      >
        <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-4">With All Our Love</p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6">
          See You There
        </h2>
        <div className="w-24 h-px bg-gold mx-auto my-8" />

        <p className="font-heading text-lg md:text-xl text-muted-foreground leading-relaxed italic mb-12">
          We look forward to celebrating love, laughter,
          <br />
          and unforgettable moments with you.
        </p>

        <motion.a
          href="#invitation"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(43 72% 52% / 0.4)" }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-full gold-border shadow-glow transition-all duration-300 hover:bg-rose cursor-pointer"
        >
          Join Us in Celebration
        </motion.a>

        <div className="mt-16">
          <p className="font-heading text-2xl text-foreground">
            Parul <span className="text-gradient-gold">♥</span> Uddeshy
          </p>
          <p className="text-muted-foreground font-body text-xs mt-2 tracking-widest uppercase">May 2025</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ClosingSection;
