import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const EmergencyBanner = () => {
  return (
    <div className="overflow-hidden bg-destructive">
      <motion.div
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-3 whitespace-nowrap py-2 text-sm font-semibold text-destructive-foreground"
      >
        <AlertTriangle className="h-4 w-4 shrink-0" />
        EMERGENCY: Over 2 million Kenyans affected by drought — 784,000 children facing malnutrition — 300,000 households need water support — Donate now to save lives
        <AlertTriangle className="h-4 w-4 shrink-0" />
        EMERGENCY: Over 2 million Kenyans affected by drought — 784,000 children facing malnutrition — 300,000 households need water support — Donate now to save lives
      </motion.div>
    </div>
  );
};

export default EmergencyBanner;
