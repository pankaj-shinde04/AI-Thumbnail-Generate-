import { motion } from 'framer-motion';

const COLOR_MAP = {
  primary: 'rgba(99, 102, 241, 0.2)',
  secondary: 'rgba(139, 92, 246, 0.2)',
  accent: 'rgba(6, 182, 212, 0.2)',
  purple: 'rgba(26, 16, 61, 0.7)',
};

const PRESETS = {
  auth: [
    { x: '50%', y: '50%', size: 600, color: '#1a103d', blur: 120, opacity: 0.7 },
    { x: '50%', y: '50%', size: 400, color: 'primary', blur: 80, opacity: 1 },
  ],
  hero: [
    { x: '50%', y: '0%', size: 800, color: 'primary', blur: 120, opacity: 0.4 },
  ],
  subtle: [
    { x: '80%', y: '20%', size: 400, color: 'secondary', blur: 100, opacity: 0.5 },
    { x: '20%', y: '70%', size: 350, color: 'primary', blur: 90, opacity: 0.35 },
  ],
};

function resolveColor(color) {
  return COLOR_MAP[color] ?? color;
}

function SoftDropBlob({ x, y, size, color, blur, opacity, animate }) {
  const blob = (
    <div
      className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        backgroundColor: resolveColor(color),
        filter: `blur(${blur}px)`,
        opacity,
      }}
    />
  );

  if (!animate) return blob;

  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: x, top: y }}
      animate={{
        x: [0, 12, -8, 0],
        y: [0, -10, 6, 0],
        scale: [1, 1.04, 0.98, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div
        className="rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: resolveColor(color),
          filter: `blur(${blur}px)`,
          opacity,
        }}
      />
    </motion.div>
  );
}

/**
 * Soft blurred background orbs for page/section backgrounds.
 *
 * @example
 * // Preset layout
 * <SoftDrop variant="auth" />
 *
 * @example
 * // Custom drops
 * <SoftDrop drops={[
 *   { x: '50%', y: '50%', size: 500, color: 'primary', blur: 100, opacity: 0.3 },
 * ]} />
 */
export default function SoftDrop({
  variant,
  drops,
  animate = false,
  className = 'pointer-events-none absolute inset-0 overflow-hidden',
}) {
  const blobs = drops ?? PRESETS[variant] ?? PRESETS.subtle;

  return (
    <div className={className} aria-hidden>
      {blobs.map((drop, i) => (
        <SoftDropBlob key={i} {...drop} animate={animate} />
      ))}
    </div>
  );
}

export { PRESETS };
