import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
    <section id="invitation" className="relative py-24 md:py-32 px-6 bg-gradient-romantic">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInView>
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-4">With Love & Joy</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-2">You're Invited</h2>
          <div className="w-24 h-px bg-gold mx-auto my-8" />
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="font-heading text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-16 italic">
            With immense joy and love in our hearts, we invite you to be a part of this beautiful celebration
            as Parul and Uddeshy begin their forever together.
            <br /><br />
            Your presence will make our special day even more memorable.
          </p>
        </FadeInView>

        {/* Family Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <FadeInView delay={0.3}>
            <div className="glass-strong rounded-2xl p-8 gold-border">
              <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-3">The Bride</p>
              <h3 className="font-heading text-3xl text-foreground mb-2">Parul Khandelwal</h3>
              <div className="w-12 h-px bg-blush mx-auto my-3" />
              <p className="text-muted-foreground font-body text-sm">
                D/o Sunita & Rajendra Khandelwal
              </p>
            </div>
          </FadeInView>

          <FadeInView delay={0.4}>
            <div className="glass-strong rounded-2xl p-8 gold-border">
              <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-3">The Groom</p>
              <h3 className="font-heading text-3xl text-foreground mb-2">Uddeshy Khandelwal</h3>
              <div className="w-12 h-px bg-blush mx-auto my-3" />
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
