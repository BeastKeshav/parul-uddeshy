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
          className="w-full h-full object-cover scale-110"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-ivory/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/20 via-transparent to-foreground/20" />
      </div>

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-blush/40 blur-3xl animate-soft-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-peach/30 blur-3xl animate-soft-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/10 blur-3xl animate-soft-glow" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-primary-foreground/80 font-body text-xs md:text-sm tracking-[0.4em] uppercase mb-8"
        >
          You are cordially invited
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-primary-foreground drop-shadow-lg mb-2">
            Parul <span className="text-gradient-gold inline-block mx-2">&</span> Uddeshy
          </h1>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-3 my-8"
        >
          <div className="w-20 md:w-32 h-px bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold text-lg">✦</span>
          <div className="w-20 md:w-32 h-px bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-heading text-lg md:text-2xl text-primary-foreground/90 italic max-w-lg mx-auto mb-12 drop-shadow-sm"
        >
          Two hearts, one beautiful journey… together forever.
        </motion.p>

        <motion.a
          href="#invitation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(43 72% 48% / 0.5)" }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-12 py-4 bg-gold text-primary-foreground font-body text-sm tracking-[0.2em] uppercase rounded-full shadow-gold transition-all duration-300 hover:brightness-110 cursor-pointer"
        >
          Celebrate With Us
        </motion.a>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-ivory" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
    </section>
  );
};

export default HeroSection;
