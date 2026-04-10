import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInView = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const InvitationSection = () => {
  return (
    <section id="invitation" className="relative py-24 md:py-36 px-6 bg-gradient-deep overflow-hidden">
      {/* Decorative corner flourishes */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-gold/30 rounded-tl-3xl" />
      <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-gold/30 rounded-tr-3xl" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-gold/30 rounded-bl-3xl" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-gold/30 rounded-br-3xl" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blush/20 blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeInView>
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-body mb-4">With Love & Joy</p>
          <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-2">You're Invited</h2>
          <div className="ornamental-divider my-8">
            <span className="text-gold text-sm">❀</span>
          </div>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="font-heading text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-16 italic">
            With immense joy and love in our hearts, we invite you to be a part of this beautiful celebration
            as <span className="text-foreground font-medium">Parul</span> and <span className="text-foreground font-medium">Uddeshy</span> begin their forever together.
            <br /><br />
            Your presence will make our special day even more memorable.
          </p>
        </FadeInView>

        {/* Family Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          <FadeInView delay={0.3}>
            <div className="glass-strong rounded-2xl p-10 gold-border-strong group hover:shadow-gold transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-blush/40 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👰</span>
              </div>
              <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-3">The Bride</p>
              <h3 className="font-script text-4xl text-foreground mb-3">Parul</h3>
              <p className="font-heading text-lg text-foreground mb-2">Khandelwal</p>
              <div className="ornamental-divider my-4">
                <span className="text-gold text-xs">✦</span>
              </div>
              <p className="text-muted-foreground font-body text-sm">
                D/o Sunita & Rajendra Khandelwal
              </p>
            </div>
          </FadeInView>

          <FadeInView delay={0.4}>
            <div className="glass-strong rounded-2xl p-10 gold-border-strong group hover:shadow-gold transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-blush/40 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤵</span>
              </div>
              <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-3">The Groom</p>
              <h3 className="font-script text-4xl text-foreground mb-3">Uddeshy</h3>
              <p className="font-heading text-lg text-foreground mb-2">Khandelwal</p>
              <div className="ornamental-divider my-4">
                <span className="text-gold text-xs">✦</span>
              </div>
              <p className="text-muted-foreground font-body text-sm">
                S/o Sheela & Ashok Khandelwal
              </p>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
