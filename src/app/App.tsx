import { useState, useCallback, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router";
import { motion, AnimatePresence, useInView } from "motion/react";
import {
  Check,
  PlusSquare,
  Plus,
  SealCheck,
  Eyes,
  ArrowCounterClockwise,
  Alarm,
  SmileyMelting,
  Jar,
  ChartBar,
  AppleLogo,
  Code,
  Rss,
  TreeStructure,
  Robot,
  ShoppingCart,
  Scroll,
  PaperPlaneTilt,
  ArrowLeft,
  ArrowRight,
} from "@phosphor-icons/react";
import svgPaths from "../imports/svg-1hdib5ybbz";
import briefSparkLogo from "../assets/brief-spark.png";
import useEmblaCarousel from "embla-carousel-react";

// ─────────────────────────────────────────────
// ⚠️ IMAGE IMPORTS — ALWAYS USE THIS PATTERN
// ─────────────────────────────────────────────
// For component images (avatars, graphics, logos):
//   import imageFile from "../assets/filename.png";
//   Then reference: avatar: imageFile
//
// Never use string paths like "src/assets/filename.png"
// String paths break in production on Cloudflare Pages.
// Vite must process images as ES modules for cache busting.
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// META PIXEL HELPERS
// ─────────────────────────────────────────────

const trackCheckout = (value: number, url: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  if (typeof (window as any).fbq !== "undefined") {
    (window as any).fbq("track", "InitiateCheckout", { value, currency: "SGD", num_items: 1 });
  }
  setTimeout(() => { window.location.href = url; }, 300);
};

// ─────────────────────────────────────────────
// LOGO
// ─────────────────────────────────────────────

function ScantivLogo({ size = 56 }: { size?: number }) {
  const id = `lg${size}`;
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <rect fill="var(--color-neutral-950)" height="56" rx="16" width="56" />
      <path d={svgPaths.pa4a0100} fill={`url(#${id})`} />
      <defs>
        <linearGradient id={id} x1="28.4082" y1="9" x2="28.4082" y2="46.6367" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-neutral-white)" />
          <stop offset="0.75" stopColor="var(--color-accent)" />
          <stop offset="1"    stopColor="var(--color-accent-dark)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ScantivLogoSmall() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d={svgPaths.p20264200} fill="var(--color-neutral-950)" />
      <path d={svgPaths.p5ebcf00}  fill="url(#lgs)" />
      <defs>
        <linearGradient id="lgs" x1="11.1604" y1="3.53571" x2="11.1604" y2="18.3216" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-neutral-white)" />
          <stop offset="0.75" stopColor="var(--color-accent)" />
          <stop offset="1"    stopColor="var(--color-accent-dark)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─────────────────────────────────────────────
// GRID HELPERS  (12-col system)
//   Text / copy  → col-span-12  lg:col-start-4  lg:col-span-6
//   Graphics     → col-span-12  lg:col-start-3  lg:col-span-8
// ─────────────────────────────────────────────

const TEXT_COL = "col-span-12 lg:col-start-4 lg:col-span-6";
const GFX_COL  = "col-span-12 lg:col-start-3 lg:col-span-8";

// ─────────────────────────────────────────────
// MOTION UTILITIES
// ─────────────────────────────────────────────

const ease = [0.25, 0, 0, 1] as const;

/** Scroll-triggered fade-up. Fires once when the element enters the viewport. */
function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// SHARED BUTTON STYLES (from Button tokens)
// ─────────────────────────────────────────────

const btnPrimary   = "inline-flex items-center justify-center rounded-lg transition-colors cursor-pointer bg-accent text-neutral-white hover:bg-accent-dark";
const btnSecondary = "inline-flex items-center justify-center rounded-lg transition-colors cursor-pointer border border-accent text-text hover:bg-neutral-200";

const btnPad = {
  paddingTop:    "var(--button-padding-v)",
  paddingBottom: "var(--button-padding-v)",
  paddingLeft:   "var(--button-padding-h)",
  paddingRight:  "var(--button-padding-h)",
  fontSize:      "var(--fs-button)",
  lineHeight:    "var(--lh-button)",
  fontWeight:    "var(--font-weight-medium)",
} as React.CSSProperties;

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────

function Navbar() {
  const [show, setShow] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      const heroEl = document.getElementById("hero-section");
      if (!heroEl) return;
      setShow(window.scrollY > heroEl.offsetTop + heroEl.offsetHeight);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : -20 }}
      transition={{ duration: 0.3, ease }}
    >
      <div
        className="pointer-events-auto"
        style={{
          background: "linear-gradient(to bottom, var(--color-background-elevated) 60%, transparent)",
          paddingBottom: 24,
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 cursor-pointer">
            <ScantivLogo size={36} />
            <span className="text-text" style={{ fontSize: "var(--fs-h6)", lineHeight: "var(--lh-h6)", fontWeight: "var(--font-weight-medium)" }}>
              Scantiv
            </span>
          </a>
          <div className="hidden sm:block">
            <a href="https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n" onClick={trackCheckout(99, "https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n")} className={btnPrimary} style={btnPad}>Get GEO Audit at S$99</a>
          </div>
          <button className="sm:hidden text-text p-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {mobileOpen
                ? <path d="M18 6L6 18M6 6l12 12" stroke="var(--color-text)" strokeWidth="2" strokeLinecap="round" />
                : <path d="M3 12h18M3 6h18M3 18h18"  stroke="var(--color-text)" strokeWidth="2" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="sm:hidden px-4 pb-4 flex flex-col gap-4">
            <a href="https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n" onClick={trackCheckout(99, "https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n")} className={`${btnPrimary} w-full`} style={btnPad}>Get GEO Audit at S$99</a>
          </div>
        )}
      </div>
    </motion.nav>
  );
}

// ─────────────────────────────────────────────
// HERO CARD PATTERNS
// ─────────────────────────────────────────────

function PatternGrid() {
  const cols = 7, rows = 4;
  return (
    <svg viewBox="0 0 200 112" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%" }} aria-hidden="true">
      {Array.from({ length: rows }, (_, r) =>
        Array.from({ length: cols }, (_, c) => (
          <motion.rect
            key={`${r}-${c}`}
            x={12 + c * 26} y={10 + r * 24} width={18} height={18} rx={3}
            fill="rgba(255,255,255,0.28)"
            animate={{ opacity: [0.18, 0.65, 0.18] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: (r + c) * 0.18 }}
          />
        ))
      )}
    </svg>
  );
}

function PatternLines() {
  const groups = [[170, 130], [150, 115, 90], [160, 120]];
  let baseY = 12;
  const items: { y: number; w: number }[] = [];
  for (const group of groups) {
    for (const w of group) { items.push({ y: baseY, w }); baseY += 14; }
    baseY += 8;
  }
  return (
    <svg viewBox="0 0 200 112" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%" }} aria-hidden="true">
      {items.map(({ y, w }, i) => (
        <motion.rect
          key={i} x={16} y={y} height={5} rx={2.5}
          fill="rgba(255,255,255,0.35)"
          animate={{ width: [w * 0.35, w, w * 0.6, w * 0.35] }}
          transition={{ duration: 9.6 + i * 0.54, repeat: Infinity, ease: "easeInOut", delay: i * 0.36 }}
        />
      ))}
    </svg>
  );
}

function PatternBars() {
  const heights = [40, 65, 50, 85, 55, 75, 45, 90, 60];
  const bw = 14, gap = 8, startX = 16, baseY = 106;
  return (
    <svg viewBox="0 0 200 112" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%" }} aria-hidden="true">
      {heights.map((h, i) => (
        <motion.rect
          key={i}
          x={startX + i * (bw + gap)} y={baseY - h} width={bw} height={h} rx={3}
          fill="rgba(255,255,255,0.28)"
          style={{ transformOrigin: "50% 100%" }}
          animate={{ scaleY: [0.12, 1, 0.4, 0.75, 0.22, 0.88, 0.12] }}
          transition={{ duration: 6.6 + (i % 3) * 1.35, repeat: Infinity, ease: "easeInOut", delay: i * 0.48 }}
        />
      ))}
    </svg>
  );
}

function PatternFrames() {
  const frames = [
    { x: 12, y: 8,  w: 176, h: 96 },
    { x: 26, y: 20, w: 148, h: 72 },
    { x: 40, y: 32, w: 120, h: 48 },
    { x: 54, y: 44, w: 92,  h: 24 },
  ];
  return (
    <svg viewBox="0 0 200 112" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%" }} aria-hidden="true">
      {frames.map(({ x, y, w, h }, i) => (
        <motion.rect
          key={i} x={x} y={y} width={w} height={h} rx={7 - i}
          fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth={1.5}
          animate={{ opacity: [0.12, 0.65, 0.12] }}
          transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: (frames.length - 1 - i) * 0.7 }}
        />
      ))}
    </svg>
  );
}

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────

const heroCards = [
  { bg: "var(--color-neutral-400)",      textColor: "var(--color-neutral-950)", title: "Works for any website or platform",               desc: "Shopify, WordPress, Wix, or custom-built. If it's on the web, we can audit it.", rotate: -12, x: -30, Pattern: PatternGrid },
  { bg: "var(--color-secondary-yellow)", textColor: "var(--color-neutral-950)", title: "Actionables written for founders, not developers", desc: "Plain language. Prioritised by impact. No tech team needed to make sense of it.", rotate: -4, x: -10,  Pattern: PatternLines },
  { bg: "var(--color-accent)",           textColor: "var(--color-neutral-950)", title: "Report in 24 hours",                               desc: "Pay today, receive your full audit in your inbox by tomorrow.", rotate: 3, x: 10,              Pattern: PatternBars },
  { bg: "var(--color-neutral-950)",      textColor: "var(--color-neutral-50)",  title: "No subscription. Pay once.",                       desc: "One payment, one report. No retainer, no renewal emails.", rotate: 10, x: 30,                   Pattern: PatternFrames },
];

function HeroCards() {
  const [selected, setSelected] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Click-outside handler
  useEffect(() => {
    if (selected === null) return;
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setSelected(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [selected]);

  const hasSelection = selected !== null;

  const unselectedCards = heroCards
    .map((card, i) => ({ card, i }))
    .filter(({ i }) => i !== selected);

  return (
    <div ref={containerRef} className="relative flex items-end justify-center" style={{ height: 560 }}>
      {heroCards.map((card, i) => {
        const isSelected = selected === i;
        const unselected = hasSelection && !isSelected;

        const unselectedIndex = unselectedCards.findIndex(({ i: idx }) => idx === i);
        const totalUnselected = unselectedCards.length;
        const clusterSpread = 50;
        const clusterOffset = unselected
          ? (unselectedIndex - (totalUnselected - 1) / 2) * clusterSpread
          : 0;
        const clusterRotate = unselected
          ? (unselectedIndex - (totalUnselected - 1) / 2) * 8
          : 0;

        return (
          <motion.div
            key={i}
            onClick={() => setSelected(isSelected ? null : i)}
            className="absolute rounded-2xl p-5 flex flex-col justify-between cursor-pointer"
            style={{
              backgroundColor: card.bg,
              zIndex: isSelected ? 20 : unselected ? unselectedIndex + 1 : i,
              transformOrigin: "center bottom",
              bottom: 0,
            }}
            animate={{
              rotate: isSelected ? 0 : unselected ? clusterRotate : card.rotate,
              x: isSelected ? 0 : unselected ? clusterOffset : (i - 1.5) * 155,
              y: isSelected ? -80 : unselected ? 0 : -120,
              scale: unselected ? 0.6 : 1,
              width: isSelected ? 360 : 190,
              height: isSelected ? 464 : 280,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            whileHover={!hasSelection ? { y: -132, scale: 1.04 } : undefined}
          >
            <div className={`rounded-xl w-full overflow-hidden ${isSelected ? "aspect-square" : "flex-1 max-h-28"}`} style={{ backgroundColor: "rgba(255,255,255,0.18)" }}>
              <card.Pattern />
            </div>
            <div className="mt-auto pt-3">
              <p style={{ color: card.textColor, fontSize: "var(--fs-h5)", lineHeight: "var(--lh-h5)", fontWeight: "var(--font-weight-medium)" }}>
                {card.title}
              </p>
              <AnimatePresence>
                {isSelected && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-1.5"
                    style={{ color: card.textColor, opacity: 0.75, fontSize: "var(--fs-para-lg)", lineHeight: "var(--lh-para-lg)" }}
                  >
                    {card.desc}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function HeroCardsMobile() {
  const [stack, setStack] = useState(() => heroCards.map((_, i) => i));
  const topIndex = stack[stack.length - 1];

  const handleSwipe = useCallback(() => {
    setStack((prev) => {
      const top = prev[prev.length - 1];
      return [top, ...prev.slice(0, -1)];
    });
  }, []);

  return (
    <div className="py-6">
      <div className="relative mx-auto" style={{ maxWidth: 320, height: 420 }}>
        {stack.map((cardIndex, stackPos) => {
          const card = heroCards[cardIndex];
          const fromTop = stack.length - 1 - stackPos; // 0 = top card
          const isTop = fromTop === 0;

          return (
            <motion.div
              key={cardIndex}
              className="absolute inset-0 rounded-2xl p-6 flex flex-col touch-pan-y"
              style={{
                backgroundColor: card.bg,
                zIndex: stackPos,
                cursor: isTop ? "grab" : "default",
              }}
              animate={{
                y: fromTop * 10,
                scale: 1 - fromTop * 0.04,
                opacity: fromTop > 3 ? 0 : 1 - fromTop * 0.15,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.9}
              onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) > 80 || Math.abs(info.velocity.x) > 400) {
                  handleSwipe();
                }
              }}
            >
              <div
                className="rounded-xl w-full flex-1 overflow-hidden"
                style={{ backgroundColor: "rgba(255,255,255,0.18)", minHeight: 160 }}
              >
                <card.Pattern />
              </div>
              <div className="mt-auto pt-4">
                <p style={{
                  color: card.textColor,
                  fontSize: "var(--fs-h5)",
                  lineHeight: "var(--lh-h5)",
                  fontWeight: "var(--font-weight-medium)",
                }}>
                  {card.title}
                </p>
                <p
                  className="mt-2"
                  style={{
                    color: card.textColor,
                    opacity: 0.7,
                    fontSize: "var(--fs-para-body)",
                    lineHeight: "var(--lh-para-body)",
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-5">
        {heroCards.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all"
            style={{
              width: i === topIndex ? 24 : 8,
              height: 8,
              backgroundColor: i === topIndex ? "var(--color-accent)" : "var(--color-border)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-background-elevated overflow-hidden pt-16 md:pt-24" id="hero-section">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-x-4">

          {/* ── 6-col: tagline ── */}
          <div className={`${TEXT_COL} pb-8`}>
            <ScantivLogo size={56} />
            <div className="mt-6 space-y-3">
              <h1 className="text-text" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                Know where AI finds you.
              </h1>
              <p className="text-text-quarternary" style={{ fontSize: "var(--fs-para-xl)", lineHeight: "var(--lh-para-xl)" }}>
                When someone asks ChatGPT for a business like yours in Singapore, you either show up or you don't. Most owners have no idea which. Get an expert report in 24 hours for SGD 99, a fraction of what a GEO agency charges.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n" onClick={trackCheckout(99, "https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n")} className={btnPrimary} style={btnPad}>Get GEO Audit at S$99</a>
              <a href="#sample-report" className={btnSecondary} style={btnPad}>View Sample Report</a>
            </div>
          </div>

          {/* ── 8-col: fan cards – desktop ── */}
          <div className={`${GFX_COL} hidden md:block mt-6`}>
            <HeroCards />
          </div>

          {/* ── mobile: swipeable stacked cards ── */}
          <div className="col-span-12 md:hidden">
            <HeroCardsMobile />
          </div>

          {/* ── 8-col: trust badges – no top border ── */}
          <div className={`${GFX_COL} flex flex-wrap justify-start md:justify-center gap-4 sm:gap-6 py-8 mt-2 md:mt-8`}>
            {[
              { icon: <SealCheck size={20} color="var(--color-accent)" weight="regular" />, label: "Expert-reviewed before delivery." },
              { icon: <Eyes      size={20} color="var(--color-accent)" weight="regular" />, label: "Flat fees. No hidden fees." },
              { icon: <ArrowCounterClockwise size={20} color="var(--color-accent)" weight="regular" />, label: "Free revision within 7 days." },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-1.5">
                {icon}
                <span className="text-text-secondary" style={{ fontSize: "var(--fs-para-sm)" }}>{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// PROBLEM SPACE
// ─────────────────────────────────────────────

const painPoints = [
  { icon: <Alarm         size={24} color="var(--color-accent)" weight="regular" />, title: "Time Constrained",    desc: "CEO. Chief of Everything. Managing a new AI channel is the last thing on your list." },
  { icon: <SmileyMelting size={24} color="var(--color-accent)" weight="regular" />, title: "Getting Overwhelmed", desc: "You got a free audit, got a score, and got left alone with it. AI Visibility score? More like AI Confusion score." },
  { icon: <Jar           size={24} color="var(--color-accent)" weight="regular" />, title: "Budget Constrained",  desc: "S$500/mo on social. S$200/mo on dev. Nothing left for AI." },
];

function ProblemSpaceSection() {
  return (
    <section className="bg-background-elevated py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8">

          {/* ── 6-col: copy ── */}
          <FadeUp className={TEXT_COL}>
            <p className="text-text" style={{ fontSize: "var(--fs-h4)", lineHeight: "var(--lh-h4)", fontWeight: "var(--font-weight-medium)" }}>
              Every day, customers are asking AI tools which business offers the best service or products.
            </p>
            <p className="text-text-quarternary mt-3" style={{ fontSize: "var(--fs-para-xl)", lineHeight: "var(--lh-para-xl)" }}>
              ChatGPT? Claude? Gemini? Most Singapore business owners have no idea which side of that line they're on. This is where most end up.
            </p>
          </FadeUp>

          {/* ── 8-col: pain-point cards ── */}
          <div className={GFX_COL}>
            <div className="grid grid-cols-1 sm:grid-cols-3 rounded-xl overflow-hidden border border-border">
              {painPoints.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  style={{ padding: "var(--card-padding)" }}
                  className={i < painPoints.length - 1 ? "dotted-divider" : ""}
                >
                  {p.icon}
                  <div className="mt-2.5">
                    <h3 className="text-text" style={{ fontSize: "var(--fs-h6)", lineHeight: "var(--lh-h6)", fontWeight: "var(--font-weight-medium)" }}>{p.title}</h3>
                    <p className="text-text-tertiary mt-1" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// FEATURES
// ─────────────────────────────────────────────

function FeatureGraphicScore() {
  const svgRef = useRef<SVGSVGElement>(null);
  const inView = useInView(svgRef, { once: true, margin: "-40px" });
  const cx = 200, cy = 108, r = 72;
  const circ = 2 * Math.PI * r;
  const track = circ * 0.75;
  const filled = track * 0.68;
  const signals = [
    { label: "AI Citability",  val: 72, pct: 0.72 },
    { label: "Technical",      val: 80, pct: 0.80 },
    { label: "Brand Presence", val: 55, pct: 0.55 },
  ];
  const bh = 4, bx = 196, bw = 110;
  return (
    <svg ref={svgRef} viewBox="0 0 400 280" fill="none" style={{ width: "100%", height: "100%", display: "block" }}>
      {/* Track — static */}
      <circle cx={cx} cy={cy} r={r} stroke="var(--color-neutral-200)" strokeWidth="11" fill="none"
        strokeDasharray={`${track} ${circ}`} strokeLinecap="round"
        transform={`rotate(135 ${cx} ${cy})`} />
      {/* Fill arc — draws in */}
      <motion.circle cx={cx} cy={cy} r={r} stroke="var(--color-accent)" strokeWidth="11" fill="none"
        strokeDasharray={`${filled} ${circ}`} strokeLinecap="round"
        transform={`rotate(135 ${cx} ${cy})`}
        initial={{ strokeDashoffset: filled }}
        animate={{ strokeDashoffset: inView ? 0 : filled }}
        transition={{ duration: 1.1, ease, delay: 0.1 }} />
      {/* Score number — centred at circle midpoint */}
      <motion.text x={cx} y={cy - 8} textAnchor="middle" dominantBaseline="central"
        style={{ fontSize: 56, fontWeight: 500, fontFamily: "var(--font-primary)", fill: "var(--color-text)", letterSpacing: "-1px" }}
        initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.4, ease, delay: 0.45 }}>
        68
      </motion.text>
      <motion.text x={cx} y={cy + 42} textAnchor="middle"
        style={{ fontSize: 11, fontFamily: "var(--font-primary)", fill: "var(--color-text-quarternary)" }}
        initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.4, ease, delay: 0.6 }}>
        out of 100
      </motion.text>
      {/* Signal rows */}
      {signals.map(({ label, val, pct }, i) => {
        const y = 194 + i * 22;
        const d = 0.65 + i * 0.12;
        return (
          <g key={i}>
            <motion.text x={84} y={y} textAnchor="start" dominantBaseline="middle"
              style={{ fontSize: 11, fontFamily: "var(--font-primary)", fill: "var(--color-text-tertiary)" }}
              initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.35, ease, delay: d }}>
              {label}
            </motion.text>
            <rect x={bx} y={y - bh / 2} width={bw} height={bh} rx={2} fill="var(--color-neutral-200)" />
            <motion.rect x={bx} y={y - bh / 2} height={bh} rx={2} fill="var(--color-accent)"
              initial={{ width: 0 }} animate={{ width: inView ? bw * pct : 0 }}
              transition={{ duration: 0.6, ease, delay: d }} />
            <motion.text x={bx + bw + 10} y={y} textAnchor="start" dominantBaseline="middle"
              style={{ fontSize: 11, fontFamily: "var(--font-primary)", fill: "var(--color-text-tertiary)" }}
              initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.35, ease, delay: d }}>
              {val}
            </motion.text>
          </g>
        );
      })}
    </svg>
  );
}

function FeatureGraphicPlan() {
  const svgRef = useRef<SVGSVGElement>(null);
  const inView = useInView(svgRef, { once: true, margin: "-40px" });
  const items = [
    { priority: "HIGH", bg: "var(--color-accent)",           fg: "var(--color-neutral-white)", action: "Fix structured data markup",  impact: "Improves citation confidence"    },
    { priority: "MED",  bg: "var(--color-secondary-yellow)", fg: "var(--color-neutral-950)",   action: "Add entity sameAs links",     impact: "Connects brand across platforms" },
    { priority: "LOW",  bg: "var(--color-neutral-300)",      fg: "var(--color-neutral-600)",   action: "Update meta descriptions",    impact: "Helps AI crawlers index pages"   },
  ];
  const px = 80, pillW = 44, pillH = 22, textX = px + pillW + 12;
  const rows = [74, 148, 222];
  return (
    <svg ref={svgRef} viewBox="0 0 400 296" fill="none" style={{ width: "100%", height: "100%", display: "block" }}>
      {items.map(({ priority, bg, fg, action, impact }, i) => (
        <motion.g key={i}
          initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.45, ease, delay: 0.15 + i * 0.15 }}>
          <rect x={px} y={rows[i] - pillH / 2} width={pillW} height={pillH} rx={4} fill={bg} />
          <text x={px + pillW / 2} y={rows[i]} textAnchor="middle" dominantBaseline="central"
            style={{ fontSize: 10, fontWeight: 500, fontFamily: "var(--font-primary)", fill: fg, letterSpacing: "0.5px" }}>
            {priority}
          </text>
          <text x={textX} y={rows[i] - 8} textAnchor="start"
            style={{ fontSize: 13, fontWeight: 500, fontFamily: "var(--font-primary)", fill: "var(--color-text)" }}>
            {action}
          </text>
          <text x={textX} y={rows[i] + 12} textAnchor="start"
            style={{ fontSize: 11, fontFamily: "var(--font-primary)", fill: "var(--color-text-tertiary)" }}>
            {impact}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

function FeatureGraphicExpert() {
  const svgRef = useRef<SVGSVGElement>(null);
  const inView = useInView(svgRef, { once: true, margin: "-40px" });
  const lp = 110;
  const badgeY = 192;
  const badgeR = 9;
  const badgeCirc = 2 * Math.PI * badgeR;
  const textLines = [
    { w: 160 }, { w: 120 }, { w: 148 }, { w: 88 }, { w: 136 }, { w: 76 },
  ];
  return (
    <svg ref={svgRef} viewBox="0 0 400 296" fill="none" style={{ width: "100%", height: "100%", display: "block" }}>
      {/* Header — left aligned */}
      <text x={lp} y={66} textAnchor="start"
        style={{ fontSize: 10, letterSpacing: "1.5px", fontFamily: "var(--font-primary)", fill: "var(--color-text-quarternary)", fontWeight: 500 }}>
        AI ANALYSIS
      </text>
      {/* Text line rects — left aligned */}
      {textLines.map(({ w }, i) => (
        <motion.rect key={i} x={lp} y={82 + i * 15 - 3} width={w} height={6} rx={3} fill="var(--color-neutral-300)"
          initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.35, ease, delay: i * 0.06 }} />
      ))}
      {/* Badge row: circle + checkmark + label on same line */}
      <motion.circle cx={lp + badgeR} cy={badgeY} r={badgeR}
        stroke="var(--color-accent)" strokeWidth="1.5" fill="none"
        strokeDasharray={`${badgeCirc} ${badgeCirc}`}
        initial={{ strokeDashoffset: badgeCirc }}
        animate={{ strokeDashoffset: inView ? 0 : badgeCirc }}
        transition={{ duration: 0.5, ease, delay: 0.5 }} />
      <motion.path
        d={`M ${lp + 4} ${badgeY + 0.5} L ${lp + 8} ${badgeY + 5} L ${lp + 15} ${badgeY - 5}`}
        stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: inView ? 1 : 0, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.3, ease, delay: 0.9 }} />
      <motion.text x={lp + badgeR * 2 + 8} y={badgeY} textAnchor="start" dominantBaseline="middle"
        style={{ fontSize: 10, letterSpacing: "1.5px", fontWeight: 600, fontFamily: "var(--font-primary)", fill: "var(--color-accent)" }}
        initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.4, ease, delay: 1.05 }}>
        GEO SPECIALIST REVIEWED
      </motion.text>
      {/* Two supporting lines below badge */}
      <motion.rect x={lp} y={badgeY + 20} width={140} height={5} rx={2} fill="var(--color-neutral-300)"
        initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.3, ease, delay: 1.2 }} />
      <motion.rect x={lp} y={badgeY + 34} width={100} height={5} rx={2} fill="var(--color-neutral-300)"
        initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.3, ease, delay: 1.3 }} />
    </svg>
  );
}

const featureCards = [
  { title: "One Clear Score",                      desc: "A composite GEO Score from 0 to 100 — one number that captures your full AI search visibility. No raw data to decipher. No dashboard to learn.",                                               Graphic: FeatureGraphicScore  },
  { title: "A prioritised action plan",            desc: "Every finding comes with a plain-language fix. Ordered by impact. Written for a business owner, not a developer. You know what to do next before you finish.",                                    Graphic: FeatureGraphicPlan   },
  { title: "Expert interpretation, not automation", desc: "Every Scantiv audit is conducted by AI and reviewed by a GEO practitioner. Every report reflects human judgement, not an algorithm guessing at priorities.", Graphic: FeatureGraphicExpert },
];

const signalItems = [
  { icon: <ChartBar      size={24} color="var(--color-accent)" weight="regular" />, title: "AI Citability Score",                desc: "How likely AI models are to cite or reference your content when answering queries." },
  { icon: <AppleLogo     size={24} color="var(--color-accent)" weight="regular" />, title: "Brand Presence Across AI Platforms", desc: "How your brand is recognised and represented across AI search tools and citation sources." },
  { icon: <Code          size={24} color="var(--color-accent)" weight="regular" />, title: "Technical SEO for AI Crawlers",       desc: "Whether AI bots can access, crawl, and index your site correctly." },
  { icon: <Rss           size={24} color="var(--color-accent)" weight="regular" />, title: "E-E-A-T Signals",                     desc: "Your expertise, authority, and trust signals — the factors that make AI choose your content over a competitor's." },
  { icon: <TreeStructure size={24} color="var(--color-accent)" weight="regular" />, title: "Schema Markup & Structured Data",     desc: "Whether your site gives AI models the structured context they need to understand and cite your business." },
  { icon: <Robot         size={24} color="var(--color-accent)" weight="regular" />, title: "Platform Readiness",                  desc: "Readiness across ChatGPT, Perplexity, Google AI Overviews, Gemini, and Bing Copilot." },
];

function FeaturesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps", dragFree: false });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateScrollState = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateScrollState();
    emblaApi.on("select", updateScrollState);
    emblaApi.on("reInit", updateScrollState);
    return () => {
      emblaApi.off("select", updateScrollState);
      emblaApi.off("reInit", updateScrollState);
    };
  }, [emblaApi, updateScrollState]);

  return (
    <section className="bg-background-elevated py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-x-4 gap-y-10">

          {/* ── 6-col: headline + carousel nav ── */}
          <FadeUp className={TEXT_COL}>
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-text flex-1" style={{ fontSize: "var(--fs-h4)", lineHeight: "var(--lh-h4)", fontWeight: "var(--font-weight-medium)" }}>
                Scantiv tells you exactly where you stand and what to fix first.
              </h2>
              <div className="flex items-center gap-2 shrink-0 pt-1">
                <button
                  onClick={scrollPrev}
                  disabled={!canPrev}
                  className="rounded-full border border-border bg-background flex items-center justify-center transition-colors hover:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ width: 36, height: 36 }}
                  aria-label="Previous"
                >
                  <ArrowLeft size={16} color="var(--color-text)" />
                </button>
                <button
                  onClick={scrollNext}
                  disabled={!canNext}
                  className="rounded-full border border-border bg-background flex items-center justify-center transition-colors hover:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ width: 36, height: 36 }}
                  aria-label="Next"
                >
                  <ArrowRight size={16} color="var(--color-text)" />
                </button>
              </div>
            </div>

            {/* ── Embla carousel: 1.5 cards peek ── */}
            <div className="overflow-hidden mt-6" ref={emblaRef}>
              <div className="flex gap-4">
                {featureCards.map((card, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex flex-col gap-3"
                    style={{ width: "calc(66.67% - 8px)" }}
                  >
                    <div className="rounded-xl overflow-hidden w-full bg-neutral-100" style={{ aspectRatio: "4/3" }}>
                      <card.Graphic />
                    </div>
                    <div>
                        <h3 className="text-text" style={{ fontSize: "var(--fs-h6)", lineHeight: "var(--lh-h6)", fontWeight: "var(--font-weight-medium)" }}>{card.title}</h3>
                      <p className="text-text-tertiary mt-1" style={{ fontSize: "var(--fs-para-sm)", lineHeight: "var(--lh-para-sm)" }}>{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* ── 6-col: divider + signal intro ── */}
          <FadeUp className={TEXT_COL} delay={0.05}>
            <div className="dotted-border-t mb-6" />
            <p className="text-text-tertiary" style={{ fontSize: "var(--fs-para-lg)", lineHeight: "var(--lh-para-lg)" }}>
              A complete audit across every major AI search signal.
            </p>
          </FadeUp>

          {/* ── 6-col: 2×3 signal grid ── */}
          <div className={TEXT_COL}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {signalItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease }}
                  className="flex flex-col gap-2"
                >
                  {item.icon}
                  <div>
                    <h3 className="text-text" style={{ fontSize: "var(--fs-h6)", fontWeight: "var(--font-weight-medium)" }}>{item.title}</h3>
                    <p className="text-text-tertiary mt-0.5" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────

const testimonials = [
  {
    avatar: null,
    name: "BEATRICE SECK",
    quote: "Scantiv has helped my business to get found on ChatGPT and Google with an actionable plan that I can use directly in my Webflow site.",
    attribution: "Beatrice. Artist at Beatrice Seck Official",
  },
  {
    avatar: briefSparkLogo,
    name: null,
    quote: "I initially paid for the audit and got my report within a day. Our site was quite complicated as it was previously built on Wix. The consultation with Scantiv's GEO specialist helped to remove some blockers and eventually we migrated out of Wix. That led us to improve our AI visibility score by 2.2x.",
    attribution: "Zacchaeus. Founder at BriefSpark AI",
  },
];

function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps", dragFree: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <section className="bg-background-elevated py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8">

          {/* ── 6-col: heading ── */}
          <FadeUp className={TEXT_COL}>
            <h2 className="text-text" style={{ fontSize: "var(--fs-h4)", lineHeight: "var(--lh-h4)", fontWeight: "var(--font-weight-medium)" }}>
              Real businesses. Real results.
            </h2>
            <p className="text-text-quarternary mt-2" style={{ fontSize: "var(--fs-para-xl)", lineHeight: "var(--lh-para-xl)" }}>
              What founders discovered when they found out where AI stands on their business.
            </p>
          </FadeUp>

          {/* ── Desktop: 6-col grid; Mobile: carousel ── */}
          <div className={TEXT_COL}>
            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease }}
                className="dotted-border-box flex flex-col gap-4 p-5 bg-neutral-white"
              >
                {/* Avatar or name */}
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.attribution}
                    className="object-contain object-left"
                    style={{ height: 32, width: "auto", display: "block" }}
                  />
                ) : t.name ? (
                  <p
                    className="text-text-quarternary tracking-widest"
                    style={{ fontSize: "var(--fs-para-body)", fontWeight: "var(--font-weight-medium)", letterSpacing: "0.08em" }}
                  >
                    {t.name}
                  </p>
                ) : null}

                {/* Quote */}
                <blockquote className="flex-1 flex flex-col gap-4" style={{ margin: 0 }}>
                  <p className="text-text" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                    {t.quote}
                  </p>
                  <footer>
                    <cite style={{ fontSize: "var(--fs-para-sm)", lineHeight: "var(--lh-para-sm)", color: "var(--color-accent)", fontStyle: "normal" }}>
                      {t.attribution}
                    </cite>
                  </footer>
                </blockquote>
              </motion.div>
            ))}
            </div>

            {/* Mobile carousel */}
            <div className="md:hidden">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                  {testimonials.map((t, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 flex flex-col gap-4 p-5 bg-neutral-white dotted-border-box"
                      style={{ width: "100%" }}
                    >
                      {/* Avatar or name */}
                      {t.avatar ? (
                        <img
                          src={t.avatar}
                          alt={t.attribution}
                          className="object-contain object-left"
                          style={{ height: 32, width: "auto", display: "block" }}
                        />
                      ) : t.name ? (
                        <p
                          className="text-text-quarternary tracking-widest"
                          style={{ fontSize: "var(--fs-para-body)", fontWeight: "var(--font-weight-medium)", letterSpacing: "0.08em" }}
                        >
                          {t.name}
                        </p>
                      ) : null}

                      {/* Quote */}
                      <blockquote className="flex-1 flex flex-col gap-4" style={{ margin: 0 }}>
                        <p className="text-text" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                          {t.quote}
                        </p>
                        <footer>
                          <cite style={{ fontSize: "var(--fs-para-sm)", lineHeight: "var(--lh-para-sm)", color: "var(--color-accent)", fontStyle: "normal" }}>
                            {t.attribution}
                          </cite>
                        </footer>
                      </blockquote>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel indicators */}
              <div className="flex gap-2 justify-center mt-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={`rounded-full transition-all ${
                      i === selectedIndex
                        ? "bg-text"
                        : "bg-text-quarternary hover:bg-text-tertiary"
                    }`}
                    style={{ width: i === selectedIndex ? 8 : 6, height: 6 }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SAMPLE REPORT
// ─────────────────────────────────────────────

function ReportPreviewSVG() {
  const rows = [
    { w: 120 }, { w: 148 }, { w: 96  },
    { w: 136 }, { w: 112 }, { w: 158 },
  ];
  const categories = [
    { w: 100, score: 72 },
    { w: 80,  score: 58 },
    { w: 116, score: 81 },
    { w: 90,  score: 44 },
    { w: 104, score: 68 },
  ];
  const maxBar = 110;
  return (
    <svg
      viewBox="0 0 320 260"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "100%", display: "block", padding: "20px" }}
      aria-hidden="true"
    >
      {/* page shadow */}
      <rect x="14" y="14" width="292" height="236" rx="6" fill="rgba(0,0,0,0.06)" />

      {/* page */}
      <rect x="10" y="10" width="292" height="236" rx="6" fill="#ffffff" />

      {/* header bar */}
      <rect x="10" y="10" width="292" height="32" rx="6" fill="#f2f2ee" />
      <rect x="10" y="30" width="292" height="12" fill="#f2f2ee" />

      {/* logo dot */}
      <circle cx="28" cy="26" r="5" fill="#b5f23d" />
      {/* title line */}
      <rect x="40" y="22" width="60" height="5" rx="2.5" fill="#c8c8c2" />
      {/* page label right */}
      <rect x="256" y="22" width="32" height="5" rx="2.5" fill="#dcdcd8" />

      {/* divider */}
      <line x1="10" y1="42" x2="302" y2="42" stroke="#e8e8e4" strokeWidth="1" />

      {/* ── left column: text lines ── */}
      {/* section label */}
      <rect x="24" y="54" width="48" height="4" rx="2" fill="#d0d0cc" />
      {rows.map(({ w }, i) => (
        <rect key={i} x="24" y={64 + i * 12} width={w} height="5" rx="2.5" fill={i % 3 === 0 ? "#c8c8c2" : "#e0e0dc"} />
      ))}

      {/* ── right column: score area ── */}
      {/* score box */}
      <rect x="178" y="50" width="110" height="72" rx="6" fill="#f7f7f4" />
      <rect x="192" y="62" width="32" height="4" rx="2" fill="#d0d0cc" />
      <text x="233" y="84" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="700" fill="#1a1a18">63</text>
      <rect x="210" y="90" width="46" height="4" rx="2" fill="#dcdcd8" />
      <rect x="216" y="98" width="34" height="4" rx="2" fill="#e8e8e4" />

      {/* ── category rows ── */}
      <line x1="24" y1="142" x2="298" y2="142" stroke="#ececea" strokeWidth="1" />
      <rect x="24" y="150" width="44" height="4" rx="2" fill="#d0d0cc" />
      {categories.map(({ w, score }, i) => {
        const barFill = (score / 100) * maxBar;
        const y = 162 + i * 16;
        return (
          <g key={i}>
            <rect x="24" y={y} width={w} height="4" rx="2" fill="#dcdcd8" />
            <rect x="178" y={y} width={maxBar} height="4" rx="2" fill="#ececea" />
            <rect x="178" y={y} width={barFill} height="4" rx="2" fill="#b5f23d" opacity="0.7" />
          </g>
        );
      })}

      {/* footer line */}
      <line x1="10" y1="232" x2="302" y2="232" stroke="#e8e8e4" strokeWidth="1" />
      <rect x="24" y="238" width="40" height="4" rx="2" fill="#e0e0dc" />
      <rect x="258" y="238" width="30" height="4" rx="2" fill="#e8e8e4" />
    </svg>
  );
}

function SampleReportSection() {
  return (
    <section className="bg-background-elevated py-16 md:py-24" id="sample-report">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8">

          {/* ── 6-col: heading ── */}
          <FadeUp className={TEXT_COL}>
            <h2 className="text-text" style={{ fontSize: "var(--fs-h4)", lineHeight: "var(--lh-h4)", fontWeight: "var(--font-weight-medium)" }}>
              See exactly what you're getting before you pay.
            </h2>
            <p className="text-text-quarternary mt-2" style={{ fontSize: "var(--fs-para-xl)", lineHeight: "var(--lh-para-xl)" }}>
              Your report lands in your inbox within 24 hours. Here's what it looks like.
            </p>
          </FadeUp>

          {/* ── 6-col: report preview ── */}
          <FadeUp className={TEXT_COL} delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-border flex flex-col-reverse sm:flex-row">
              <div className="flex flex-col gap-5 flex-1" style={{ padding: "var(--card-padding)" }}>
                <ScantivLogoSmall />
                <div>
                  <p className="text-text" style={{ fontSize: "var(--fs-h6)", fontWeight: "var(--font-weight-medium)" }}>GEO Audit PDF</p>
                  <p className="text-text-quarternary mt-1" style={{ fontSize: "var(--fs-para-sm)", lineHeight: "var(--lh-para-sm)" }}>
                    The preview is based on a real audit anonymised for confidentiality. What you receive looks identical to this, personalised to your business.
                  </p>
                </div>
                <a href="/geo-report-public.pdf" target="_blank" rel="noopener noreferrer" className={btnSecondary} style={btnPad}>Preview PDF</a>
              </div>
              <div className="flex-1 min-h-52 sm:min-h-64 overflow-hidden" style={{ background: "var(--color-background-elevated)" }}>
                <ReportPreviewSVG />
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// HOW IT WORKS
// ─────────────────────────────────────────────

const steps = [
  { icon: <ShoppingCart   size={24} color="var(--color-accent)" weight="regular" />, title: "Pay online",          desc: "One-time payment. SGD 99 for the report, SGD 299 to include a 60-minute strategy call. No subscription. No upsell." },
  { icon: <Scroll         size={24} color="var(--color-accent)" weight="regular" />, title: "Fill a short form",   desc: "Five minutes. Your website URL and a few details about your business. We handle everything else." },
  { icon: <PaperPlaneTilt size={24} color="var(--color-accent)" weight="regular" />, title: "Receive your report", desc: "A professional PDF in your inbox within 24 hours. Your GEO Score, category breakdown, and prioritised action plan." },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background-elevated py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8">

          {/* ── 6-col: heading ── */}
          <FadeUp className={TEXT_COL}>
            <h2 className="text-text" style={{ fontSize: "var(--fs-h4)", lineHeight: "var(--lh-h4)", fontWeight: "var(--font-weight-medium)" }}>
              How it works
            </h2>
            <p className="text-text-quarternary mt-2" style={{ fontSize: "var(--fs-para-xl)", lineHeight: "var(--lh-para-xl)" }}>
              Your AI search score. In 24 hours. No monthly fees, no contracts, no agency required.
            </p>
          </FadeUp>

          {/* ── 8-col: 3-step cards ── */}
          <div className={GFX_COL}>
            <div className="grid grid-cols-1 sm:grid-cols-3 rounded-xl overflow-hidden border border-border">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  style={{ padding: "var(--card-padding)" }}
                  className={i < steps.length - 1 ? "dotted-divider" : ""}
                >
                  {step.icon}
                  <div className="mt-2.5">
                    <h3 className="text-text" style={{ fontSize: "var(--fs-h6)", fontWeight: "var(--font-weight-medium)" }}>{step.title}</h3>
                    <p className="text-text-tertiary mt-1" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// PRICING
// ─────────────────────────────────────────────

const checkItems = ["Full GEO audit across all AI search signals","Composite GEO Score (0–100)","Prioritised action plan","Works for any web platform","PDF report within 24 hours","Customised to your industry and business type"];

function PricingSection() {
  return (
    <section id="pricing" className="bg-background-elevated py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8">

          {/* ── 6-col: heading ── */}
          <FadeUp className={TEXT_COL}>
            <h2 className="text-text" style={{ fontSize: "var(--fs-h4)", lineHeight: "var(--lh-h4)", fontWeight: "var(--font-weight-medium)" }}>Pricing</h2>
            <p className="text-text-quarternary mt-1" style={{ fontSize: "var(--fs-para-xl)", lineHeight: "var(--lh-para-xl)" }}>Launch pricing. One-time. No retainer. No subscription.</p>
          </FadeUp>

          {/* ── 6-col: plan cards ── */}
          <div className={TEXT_COL}>
            <div className="flex flex-col gap-6">

              {/* Plan 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0, ease }}
                className="rounded-2xl border border-border"
                style={{ padding: "var(--card-padding)" }}
              >
                <h3 className="text-text-secondary" style={{ fontSize: "var(--fs-h5)", fontWeight: "var(--font-weight-medium)" }}>GEO Audit Report</h3>
                <div className="flex items-baseline gap-2 mt-3">
                  <span className="text-text" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>SGD 99</span>
                  <span className="text-text-quarternary line-through" style={{ fontSize: "var(--fs-h4)" }}>SGD 199</span>
                </div>
                <p className="text-text-secondary mt-3" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                  For business owners who want to know exactly where they stand and what to fix — without hiring an agency.
                </p>
                <div className="flex flex-col gap-2 mt-6">
                  {checkItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check size={24} color="var(--color-text-tertiary)" weight="regular" className="shrink-0 mt-0.5" />
                      <p className="text-text-tertiary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>{item}</p>
                    </div>
                  ))}
                </div>
                <a href="https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n" onClick={trackCheckout(99, "https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n")} className={btnPrimary} style={{ ...btnPad, marginTop: "var(--spacing-md)" }}>Get GEO Audit at S$99</a>
              </motion.div>

              {/* Plan 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
                className="rounded-2xl border border-border"
                style={{ padding: "var(--card-padding)", backgroundColor: "var(--color-neutral-100)" }}
              >
                <h3 className="text-text-secondary" style={{ fontSize: "var(--fs-h5)", fontWeight: "var(--font-weight-medium)" }}>GEO Audit Report + Strategy Call</h3>
                <div className="flex items-baseline gap-2 mt-3">
                  <span className="text-text" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>SGD 299</span>
                  <span className="text-text-quarternary line-through" style={{ fontSize: "var(--fs-h4)" }}>SGD 499</span>
                </div>
                <p className="text-text-secondary mt-3" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                  For business owners who want expert eyes on their results. A GEO specialist walks you through your report and the strategies that actually move the needle.
                </p>
                <div className="flex flex-col gap-2 mt-6">
                  {checkItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check size={24} color="var(--color-text-tertiary)" weight="regular" className="shrink-0 mt-0.5" />
                      <p className="text-text-tertiary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>{item}</p>
                    </div>
                  ))}
                  {["60-minute strategy call with a GEO specialist","Call recording included","Written follow-up summary with agreed next steps"].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <PlusSquare size={24} color="var(--color-text-tertiary)" weight="regular" className="shrink-0 mt-0.5" />
                      <p className="text-text-tertiary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>{item}</p>
                    </div>
                  ))}
                </div>
                <a href="https://buy.stripe.com/dRm6oIch18w78PjeuL5Vu0o" onClick={trackCheckout(299, "https://buy.stripe.com/dRm6oIch18w78PjeuL5Vu0o")} className={btnSecondary} style={{ ...btnPad, marginTop: "var(--spacing-md)" }}>Get Audit + Strategy Call</a>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────

const faqItems = [
  { q: "What is a GEO audit, and how is it different from an SEO audit?",
    a: "A standard SEO audit looks at how well your site performs in traditional search engines like Google's organic results. A GEO audit (Generative Engine Optimisation) looks at a different question: how visible is your business to AI search tools like ChatGPT, Perplexity, and Google AI Overviews? These tools use different signals to decide what to surface and recommend — and most SEO tools don't track them at all.",
    defaultOpen: true },
  { q: "Can I see a sample report before I pay?",
    a: `Yes — click "View Sample Report" to see an anonymised version of an actual Scantiv GEO audit. It shows the full structure, scoring breakdown, and the type of actionable fixes you'll receive.`,
    defaultOpen: false },
  { q: "My website is simple. Is this still useful for me?",
    a: "Absolutely. AI tools surface businesses based on how they're described and structured online — not just how complex or polished the website is. A simple site can still rank highly in AI recommendations with the right signals in place.",
    defaultOpen: false },
  { q: "How long does it take?",
    a: "Your PDF report will be delivered to your inbox within 24 hours of completing the intake form. The intake form itself takes approximately five minutes.",
    defaultOpen: false },
  { q: "What do I need to do after paying?",
    a: "After payment, you will receive a confirmation email with a link to a short intake form. It asks for your website URL and a few details about your business. That is everything we need. We handle the audit from there.",
    defaultOpen: false },
  { q: "Is my information kept confidential?",
    a: "Yes. Your business details and report findings are never shared or published. Any sample reports we use for illustration are fully anonymised with all identifying information removed.",
    defaultOpen: false },
  { q: "What if I'm not happy with the report?",
    a: "Contact us within 7 days of receiving your report and we will revise it based on your feedback, or issue a full refund. No questions asked.",
    defaultOpen: false },
];

function FAQItem({ q, a, defaultOpen, index }: { q: string; a: string; defaultOpen: boolean; index: number }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease }}
      className="dotted-border-b"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full text-left flex items-start gap-3 justify-between py-6 cursor-pointer"
      >
        <h3 className="text-text flex-1" style={{ fontSize: "var(--fs-h6)", lineHeight: "var(--lh-h6)", fontWeight: "var(--font-weight-medium)" }}>{q}</h3>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease }}
          className="shrink-0 mt-0.5"
        >
          <Plus size={20} color="var(--color-text)" weight="regular" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            style={{ overflow: "hidden" }}
          >
            <p className="text-text-tertiary pb-6" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="bg-background-elevated py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-x-4">
          <FadeUp className={TEXT_COL}>
            <h2 className="text-text mb-2" style={{ fontSize: "var(--fs-h4)", lineHeight: "var(--lh-h4)", fontWeight: "var(--font-weight-medium)" }}>Questions.</h2>
            {faqItems.map((item, i) => <FAQItem key={i} index={i} {...item} />)}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────

function FooterSection() {
  return (
    <footer className="bg-background-elevated py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8">

          {/* ── 6-col: CTA row ── */}
          <FadeUp className={TEXT_COL}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-text" style={{ fontSize: "var(--fs-h4)", lineHeight: "var(--lh-h4)", fontWeight: "var(--font-weight-medium)" }}>Find out where AI ranks you.</p>
              <a href="https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n" onClick={trackCheckout(99, "https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n")} className={btnPrimary} style={btnPad}>Get GEO Audit at S$99</a>
            </div>
          </FadeUp>

          {/* ── 6-col: divider ── */}
          <div className={`${TEXT_COL} dotted-border-t`} />

          {/* ── 6-col: logo + copyright ── */}
          <FadeUp className={`${TEXT_COL} flex flex-col items-start sm:items-center gap-3`} delay={0.1}>
            <ScantivLogoSmall />
            <p className="text-text-quarternary" style={{ fontSize: "var(--fs-para-sm)" }}>© 2026 Scantiv</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-text-quarternary hover:text-text-tertiary transition-colors"
                style={{ fontSize: "var(--fs-para-sm)" }}>Privacy</Link>
              <Link to="/terms" className="text-text-quarternary hover:text-text-tertiary transition-colors"
                style={{ fontSize: "var(--fs-para-sm)" }}>Terms</Link>
              <a href="mailto:contact@scantiv.com" className="text-text-quarternary hover:text-text-tertiary transition-colors"
                style={{ fontSize: "var(--fs-para-sm)" }}>contact@scantiv.com</a>
            </div>
          </FadeUp>

        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────
// LEGAL PAGES
// ─────────────────────────────────────────────

const legalBody: React.CSSProperties = {
  fontSize: "var(--fs-para-body)",
  lineHeight: "var(--lh-para-body)",
  color: "var(--color-text-tertiary)",
};

const legalH2: React.CSSProperties = {
  fontSize: "var(--fs-h5)",
  lineHeight: "var(--lh-h5)",
  fontWeight: "var(--font-weight-medium)",
  color: "var(--color-text)",
};

const legalH3: React.CSSProperties = {
  fontSize: "var(--fs-h6)",
  lineHeight: "var(--lh-h6)",
  fontWeight: "var(--font-weight-medium)",
  color: "var(--color-text-secondary)",
};

// ─────────────────────────────────────────────
// THANK YOU PAGE
// ─────────────────────────────────────────────

function ThankYouPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof (window as any).fbq !== "undefined") {
      (window as any).fbq("track", "Purchase", { value: 99.00, currency: "SGD" });
    }
    const w = "https://tally.so/widgets/embed.js";
    if (typeof (window as any).Tally !== "undefined") {
      (window as any).Tally.loadEmbeds();
    } else if (!document.querySelector(`script[src="${w}"]`)) {
      const s = document.createElement("script");
      s.src = w;
      s.onload = () => (window as any).Tally?.loadEmbeds();
      document.body.appendChild(s);
    }
  }, []);
  return (
    <div className="bg-background-elevated min-h-screen flex flex-col">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
        <Link to="/" className="inline-flex items-center gap-2 text-text-quarternary hover:text-text-tertiary transition-colors"
          style={{ fontSize: "var(--fs-para-sm)" }}>
          ← Back to Scantiv
        </Link>
      </div>

      <main className="flex-1 flex items-start justify-center px-4 sm:px-6 lg:px-8 pb-24">
        <div className="w-full max-w-2xl" style={{ paddingTop: "var(--section-padding)" }}>

          {/* Confirmation header */}
          <div className="mb-10">
            <div
              className="inline-flex items-center gap-2 mb-6"
              style={{
                fontSize: "var(--fs-eyebrow)",
                lineHeight: "var(--lh-eyebrow)",
                letterSpacing: "var(--ls-eyebrow)",
                color: "var(--color-accent)",
                fontWeight: "var(--font-weight-medium)",
                textTransform: "uppercase",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="var(--color-accent)" />
                <path d="M4.5 8l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Payment confirmed
            </div>
            <h1
              className="text-text"
              style={{
                fontSize: "var(--fs-h2)",
                lineHeight: "var(--lh-h2)",
                letterSpacing: "var(--ls-h2)",
                fontWeight: "var(--font-weight-medium)",
                marginBottom: "var(--spacing-sm)",
              }}
            >
              Your audit is booked.
            </h1>
            <p
              style={{
                fontSize: "var(--fs-para-lg)",
                lineHeight: "var(--lh-para-lg)",
                color: "var(--color-text-secondary)",
              }}
            >
              One last step. Fill in the form below so we can run your audit. It takes under five minutes. Your PDF report will be in your inbox within 24 hours.
            </p>
          </div>

          {/* What happens next */}
          <div
            className="rounded-lg mb-10"
            style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
              padding: "var(--card-padding)",
            }}
          >
            <p
              className="text-text-quarternary mb-4"
              style={{ fontSize: "var(--fs-para-sm)", textTransform: "uppercase", letterSpacing: "var(--ls-eyebrow)", fontWeight: "var(--font-weight-medium)" }}
            >
              What happens next
            </p>
            <ol className="flex flex-col gap-3">
              {[
                { step: "1", text: "Fill in the intake form below. Your website URL and a few details about your business." },
                { step: "2", text: "We run a full GEO audit across all major AI search signals." },
                { step: "3", text: "Your PDF report — with GEO Score and prioritised action plan — lands in your inbox within 24 hours." },
              ].map(({ step, text }) => (
                <li key={step} className="flex items-start gap-3">
                  <span
                    className="shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: 24,
                      height: 24,
                      background: "var(--color-neutral-100)",
                      fontSize: "var(--fs-para-sm)",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--color-text-tertiary)",
                      marginTop: 1,
                    }}
                  >
                    {step}
                  </span>
                  <span style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)", color: "var(--color-text-secondary)" }}>
                    {text}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Tally intake form */}
          <iframe
            data-tally-src="https://tally.so/embed/1AM42L?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="492"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Scantiv Intake Form"
          />

          {/* Help note */}
          <p
            className="mt-6 text-center"
            style={{ fontSize: "var(--fs-para-sm)", lineHeight: "var(--lh-para-sm)", color: "var(--color-text-quarternary)" }}
          >
            Questions? Email us at{" "}
            <a href="mailto:contact@scantiv.com" className="underline hover:text-text-tertiary transition-colors">
              contact@scantiv.com
            </a>
          </p>

        </div>
      </main>
      <FooterSection />
    </div>
  );
}

// ─────────────────────────────────────────────
// LEGAL PAGES
// ─────────────────────────────────────────────

function LegalPage({ title, lastUpdated, children }: { title: string; lastUpdated: string; children: React.ReactNode }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <Link to="/" className="inline-flex items-center gap-2 text-text-quarternary hover:text-text-tertiary transition-colors"
          style={{ fontSize: "var(--fs-para-sm)" }}>
          ← Back
        </Link>
      </div>
      <main className="pb-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-x-4">
            <div className={TEXT_COL}>
              <p className="text-text-quarternary mb-3" style={{ fontSize: "var(--fs-para-sm)" }}>Last updated: {lastUpdated}</p>
              <h1 className="text-text mb-12" style={{ fontSize: "var(--fs-h2)", lineHeight: "var(--lh-h2)", letterSpacing: "var(--ls-h2)", fontWeight: "var(--font-weight-medium)" }}>{title}</h1>
              {children}
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="March 2026">

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">1. Introduction</h2>
        <p style={legalBody}>Scantiv ("we", "our", "us") is committed to protecting your personal information. This Privacy Policy explains what we collect, why we collect it, and how we handle it when you purchase a GEO audit from us.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-4">2. What We Collect</h2>

        <div className="mb-5">
          <h3 style={legalH3} className="mb-2">Contact and delivery information</h3>
          <p style={legalBody}>When you purchase a GEO audit, we collect your email address to deliver your report.</p>
        </div>

        <div className="mb-5">
          <h3 style={legalH3} className="mb-2">Intake form data</h3>
          <p style={legalBody}>After payment, you complete a short intake form. This asks for your website URL and basic details about your business. We use this information solely to produce your audit report.</p>
        </div>

        <div className="mb-5">
          <h3 style={legalH3} className="mb-2">Payment information</h3>
          <p style={legalBody}>Payments are processed by a third-party payment provider. We do not store your card number or payment credentials on our servers.</p>
        </div>

        <div className="mb-5">
          <h3 style={legalH3} className="mb-2">Website analytics</h3>
          <p style={legalBody}>We collect standard analytics data — page views, browser type, device type, and approximate location. This data is aggregated and does not identify you personally.</p>
        </div>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">3. How We Use Your Information</h2>
        <p style={{ ...legalBody, marginBottom: 12 }}>We use your information to:</p>
        <ul style={legalBody} className="list-disc ml-5 space-y-1 mb-3">
          <li>Deliver your GEO audit report</li>
          <li>Process your payment</li>
          <li>Respond to support requests</li>
          <li>Improve our audit methodology using anonymised, aggregated data only</li>
        </ul>
        <p style={legalBody}>We do not sell your data. We do not use your information for advertising.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">4. Data Sharing</h2>
        <p style={{ ...legalBody, marginBottom: 12 }}>We work with third-party providers for payment processing and analytics. These providers process data under their own privacy policies. We use only trusted providers that maintain appropriate security standards.</p>
        <p style={legalBody}>Any sample reports we use for illustration are fully anonymised. All identifying information is removed before use.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">5. Data Security</h2>
        <p style={legalBody}>We take reasonable measures to protect your information, including encryption in transit and at rest, and controlled access to stored data.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">6. Data Retention</h2>
        <ul style={legalBody} className="list-disc ml-5 space-y-1 mb-3">
          <li><strong style={{ color: "var(--color-text-secondary)", fontWeight: "var(--font-weight-medium)" }}>Email and report data:</strong> Retained for 12 months after your report is delivered, then deleted.</li>
          <li><strong style={{ color: "var(--color-text-secondary)", fontWeight: "var(--font-weight-medium)" }}>Payment records:</strong> Retained for 7 years to meet legal and tax requirements.</li>
          <li><strong style={{ color: "var(--color-text-secondary)", fontWeight: "var(--font-weight-medium)" }}>Analytics data:</strong> Retained for up to 2 years.</li>
        </ul>
        <p style={legalBody}>You may request early deletion at any time by contacting us.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">7. Your Rights</h2>
        <p style={{ ...legalBody, marginBottom: 12 }}>Under Singapore's Personal Data Protection Act (PDPA), you have the right to:</p>
        <ul style={legalBody} className="list-disc ml-5 space-y-1 mb-3">
          <li>Access the personal data we hold about you</li>
          <li>Correct inaccurate or incomplete data</li>
          <li>Withdraw consent and request deletion of your data</li>
        </ul>
        <p style={legalBody}>To exercise any of these rights, contact us at <a href="mailto:contact@scantiv.com" className="text-accent hover:underline">contact@scantiv.com</a>. We will respond within 30 days.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">8. Cookies</h2>
        <p style={legalBody}>We use cookies for basic analytics and session management. You can disable cookies through your browser settings, though this may affect your experience on the site.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">9. Children</h2>
        <p style={legalBody}>Our service is intended for business owners and is not directed at anyone under 18. We do not knowingly collect information from minors.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">10. Changes to This Policy</h2>
        <p style={legalBody}>We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email where we have your contact details. Your continued use of the site after changes constitutes acceptance of the updated policy.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">11. Contact</h2>
        <p style={legalBody}>For privacy questions or requests, contact us at <a href="mailto:contact@scantiv.com" className="text-accent hover:underline">contact@scantiv.com</a>. We will respond within 30 days.</p>
      </div>

    </LegalPage>
  );
}

function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="March 2026">

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">1. Acceptance of Terms</h2>
        <p style={legalBody}>By purchasing a GEO audit from Scantiv ("we", "our", "us"), you agree to these Terms of Service. If you do not agree, do not complete your purchase.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">2. What We Provide</h2>
        <p style={{ ...legalBody, marginBottom: 12 }}>Scantiv delivers a GEO (Generative Engine Optimisation) audit report as a PDF. The report assesses your business's visibility in AI search tools such as ChatGPT, Perplexity, and Google AI Overviews, and includes a prioritised action plan.</p>
        <p style={legalBody}>The report is delivered to your email address within 24 hours of you completing the intake form.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">3. Payment</h2>
        <ul style={legalBody} className="list-disc ml-5 space-y-1 mb-3">
          <li><strong style={{ color: "var(--color-text-secondary)", fontWeight: "var(--font-weight-medium)" }}>GEO Audit Report:</strong> SGD 99, one-time payment.</li>
          <li><strong style={{ color: "var(--color-text-secondary)", fontWeight: "var(--font-weight-medium)" }}>GEO Audit Report + Strategy Call:</strong> SGD 299, one-time payment.</li>
        </ul>
        <p style={legalBody}>Payment is due at the time of purchase. There is no subscription, no renewal, and no ongoing fees.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">4. Delivery</h2>
        <p style={legalBody}>After payment, you will receive a confirmation email with a link to a short intake form. The form asks for your website URL and basic business details. We will deliver your report within 24 hours of receiving a completed intake form.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">5. Refunds</h2>
        <p style={legalBody}>If you are not satisfied with your report, contact us within 7 days of delivery. We will revise the report based on your feedback, or issue a full refund. No questions asked.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">6. Acceptable Use</h2>
        <p style={legalBody}>When submitting the intake form, you agree to provide accurate information about your business and website. You must not submit information in connection with any illegal activity or attempt to reverse-engineer our audit methodology.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">7. Intellectual Property</h2>
        <p style={legalBody}>The GEO audit report we deliver is yours to use for your business. Scantiv retains all rights to our audit methodology, scoring framework, and report templates.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">8. No Guarantee of Outcomes</h2>
        <p style={legalBody}>A GEO audit identifies issues and recommendations. We do not guarantee specific improvements in AI search visibility or citation frequency. Results depend on your implementation of the recommendations and on factors outside our control.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">9. Limitation of Liability</h2>
        <p style={legalBody}>To the maximum extent permitted by law, Scantiv's total liability for any claim arising from these Terms shall not exceed the amount you paid for the relevant service.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">10. Governing Law</h2>
        <p style={legalBody}>These Terms are governed by the laws of Singapore.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">11. Changes to These Terms</h2>
        <p style={legalBody}>We may update these Terms from time to time. We will notify you of material changes where we have your contact details. Your continued use of the site after changes constitutes acceptance of the updated Terms.</p>
      </div>

      <div className="mb-10">
        <h2 style={legalH2} className="mb-3">12. Contact</h2>
        <p style={legalBody}>For questions about these Terms, contact us at <a href="mailto:contact@scantiv.com" className="text-accent hover:underline">contact@scantiv.com</a>.</p>
      </div>

    </LegalPage>
  );
}

// ─────────────────────────────────────────────
// FIRST PAGE DIGITAL ALTERNATIVES PAGE
// ─────────────────────────────────────────────

function FirstPageDigitalAlternativesPage() {
  const alternatives = [
    {
      name: "Scantiv",
      tagline: "Expert GEO Audit (Recommended for Most Singapore SMEs)",
      features: [
        "Expert analysis of your current GEO position",
        "Singapore-specific recommendations",
        "24-hour turnaround",
        "PDF report you can share",
        "Clear prioritised next steps",
        "No ongoing fees or commitment",
      ],
      price: "SGD 99 one-off",
      cta: "https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n",
      isScantiv: true,
    },
    {
      name: "Underscore",
      tagline: "Boutique GEO/AEO + Webflow Specialist",
      features: [
        "GEO and AEO focus",
        "Webflow specialist",
        "Project-based pricing",
        "Fast turnaround",
        "Hands-on, personalised service",
      ],
      price: "SGD 2,000–8,000 per project",
      cta: "#",
    },
    {
      name: "Hashmeta",
      tagline: "Full-Service GEO Agency",
      features: [
        "Full GEO-focused strategy",
        "Content creation and optimisation",
        "Technical implementation",
        "Monthly reporting",
        "Dedicated account management",
      ],
      price: "SGD 3,400+/month",
      cta: "#",
    },
    {
      name: "OOM Singapore",
      tagline: "SEO/GEO Specialist Agency",
      features: [
        "SEO and GEO strategy",
        "Content audit and recommendations",
        "Flexible engagement models",
        "Competitive analysis",
        "Training and consultation",
      ],
      price: "SGD 2,000–5,000+ per project",
      cta: "#",
    },
    {
      name: "DIY with Tools",
      tagline: "Self-Service Tools (Geoptie or Profound)",
      features: [
        "Self-service monitoring tool",
        "No agency overhead",
        "You control the pace",
        "Can run at your own pace",
        "No long-term commitment",
      ],
      price: "USD 50–100/month + freelancer",
      cta: "#",
    },
  ];

  const decisionFramework = [
    {
      situation: '"I\'m unsure if GEO matters for my business"',
      action: "Scantiv (SGD 99). Get clarity before committing to an agency.",
    },
    {
      situation: '"I want a Singapore expert but don\'t want a 12-month lock-in"',
      action: "Underscore (project-based, GEO specialist) or OOM Singapore (flexible engagements).",
    },
    {
      situation: '"I\'m ready for a full-service agency for 12 months"',
      action: "First Page Digital (established, full-service) or Hashmeta (GEO-focused alternative).",
    },
    {
      situation: '"I want to learn and do some of it myself"',
      action: "DIY with Geoptie or Profound plus a freelancer for specific tasks.",
    },
  ];

  const comparisonRows = [
    { feature: "Price", fpd: "SGD 2,000+/mo", scantiv: "SGD 99 one-off", underscore: "SGD 2,000–8,000 project", hashmeta: "SGD 3,400+/mo", oom: "SGD 2,000+ project", diy: "SGD 400–1,500/mo" },
    { feature: "Pricing Model", fpd: "Retainer", scantiv: "One-time", underscore: "Project-based", hashmeta: "Retainer", oom: "Project/flexible", diy: "Subscription" },
    { feature: "Minimum Commitment", fpd: "12 months", scantiv: "None", underscore: "Per project", hashmeta: "12 months", oom: "Per project", diy: "Monthly" },
    { feature: "GEO-Specific", fpd: "Partial", scantiv: "Yes", underscore: "Yes", hashmeta: "Yes", oom: "Partial", diy: "Yes" },
    { feature: "Singapore Context", fpd: "Yes", scantiv: "Yes", underscore: "Yes", hashmeta: "Yes", oom: "Yes", diy: "No" },
    { feature: "Expert Interpretation", fpd: "Yes", scantiv: "Yes", underscore: "Yes", hashmeta: "Yes", oom: "Yes", diy: "No (DIY)" },
    { feature: "Turnaround", fpd: "2–4 weeks", scantiv: "24 hours", underscore: "1–2 weeks", hashmeta: "2–4 weeks", oom: "Flexible", diy: "Instant (if you build it)" },
  ];

  const faqFpd = [
    { q: "Is First Page Digital good for GEO?", a: "Yes, but they're a full-service agency. If GEO is your primary need, a specialist like Hashmeta or Underscore might give you more focused expertise. Better path: Start with Scantiv (SGD 99) to validate GEO potential, then hire a GEO specialist." },
    { q: "What does a GEO agency actually do vs. a GEO audit?", a: "A GEO audit (Scantiv) gives you a snapshot with expert analysis in 24 hours at SGD 99. A GEO agency like First Page Digital actually executes the work for 12 months at SGD 2,000–5,000+/month. Think of it like a house inspection (audit) vs. hiring a contractor to fix it (agency)." },
    { q: "How much should a Singapore SME spend on GEO?", a: "Startup stage (SGD 0–500k revenue): SGD 99–500/month. Growth stage (SGD 500k–5m): SGD 1,000–3,000/month. Scale stage (SGD 5m+): SGD 3,000–10,000+/month. Rule of thumb: GEO should be 5–15% of your total marketing budget." },
    { q: "Can I use a Scantiv report to brief an agency later?", a: "Absolutely. This is exactly what we design reports for. Share your Scantiv audit with any agency you choose—they'll use it as the baseline for their strategy, saving them 1–2 weeks of discovery." },
  ];

  return (
    <div className="bg-background-elevated min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-background-elevated py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4">
              <FadeUp className={TEXT_COL}>
                <div
                  style={{
                    fontSize: "var(--fs-eyebrow)",
                    lineHeight: "var(--lh-eyebrow)",
                    letterSpacing: "var(--ls-eyebrow)",
                    color: "var(--color-accent)",
                    fontWeight: "var(--font-weight-medium)",
                    textTransform: "uppercase",
                    marginBottom: "var(--spacing-sm)",
                  }}
                >
                  Comparing Digital Marketing Agencies
                </div>
                <h1 className="text-text mb-4" style={{ fontSize: "var(--fs-h2)", lineHeight: "var(--lh-h2)", fontWeight: "var(--font-weight-medium)" }}>
                  Best First Page Digital Alternatives in 2026 (Singapore)
                </h1>
                <p className="text-text-tertiary" style={{ fontSize: "var(--fs-para-lg)", lineHeight: "var(--lh-para-lg)" }}>
                  First Page Digital is a well-known Singapore agency. They deliver results. But they also come with a retainer lock-in starting at SGD 2,000+/month. This guide compares them against real alternatives and helps you figure out what you actually need.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n" onClick={trackCheckout(99, "https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n")} className={btnPrimary} style={btnPad}>Get GEO Audit at S$99</a>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* What is First Page Digital */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4">
              <FadeUp className={TEXT_COL}>
                <h2 className="text-text mb-6" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                  What is First Page Digital?
                </h2>
                <div className="space-y-4">
                  <p className="text-text-tertiary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                    First Page Digital is a Singapore-based digital marketing agency specialising in SEO, GEO (Generative Engine Optimization), and SEM for e-commerce and B2B businesses.
                  </p>
                  <div>
                    <h3 className="text-text mb-2" style={{ fontSize: "var(--fs-h6)", lineHeight: "var(--lh-h6)", fontWeight: "var(--font-weight-medium)" }}>Core Services</h3>
                    <ul className="text-text-tertiary space-y-1" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                      {["SEO strategy and optimization", "GEO strategy and content optimization", "Paid advertising (Google Ads, social)", "Content strategy and creation", "Technical SEO audits", "Monthly reporting"].map((svc, i) => (
                        <li key={i}>• {svc}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-text-tertiary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                      <strong style={{ color: "var(--color-text-secondary)" }}>Target audience:</strong> E-commerce stores, SaaS companies, service businesses wanting a full-service agency with Singapore expertise.
                    </p>
                  </div>
                  <div>
                    <p className="text-text-tertiary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                      <strong style={{ color: "var(--color-text-secondary)" }}>Pricing:</strong> SGD 2,000+/month retainer (typically SGD 2,500–5,000 for meaningful results, annual commitment required).
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="bg-background-elevated py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4 gap-y-8">
              <FadeUp className={TEXT_COL}>
                <h2 className="text-text mb-8" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                  Pros and Cons of First Page Digital
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-text mb-4" style={{ fontSize: "var(--fs-h6)", lineHeight: "var(--lh-h6)", fontWeight: "var(--font-weight-medium)" }}>Pros</h3>
                    <ul className="space-y-2">
                      {[
                        "Established Singapore agency (10+ years operating)",
                        "Full-service: SEO, GEO, content, ads in one place",
                        "Dedicated account management",
                        "Monthly reporting and transparency",
                        "Deep understanding of Singapore market dynamics",
                        "Proven track record with local businesses",
                      ].map((pro, i) => (
                        <li key={i} className="flex gap-2 text-text-tertiary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                          <Check size={20} color="var(--color-accent)" className="shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-text mb-4" style={{ fontSize: "var(--fs-h6)", lineHeight: "var(--lh-h6)", fontWeight: "var(--font-weight-medium)" }}>Cons</h3>
                    <ul className="space-y-2">
                      {[
                        "Retainer lock-in: minimum SGD 2,000/month, annual commitment",
                        "High barrier to entry for small businesses or startups",
                        "Locked in for 12 months even if results are slow",
                        "Slow initial turnaround (strategy phase 2–4 weeks)",
                        "Best suited for clients with SGD 5k+/month budgets",
                        "One-size-fits-most approach (less customised than boutique)",
                      ].map((con, i) => (
                        <li key={i} className="flex gap-2 text-text-tertiary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                          <span style={{ color: "var(--color-secondary-red)" }}>✕</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Why Consider Alternatives */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4">
              <FadeUp className={TEXT_COL}>
                <h2 className="text-text mb-8" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                  Why Consider Alternatives?
                </h2>
                <div className="space-y-6">
                  {[
                    { num: "1", title: "Retainer cost is prohibitive for smaller businesses", desc: "SGD 2,000/month is SGD 24,000/year. For startups with limited budgets, this is a significant commitment before seeing any return." },
                    { num: "2", title: "Retainer lock-in creates risk", desc: "Annual commitments mean you're committed for 12 months regardless of results, cash flow, or changing business priorities." },
                    { num: "3", title: "You might not need a full-service agency yet", desc: "Early-stage businesses often just need GEO clarity, not a complete marketing overhaul. Hiring a full-service agency when you only need GEO is like buying a full suit when you just need a jacket." },
                    { num: "4", title: "There are specialists who can deliver faster and cheaper", desc: "For GEO specifically, boutique specialists like Scantiv can get you clarity in 24 hours at SGD 99, vs. First Page Digital's 2–4 week strategy phase at SGD 2,000+/month." },
                  ].map(({ num, title, desc }) => (
                    <FadeUp key={num} delay={Number(num) * 0.1}>
                      <div className="flex gap-4">
                        <div
                          className="shrink-0 flex items-center justify-center rounded-full text-text"
                          style={{
                            width: 40,
                            height: 40,
                            background: "var(--color-neutral-100)",
                            fontSize: "var(--fs-h6)",
                            fontWeight: "var(--font-weight-medium)",
                          }}
                        >
                          {num}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-text mb-1" style={{ fontSize: "var(--fs-h6)", lineHeight: "var(--lh-h6)", fontWeight: "var(--font-weight-medium)" }}>
                            {title}
                          </h3>
                          <p className="text-text-tertiary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                            {desc}
                          </p>
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Alternatives Compared */}
        <section className="bg-background-elevated py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4">
              <FadeUp className={TEXT_COL}>
                <h2 className="text-text mb-8" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                  First Page Digital Alternatives Compared
                </h2>
                <div className="grid gap-6">
                  {alternatives.map((alt, i) => (
                    <FadeUp
                      key={i}
                      delay={i * 0.1}
                      className={`rounded-2xl border p-6 ${alt.isScantiv ? "border-accent" : "border-border"}`}
                    >
                      <div className="flex items-start justify-between mb-4 gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-text" style={{ fontSize: "var(--fs-h6)", lineHeight: "var(--lh-h6)", fontWeight: "var(--font-weight-medium)" }}>
                              {alt.name}
                            </h3>
                            {alt.isScantiv && (
                              <span
                                style={{
                                  fontSize: "var(--fs-para-sm)",
                                  lineHeight: "var(--lh-para-sm)",
                                  letterSpacing: "var(--ls-eyebrow)",
                                  color: "var(--color-accent)",
                                  fontWeight: "var(--font-weight-medium)",
                                  textTransform: "uppercase",
                                  padding: "4px 8px",
                                  background: "rgba(var(--rgb-accent), 0.1)",
                                  borderRadius: "4px",
                                }}
                              >
                                Recommended
                              </span>
                            )}
                          </div>
                          <p className="text-text-tertiary" style={{ fontSize: "var(--fs-para-sm)", lineHeight: "var(--lh-para-sm)" }}>
                            {alt.tagline}
                          </p>
                        </div>
                      </div>
                      <div className="mb-4 space-y-2">
                        {alt.features.map((feat, j) => (
                          <p key={j} className="text-text-tertiary flex gap-2" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                            <Check size={16} color="var(--color-accent)" className="shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </p>
                        ))}
                      </div>
                      <div className="flex items-end justify-between pt-4 border-t border-border">
                        <p className="text-text-secondary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)", fontWeight: "var(--font-weight-medium)" }}>
                          {alt.price}
                        </p>
                        <a href={alt.cta} className={alt.isScantiv ? btnPrimary : btnSecondary} style={btnPad}>
                          Learn More
                        </a>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4">
              <FadeUp className={TEXT_COL}>
                <h2 className="text-text mb-8" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                  Comparison Table
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-border">
                        {["Feature", "First Page Digital", "Scantiv", "Underscore", "Hashmeta", "OOM SG", "DIY Tools"].map((h) => (
                          <th key={h} style={{ fontSize: "var(--fs-para-sm)", fontWeight: "var(--font-weight-medium)", color: "var(--color-text-secondary)", padding: "12px 16px" }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, i) => (
                        <tr key={i} className="border-b border-border">
                          <td style={{ padding: "12px 16px", fontSize: "var(--fs-para-body)", color: "var(--color-text-secondary)", fontWeight: "var(--font-weight-medium)" }}>
                            {row.feature}
                          </td>
                          <td style={{ padding: "12px 16px", fontSize: "var(--fs-para-sm)", color: "var(--color-text-tertiary)" }}>{row.fpd}</td>
                          <td style={{ padding: "12px 16px", fontSize: "var(--fs-para-sm)", color: "var(--color-text-tertiary)" }}>{row.scantiv}</td>
                          <td style={{ padding: "12px 16px", fontSize: "var(--fs-para-sm)", color: "var(--color-text-tertiary)" }}>{row.underscore}</td>
                          <td style={{ padding: "12px 16px", fontSize: "var(--fs-para-sm)", color: "var(--color-text-tertiary)" }}>{row.hashmeta}</td>
                          <td style={{ padding: "12px 16px", fontSize: "var(--fs-para-sm)", color: "var(--color-text-tertiary)" }}>{row.oom}</td>
                          <td style={{ padding: "12px 16px", fontSize: "var(--fs-para-sm)", color: "var(--color-text-tertiary)" }}>{row.diy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Decision Framework */}
        <section className="bg-background-elevated py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4">
              <FadeUp className={TEXT_COL}>
                <h2 className="text-text mb-8" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                  Decision Framework
                </h2>
                <div className="space-y-4">
                  {decisionFramework.map((item, i) => (
                    <FadeUp
                      key={i}
                      delay={i * 0.1}
                      className="rounded-lg border border-border p-4"
                    >
                      <p className="text-text font-medium mb-2" style={{ fontSize: "var(--fs-h6)", lineHeight: "var(--lh-h6)" }}>
                        {item.situation}
                      </p>
                      <p className="text-text-tertiary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                        → {item.action}
                      </p>
                    </FadeUp>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* When to Hire */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4">
              <FadeUp className={TEXT_COL}>
                <h2 className="text-text mb-8" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                  When to Hire an Agency vs. Start with an Audit
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      stage: "Validation Phase (Start Here for Most SMEs)",
                      question: "Does GEO matter for my business?",
                      steps: [
                        "Run a Scantiv audit (SGD 99).",
                        "Read the report and understand your current position.",
                        "Implement the top 3–5 recommendations yourself (usually free).",
                        "Wait 4–6 weeks and see if you get any AI-sourced traffic.",
                      ],
                      cost: "SGD 99 + your time (5–10 hours of implementation)",
                      timeline: "6–8 weeks total",
                      outcome: "You'll know whether GEO is worth investing in.",
                      whoFor: "Startups, SMEs with limited budgets, anyone unsure if GEO is the right lever to pull.",
                    },
                  ].map((stage, i) => (
                    <FadeUp key={i}>
                      <div>
                        <h3 className="text-text mb-3" style={{ fontSize: "var(--fs-h6)", lineHeight: "var(--lh-h6)", fontWeight: "var(--font-weight-medium)" }}>
                          {stage.stage}
                        </h3>
                        <p className="text-text-secondary mb-3" style={{ fontSize: "var(--fs-para-sm)" }}>
                          <strong>You're asking:</strong> {stage.question}
                        </p>
                        <ul className="text-text-tertiary space-y-1 mb-3" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                          {stage.steps.map((step, j) => (
                            <li key={j}>{j + 1}. {step}</li>
                          ))}
                        </ul>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <p className="text-text-tertiary"><strong style={{ color: "var(--color-text-secondary)" }}>Cost:</strong> {stage.cost}</p>
                          <p className="text-text-tertiary"><strong style={{ color: "var(--color-text-secondary)" }}>Timeline:</strong> {stage.timeline}</p>
                          <p className="text-text-tertiary md:col-span-2"><strong style={{ color: "var(--color-text-secondary)" }}>Who this is for:</strong> {stage.whoFor}</p>
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-background-elevated py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4">
              <FadeUp className={TEXT_COL}>
                <h2 className="text-text mb-2" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                  Questions
                </h2>
                {faqFpd.map((item, i) => (
                  <FAQItem key={i} index={i} q={item.q} a={item.a} defaultOpen={false} />
                ))}
              </FadeUp>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4">
              <FadeUp className={TEXT_COL}>
                <div className="rounded-2xl border border-border p-8 text-center">
                  <h2 className="text-text mb-3" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                    Ready to Get Clarity?
                  </h2>
                  <p className="text-text-tertiary mb-6" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                    You've compared the options. Most Singapore SMEs should start with an audit, not a retainer.
                  </p>
                  <a href="https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n" onClick={trackCheckout(99, "https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n")} className={btnPrimary} style={btnPad}>
                    Get Your GEO Audit at SGD 99
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}

// ─────────────────────────────────────────────
// PROFOUND ALTERNATIVES PAGE
// ─────────────────────────────────────────────

function ProfoundAlternativesPage() {
  const alternatives = [
    {
      name: "Scantiv",
      tagline: "Expert GEO Audit (Recommended for Most Singapore Businesses)",
      features: [
        "Expert analysis (not just raw data)",
        "Singapore-specific recommendations",
        "24-hour turnaround",
        "PDF report you can share internally",
        "Clear next steps: what to improve and in what order",
        "No ongoing fees or subscription",
      ],
      price: "SGD 99 one-off",
      cta: "https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n",
      isScantiv: true,
    },
    {
      name: "Peec AI",
      tagline: "Enterprise Monitoring",
      features: [
        "Real-time monitoring across Answer Engines",
        "Team collaboration and role-based access",
        "API for custom integrations",
        "Scheduled reports",
        "Competitive benchmarking",
        "White-label options for agencies",
      ],
      price: "USD 100+/month",
      cta: "#",
    },
    {
      name: "Geoptie",
      tagline: "DIY Dashboard",
      features: [
        "Basic visibility tracking",
        "Dashboard with historical data",
        "CSV export for analysis",
        "Affordable pricing",
        "API access (limited)",
      ],
      price: "USD 49+/month",
      cta: "#",
    },
    {
      name: "Otterly.AI",
      tagline: "Lightweight Subscription",
      features: [
        "Basic visibility tracking",
        "Monthly reports (automated)",
        "Simple interface",
        "Email alerts for significant changes",
        "Affordable pricing",
      ],
      price: "USD 20–25/month",
      cta: "#",
    },
    {
      name: "HubSpot AI Grader",
      tagline: "Free Surface-Level Check",
      features: [
        "Free scan",
        "Basic visibility score",
        "Instant results",
        "No sign-up required (some versions)",
      ],
      price: "Free",
      cta: "#",
    },
  ];

  const decisionFramework = [
    {
      situation: '"I need one clear answer right now"',
      action: "Scantiv (SGD 99). Expert audit, 24-hour turnaround, Singapore context included.",
    },
    {
      situation: '"I need to track visibility month-to-month"',
      action: "Profound (if budget allows) or Geoptie (if cost-sensitive). Both provide ongoing monitoring.",
    },
    {
      situation: '"I\'m an agency with 10+ client brands"',
      action: "Peec AI. Built for portfolio management and team collaboration.",
    },
    {
      situation: '"I have almost no budget and just want a baseline"',
      action: "HubSpot Grader (free) or Otterly.AI (SGD 90/month). Understand that you're not getting expert guidance.",
    },
  ];

  const comparisonRows = [
    { feature: "Pricing Model", profound: "USD 99+/month", scantiv: "SGD 99 one-off", peecai: "USD 100+/month", geoptie: "USD 49+/month", otterly: "USD 20–25/month", hubspot: "Free" },
    { feature: "Typical Monthly Cost", profound: "SGD 700+", scantiv: "SGD 99 (one-time)", peecai: "SGD 600–750+", geoptie: "SGD 250–350", otterly: "SGD 90–120", hubspot: "Free" },
    { feature: "Expert Interpretation", profound: "No (raw data)", scantiv: "Yes", peecai: "No", geoptie: "No", otterly: "No", hubspot: "No" },
    { feature: "Singapore Context", profound: "No", scantiv: "Yes", peecai: "No", geoptie: "No", otterly: "No", hubspot: "No" },
    { feature: "Real-Time Monitoring", profound: "Yes", scantiv: "No", peecai: "Yes", geoptie: "Yes", otterly: "Yes", hubspot: "No" },
    { feature: "Ongoing Commitment", profound: "Subscription", scantiv: "None", peecai: "Subscription", geoptie: "Subscription", otterly: "Subscription", hubspot: "None" },
    { feature: "Turnaround Time", profound: "Continuous", scantiv: "24 hours", peecai: "Continuous", geoptie: "Continuous", otterly: "Continuous", hubspot: "Instant" },
  ];

  const faqProfound = [
    { q: "Is Profound worth it for Singapore SMEs?", a: "No, in most cases. Profound is built for enterprises (USD 100k+/year revenue companies) or large agencies managing 10+ brands. For a Singapore SME, the ROI doesn't stack up. Better path: Start with Scantiv (SGD 99), implement the recommendations, and revisit in 6–8 weeks." },
    { q: "What's the difference between a GEO audit and GEO monitoring?", a: "A GEO audit (Scantiv) gives you a one-time snapshot of your current state with expert recommendations (SGD 99). GEO monitoring (Profound, Peec AI) tracks visibility trends month-to-month (ongoing subscription). Most Singapore businesses need an audit first, then monitoring later (if at all)." },
    { q: "Can I use Scantiv and Profound together?", a: "Yes. Some agencies do this: Scantiv for quarterly deep audits with expert recommendations, and Profound for continuous monitoring. This combo is most cost-effective for businesses spending SGD 500+/month on other marketing." },
    { q: "How often should I run a GEO audit?", a: "Just started GEO work: monthly audits (first 3 months). Steady state: quarterly is usually enough. Active content/SEO program: monthly or quarterly. Most Singapore businesses find quarterly audits (4x/year at SGD 99 each = SGD 396/year) gives them enough clarity without breaking the budget." },
  ];

  return (
    <div className="bg-background-elevated min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-background-elevated py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4">
              <FadeUp className={TEXT_COL}>
                <div
                  style={{
                    fontSize: "var(--fs-eyebrow)",
                    lineHeight: "var(--lh-eyebrow)",
                    letterSpacing: "var(--ls-eyebrow)",
                    color: "var(--color-accent)",
                    fontWeight: "var(--font-weight-medium)",
                    textTransform: "uppercase",
                    marginBottom: "var(--spacing-sm)",
                  }}
                >
                  Comparing GEO Monitoring Tools
                </div>
                <h1 className="text-text mb-4" style={{ fontSize: "var(--fs-h2)", lineHeight: "var(--lh-h2)", fontWeight: "var(--font-weight-medium)" }}>
                  Best Profound Alternatives in 2026 (Singapore)
                </h1>
                <p className="text-text-tertiary" style={{ fontSize: "var(--fs-para-lg)", lineHeight: "var(--lh-para-lg)" }}>
                  You've heard about Profound. It's powerful. It's also expensive, requires ongoing commitment, and doesn't come with the context you need as a Singapore business. This guide compares Profound against five real alternatives and helps you pick the right tool for your stage, budget, and GEO needs.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n" onClick={trackCheckout(99, "https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n")} className={btnPrimary} style={btnPad}>Get GEO Audit at S$99</a>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* What is Profound */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4">
              <FadeUp className={TEXT_COL}>
                <h2 className="text-text mb-6" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                  What is Profound?
                </h2>
                <div className="space-y-4">
                  <p className="text-text-tertiary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                    Profound is an AI-powered brand visibility platform that monitors how your business appears across Answer Engines like ChatGPT, Google's AI Overview, and Perplexity.
                  </p>
                  <div>
                    <h3 className="text-text mb-2" style={{ fontSize: "var(--fs-h6)", lineHeight: "var(--lh-h6)", fontWeight: "var(--font-weight-medium)" }}>Core Features</h3>
                    <ul className="text-text-tertiary space-y-1" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                      {["Real-time monitoring across ChatGPT, Claude, Perplexity, Gemini, Bing Copilot", "Brand visibility scoring and tracking", "Competitive intelligence", "Monthly reporting", "Enterprise integrations (Slack, HubSpot, etc.)"].map((feat, i) => (
                        <li key={i}>• {feat}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-text-tertiary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                      <strong style={{ color: "var(--color-text-secondary)" }}>Target audience:</strong> Large enterprises, agencies managing multiple brands, businesses tracking competitive positioning.
                    </p>
                  </div>
                  <div>
                    <p className="text-text-tertiary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                      <strong style={{ color: "var(--color-text-secondary)" }}>Pricing:</strong> USD 99+/month on subscription basis (annual discounts available).
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="bg-background-elevated py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4 gap-y-8">
              <FadeUp className={TEXT_COL}>
                <h2 className="text-text mb-8" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                  Pros and Cons of Profound
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-text mb-4" style={{ fontSize: "var(--fs-h6)", lineHeight: "var(--lh-h6)", fontWeight: "var(--font-weight-medium)" }}>Pros</h3>
                    <ul className="space-y-2">
                      {[
                        "Comprehensive monitoring across all major Answer Engines in real-time",
                        "Clean, intuitive dashboard for non-technical teams",
                        "Monthly reports with trend analysis",
                        "Good for competitive intelligence",
                        "Enterprise-grade infrastructure and support",
                      ].map((pro, i) => (
                        <li key={i} className="flex gap-2 text-text-tertiary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                          <Check size={20} color="var(--color-accent)" className="shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-text mb-4" style={{ fontSize: "var(--fs-h6)", lineHeight: "var(--lh-h6)", fontWeight: "var(--font-weight-medium)" }}>Cons</h3>
                    <ul className="space-y-2">
                      {[
                        "Expensive for Singapore SMEs (SGD 700+/month or SGD 8,400/year)",
                        "Subscription lock-in: ongoing cost even if you only need one-time clarity",
                        "No expert interpretation: raw data without strategic context",
                        "No Singapore-specific guidance on what the numbers mean",
                        "Overkill for businesses just starting GEO work",
                        "Assumes you already know why visibility matters and what to do about it",
                      ].map((con, i) => (
                        <li key={i} className="flex gap-2 text-text-tertiary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                          <span style={{ color: "var(--color-secondary-red)" }}>✕</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Why Consider Alternatives */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4">
              <FadeUp className={TEXT_COL}>
                <h2 className="text-text mb-8" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                  Why Consider Alternatives?
                </h2>
                <div className="space-y-6">
                  {[
                    { num: "1", title: "Subscription cost is prohibitive for smaller budgets", desc: "For startups, freelancers, and SMEs, SGD 700+/month is a significant ongoing commitment. A single bad month of no leads still costs the full fee." },
                    { num: "2", title: "One-time clarity is more valuable than ongoing monitoring", desc: "Most Singapore SMEs don't need to track monthly visibility trends. They need one clear answer: 'Are we showing up in AI right now, and why or why not?'" },
                    { num: "3", title: "No Singapore-specific context", desc: "Profound's global data doesn't account for Singapore's unique market dynamics, audience preferences, or competitive landscape. You see raw visibility scores but not what they mean locally." },
                    { num: "4", title: "Results need expert interpretation", desc: "Raw visibility scores don't tell you why your brand isn't showing up, or what to do about it. You still need strategic guidance." },
                  ].map(({ num, title, desc }) => (
                    <FadeUp key={num} delay={Number(num) * 0.1}>
                      <div className="flex gap-4">
                        <div
                          className="shrink-0 flex items-center justify-center rounded-full text-text"
                          style={{
                            width: 40,
                            height: 40,
                            background: "var(--color-neutral-100)",
                            fontSize: "var(--fs-h6)",
                            fontWeight: "var(--font-weight-medium)",
                          }}
                        >
                          {num}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-text mb-1" style={{ fontSize: "var(--fs-h6)", lineHeight: "var(--lh-h6)", fontWeight: "var(--font-weight-medium)" }}>
                            {title}
                          </h3>
                          <p className="text-text-tertiary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                            {desc}
                          </p>
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Alternatives Compared */}
        <section className="bg-background-elevated py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4">
              <FadeUp className={TEXT_COL}>
                <h2 className="text-text mb-8" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                  Profound Alternatives Compared
                </h2>
                <div className="grid gap-6">
                  {alternatives.map((alt, i) => (
                    <FadeUp
                      key={i}
                      delay={i * 0.1}
                      className={`rounded-2xl border p-6 ${alt.isScantiv ? "border-accent" : "border-border"}`}
                    >
                      <div className="flex items-start justify-between mb-4 gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-text" style={{ fontSize: "var(--fs-h6)", lineHeight: "var(--lh-h6)", fontWeight: "var(--font-weight-medium)" }}>
                              {alt.name}
                            </h3>
                            {alt.isScantiv && (
                              <span
                                style={{
                                  fontSize: "var(--fs-para-sm)",
                                  lineHeight: "var(--lh-para-sm)",
                                  letterSpacing: "var(--ls-eyebrow)",
                                  color: "var(--color-accent)",
                                  fontWeight: "var(--font-weight-medium)",
                                  textTransform: "uppercase",
                                  padding: "4px 8px",
                                  background: "rgba(var(--rgb-accent), 0.1)",
                                  borderRadius: "4px",
                                }}
                              >
                                Recommended
                              </span>
                            )}
                          </div>
                          <p className="text-text-tertiary" style={{ fontSize: "var(--fs-para-sm)", lineHeight: "var(--lh-para-sm)" }}>
                            {alt.tagline}
                          </p>
                        </div>
                      </div>
                      <div className="mb-4 space-y-2">
                        {alt.features.map((feat, j) => (
                          <p key={j} className="text-text-tertiary flex gap-2" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                            <Check size={16} color="var(--color-accent)" className="shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </p>
                        ))}
                      </div>
                      <div className="flex items-end justify-between pt-4 border-t border-border">
                        <p className="text-text-secondary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)", fontWeight: "var(--font-weight-medium)" }}>
                          {alt.price}
                        </p>
                        <a href={alt.cta} className={alt.isScantiv ? btnPrimary : btnSecondary} style={btnPad}>
                          Learn More
                        </a>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4">
              <FadeUp className={TEXT_COL}>
                <h2 className="text-text mb-8" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                  Comparison Table
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-border">
                        {["Feature", "Profound", "Scantiv", "Peec AI", "Geoptie", "Otterly.AI", "HubSpot Grader"].map((h) => (
                          <th key={h} style={{ fontSize: "var(--fs-para-sm)", fontWeight: "var(--font-weight-medium)", color: "var(--color-text-secondary)", padding: "12px 16px" }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, i) => (
                        <tr key={i} className="border-b border-border">
                          <td style={{ padding: "12px 16px", fontSize: "var(--fs-para-body)", color: "var(--color-text-secondary)", fontWeight: "var(--font-weight-medium)" }}>
                            {row.feature}
                          </td>
                          <td style={{ padding: "12px 16px", fontSize: "var(--fs-para-sm)", color: "var(--color-text-tertiary)" }}>{row.profound}</td>
                          <td style={{ padding: "12px 16px", fontSize: "var(--fs-para-sm)", color: "var(--color-text-tertiary)" }}>{row.scantiv}</td>
                          <td style={{ padding: "12px 16px", fontSize: "var(--fs-para-sm)", color: "var(--color-text-tertiary)" }}>{row.peecai}</td>
                          <td style={{ padding: "12px 16px", fontSize: "var(--fs-para-sm)", color: "var(--color-text-tertiary)" }}>{row.geoptie}</td>
                          <td style={{ padding: "12px 16px", fontSize: "var(--fs-para-sm)", color: "var(--color-text-tertiary)" }}>{row.otterly}</td>
                          <td style={{ padding: "12px 16px", fontSize: "var(--fs-para-sm)", color: "var(--color-text-tertiary)" }}>{row.hubspot}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Decision Framework */}
        <section className="bg-background-elevated py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4">
              <FadeUp className={TEXT_COL}>
                <h2 className="text-text mb-8" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                  Decision Framework
                </h2>
                <div className="space-y-4">
                  {decisionFramework.map((item, i) => (
                    <FadeUp
                      key={i}
                      delay={i * 0.1}
                      className="rounded-lg border border-border p-4"
                    >
                      <p className="text-text font-medium mb-2" style={{ fontSize: "var(--fs-h6)", lineHeight: "var(--lh-h6)" }}>
                        {item.situation}
                      </p>
                      <p className="text-text-tertiary" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                        → {item.action}
                      </p>
                    </FadeUp>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* How to Choose for Your Stage */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4">
              <FadeUp className={TEXT_COL}>
                <h2 className="text-text mb-8" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                  How to Choose a GEO Tool for Your Stage
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      stage: "Early Stage (Just Starting Out)",
                      what: "You don't know yet if GEO is worth investing in. You need clarity first, tools later.",
                      steps: [
                        "Start with Scantiv (SGD 99). Get an expert audit.",
                        "Read the report and understand your current position.",
                        "Implement the top 3–5 recommendations (usually free or low-cost).",
                        "In 6–8 weeks, re-run another Scantiv audit to see if you've improved.",
                        "Only then consider a subscription tool if ongoing tracking makes sense.",
                      ],
                      why: "Spending SGD 99 to validate GEO potential is much smarter than committing to SGD 700/month without knowing if it matters for your business.",
                      timeline: "2–3 months of testing before considering a paid subscription.",
                    },
                  ].map((stage, i) => (
                    <FadeUp key={i}>
                      <div>
                        <h3 className="text-text mb-2" style={{ fontSize: "var(--fs-h6)", lineHeight: "var(--lh-h6)", fontWeight: "var(--font-weight-medium)" }}>
                          {stage.stage}
                        </h3>
                        <p className="text-text-tertiary mb-3" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                          {stage.what}
                        </p>
                        <p className="text-text mb-2" style={{ fontSize: "var(--fs-para-sm)", fontWeight: "var(--font-weight-medium)" }}>What to do:</p>
                        <ol className="text-text-tertiary space-y-1 mb-3 ml-4" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                          {stage.steps.map((step, j) => (
                            <li key={j}>{j + 1}. {step}</li>
                          ))}
                        </ol>
                        <div className="space-y-2 text-sm">
                          <p className="text-text-tertiary"><strong style={{ color: "var(--color-text-secondary)" }}>Why:</strong> {stage.why}</p>
                          <p className="text-text-tertiary"><strong style={{ color: "var(--color-text-secondary)" }}>Timeline:</strong> {stage.timeline}</p>
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-background-elevated py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4">
              <FadeUp className={TEXT_COL}>
                <h2 className="text-text mb-2" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                  Questions
                </h2>
                {faqProfound.map((item, i) => (
                  <FAQItem key={i} index={i} q={item.q} a={item.a} defaultOpen={false} />
                ))}
              </FadeUp>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-x-4">
              <FadeUp className={TEXT_COL}>
                <div className="rounded-2xl border border-border p-8 text-center">
                  <h2 className="text-text mb-3" style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--font-weight-medium)" }}>
                    Ready to Get Clarity?
                  </h2>
                  <p className="text-text-tertiary mb-6" style={{ fontSize: "var(--fs-para-body)", lineHeight: "var(--lh-para-body)" }}>
                    You've compared the options. If you're still unsure where you stand in AI search, that's exactly what Scantiv is for.
                  </p>
                  <a href="https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n" onClick={trackCheckout(99, "https://buy.stripe.com/14A5kE2Gr7s39Tn9ar5Vu0n")} className={btnPrimary} style={btnPad}>
                    Get Your GEO Audit at SGD 99
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}

// ─────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────

function MainPage() {
  return (
    <div className="bg-background-elevated min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <ProblemSpaceSection />
        <FeaturesSection />
        <SampleReportSection />
        <HowItWorksSection />
        <PricingSection />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/first-page-digital-alternatives" element={<FirstPageDigitalAlternativesPage />} />
      <Route path="/profound-alternatives" element={<ProfoundAlternativesPage />} />
    </Routes>
  );
}