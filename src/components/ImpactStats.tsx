import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MapPin, Building2, Users, HandHeart } from "lucide-react";

const stats = [
  { icon: MapPin, value: 47, suffix: "", label: "County Branches" },
  { icon: Building2, value: 8, suffix: "", label: "Regional Offices" },
  { icon: Users, value: 5, suffix: "M+", label: "Beneficiaries Annually" },
  { icon: HandHeart, value: 260, suffix: "K+", label: "Members & Volunteers" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl font-bold text-primary md:text-5xl">
      {count}{suffix}
    </div>
  );
};

const ImpactStats = () => {
  return (
    <section className="py-20" style={{ background: "var(--section-gradient)" }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Impact</span>
          <h2 className="mt-3 text-3xl text-foreground md:text-5xl">
            Making a Difference <span className="italic text-primary">Nationwide</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
