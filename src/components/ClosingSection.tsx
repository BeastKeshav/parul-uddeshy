import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ClosingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 md:py-40 px-6 bg-ivory overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-blush/25 via-transparent to-peach/15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-rose/10 blur-3xl" />

      {/* Corner flourishes */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-gold/25 rounded-tl-2xl" />
      <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-gold/25 rounded-tr-2xl" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-gold/25 rounded-bl-2xl" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-gold/25 rounded-br-2xl" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-center relative z-10"
      >
        <p className="text-gold text-xs tracking-[0.4em] uppercase font-body mb-4">With All Our Love</p>
        <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-6">
          See You There
        </h2>
        <div className="ornamental-divider my-8">
          <span className="text-gold text-sm">❀</span>
        </div>

        <p className="font-heading text-lg md:text-xl text-muted-foreground leading-relaxed italic mb-14">
          We look forward to celebrating love, laughter,
          <br />
          and unforgettable moments with you.
        </p>

        <motion.a
          href="#invitation"
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(43 72% 48% / 0.5)" }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-12 py-4 bg-gold text-primary-foreground font-body text-sm tracking-[0.2em] uppercase rounded-full shadow-gold transition-all duration-300 hover:brightness-110 cursor-pointer"
        >
          Join Us in Celebration
        </motion.a>

        <div className="mt-20">
          <p className="font-script text-5xl text-foreground mb-2">
            Parul <span className="text-gradient-gold">&</span> Uddeshy
          </p>
          <div className="ornamental-divider my-4">
            <span className="text-gold text-xs">✦</span>
          </div>
          <p className="text-muted-foreground font-body text-xs tracking-[0.3em] uppercase">May 2025</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ClosingSection;
