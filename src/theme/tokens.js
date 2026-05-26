/**
 * Browser Color System v2.0
 * Source: Figma tJamKVuAm0fELLoddNqQ9A, node 106:3910
 *
 * Strategy: Alpha + Solid dual-track
 * Base for alpha tokens (light mode): #000000
 * Base for alpha tokens (dark mode):  #FFFFFF
 *
 * Light mode values are used here (RN web preview).
 * Dark mode values are written to Figma Variables collection
 * "Browser Color System v2.0" and verified against spec.
 *
 * Dark mode corrections applied 2026-05-25:
 *   fill/quinary 6%→4%, fill/quaternary 10%→8%, fill/tertiary 16%→14%
 *   text/tertiary 30%→45%
 *   border/subtle 8%→6%, border/regular 14%→12%, border/strong 22%→20%
 */

// ─── Brand ────────────────────────────────────────────────────────────────────
export const Brand = {
  light:    '#5C82F1', // deep-bg text / link / dark-mode icon
  base:     '#2563EB', // primary · main button · link
  strong:   '#1D4ED8', // hover
  stronger: '#1E40AF', // pressed
  focus:    'rgba(37,99,235,0.30)', // focus ring only
};

// ─── Fill (alpha, light mode, base #000000) ───────────────────────────────────
export const Fill = {
  quinary:   'rgba(0,0,0,0.03)',  // ghost hover
  quaternary:'rgba(0,0,0,0.06)',  // secondary default
  tertiary:  'rgba(0,0,0,0.10)',  // hover state
  secondary: 'rgba(0,0,0,0.16)',  // pressed / selected
  primary:   'rgba(0,0,0,0.26)',  // tag / chip
};

// ─── Text (alpha, light mode, base #000000) ───────────────────────────────────
export const Text = {
  primary:     'rgba(0,0,0,0.88)', // heading / body
  secondary:   'rgba(0,0,0,0.60)', // secondary description
  tertiary:    'rgba(0,0,0,0.45)', // auxiliary info
  placeholder: 'rgba(0,0,0,0.28)', // input hint
  disabled:    'rgba(0,0,0,0.24)', // disabled text
};

// ─── Border (alpha, light mode, base #000000) ─────────────────────────────────
export const Border = {
  subtle:  'rgba(0,0,0,0.04)',  // weak
  regular: 'rgba(0,0,0,0.08)',  // normal
  strong:  'rgba(0,0,0,0.18)',  // strong
  inverse: 'rgba(0,0,0,0.85)',  // inverse
};

// ─── Surface (opaque, light mode) ─────────────────────────────────────────────
export const Surface = {
  sunken:   '#F0F1F4', // deepest / editor blank
  canvas:   '#FFFFFF', // page main bg
  elevated: '#FAFAFB', // card / toolbar
  raised:   '#FFFFFF', // modal / high float (+ shadow)
  inverse:  '#1C1C1E', // inverse container / toast
};

// ─── Semantic ─────────────────────────────────────────────────────────────────
export const Semantic = {
  success: {
    base:    '#16A34A',
    strong:  '#15803D',
    stronger:'#166534',
    bgDefault: 'rgba(22,163,74,0.10)',
  },
  warning: {
    base:    '#EA580C',
    strong:  '#C2410C',
    stronger:'#9A3412',
    bgDefault: 'rgba(234,88,12,0.10)',
  },
  danger: {
    base:    '#DC2626',
    strong:  '#B91C1C',
    stronger:'#991B1B',
    bgDefault: 'rgba(220,38,38,0.10)',
  },
  info: {
    base:    '#2563EB', // same as brand/base
    strong:  '#1D4ED8',
    stronger:'#1E40AF',
    bgDefault: 'rgba(37,99,235,0.10)',
  },
};

// ─── Convenience aliases (used in components) ─────────────────────────────────
export const Colors = {
  // backgrounds
  white:          Surface.canvas,
  bgPage:         Surface.canvas,
  bgCard:         Surface.raised,
  bgSunken:       Surface.sunken,
  bgElevated:     Surface.elevated,

  // text
  textPrimary:    Text.primary,
  textSecondary:  Text.secondary,
  textTertiary:   Text.tertiary,
  textPlaceholder:Text.placeholder,
  textDisabled:   Text.disabled,

  // border / outline
  borderSubtle:   Border.subtle,
  borderRegular:  Border.regular,
  borderStrong:   Border.strong,

  // fill states
  fillHover:      Fill.tertiary,
  fillPressed:    Fill.secondary,
  fillSelected:   Fill.secondary,
  fillGhost:      Fill.quinary,

  // brand
  brandBase:      Brand.base,
  brandHover:     Brand.strong,
  brandPressed:   Brand.stronger,

  // search card specific
  searchOutline:  Border.regular,   // rgba(0,0,0,0.08) — 0.5px border
  searchShadow:   'rgba(0,0,0,0.04)',

  // tab bg (search mode switch)
  tabBg:          Fill.quinary,     // rgba(0,0,0,0.03) ≈ fill/quinary

  // engine selector border
  engineBorder:   Border.regular,   // rgba(0,0,0,0.08)
};

export const Spacing = {
  screenPadding: 24,
  cardPadding:   12,
  sectionGap:    8,
};

export const Radius = {
  card:     16,
  tab:       8,
  tabItem:   6,
  engine:    8,
  shortcut:  8,
};
