import { motion } from "framer-motion";
import heroFloral from "@/assets/hero-floral.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroFloral}
          alt="Floral wedding decoration"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/60 via-ivory/40 to-ivory/80" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blush/30 blur-3xl animate-soft-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-peach/30 blur-3xl animate-soft-glow" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-muted-foreground font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          You are cordially invited
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-4"
        >
          Parul <span className="text-gradient-gold">❤</span> Uddeshy
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-32 h-px bg-gold mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-heading text-lg md:text-2xl text-muted-foreground italic max-w-lg mx-auto mb-10"
        >
          Two hearts, one beautiful journey… together forever.
        </motion.p>

        <motion.a
          href="#invitation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(43 72% 52% / 0.4)" }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-full gold-border shadow-glow transition-all duration-300 hover:bg-rose cursor-pointer"
        >
          Celebrate With Us
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
