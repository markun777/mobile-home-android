/**
 * Browser Color System v3.0
 * Source: Figma tJamKVuAm0fELLoddNqQ9A
 * Collection: 浏览器色彩 / Browser Color v3.0 (87 vars, Light/Dark)
 * Last synced: 2026-05-27
 *
 * Light mode values used here (Expo preview).
 * Dark mode values are in the Figma Variables collection.
 *
 * v3.0 changes from v2.0:
 *   - warning: #EA580C → #F59E0B (amber)
 *   - semantic bg: 3-tier (default/hover/pressed) at 12%/18%/24%
 *   - new: white-alpha / black-alpha invariant groups
 *   - new: surface/transparent, semantic text/dark, semantic border
 */

export const Brand = {
  light:    '#5C82F1',
  base:     '#2563EB',
  strong:   '#1D4ED8',
  stronger: '#1E40AF',
  focus:    'rgba(37,99,235,0.30)',
};

export const Text = {
  primary:     'rgba(0,0,0,0.88)',
  secondary:   'rgba(0,0,0,0.60)',
  tertiary:    'rgba(0,0,0,0.45)',
  placeholder: 'rgba(0,0,0,0.28)',
  disabled:    'rgba(0,0,0,0.24)',
};

export const Fill = {
  primary:    'rgba(0,0,0,0.26)',
  secondary:  'rgba(0,0,0,0.16)',
  tertiary:   'rgba(0,0,0,0.10)',
  quaternary: 'rgba(0,0,0,0.06)',
  quinary:    'rgba(0,0,0,0.03)',
};

export const Border = {
  inverse: 'rgba(0,0,0,0.85)',
  strong:  'rgba(0,0,0,0.18)',
  regular: 'rgba(0,0,0,0.08)',
  subtle:  'rgba(0,0,0,0.04)',
};

export const Surface = {
  canvas:      '#FFFFFF',
  raised:      '#FFFFFF',
  elevated:    '#FAFAFB',
  sunken:      '#F0F1F4',
  inverse:     '#1C1C1E',
  transparent: 'rgba(255,255,255,0)',
};

export const Semantic = {
  success: {
    base:      '#16A34A',
    strong:    '#15803D',
    stronger:  '#166534',
    bgDefault: 'rgba(22,163,74,0.12)',
    bgHover:   'rgba(22,163,74,0.18)',
    bgPressed: 'rgba(22,163,74,0.24)',
    border:    'rgba(22,163,74,0.36)',
    textDark:  '#4ADE80',
  },
  warning: {
    base:      '#F59E0B',
    strong:    '#D97706',
    stronger:  '#B45309',
    bgDefault: 'rgba(245,158,11,0.12)',
    bgHover:   'rgba(245,158,11,0.18)',
    bgPressed: 'rgba(245,158,11,0.24)',
    border:    'rgba(245,158,11,0.36)',
    textDark:  '#FDE68A',
  },
  danger: {
    base:      '#DC2626',
    strong:    '#B91C1C',
    stronger:  '#991B1B',
    bgDefault: 'rgba(220,38,38,0.12)',
    bgHover:   'rgba(220,38,38,0.18)',
    bgPressed: 'rgba(220,38,38,0.24)',
    border:    'rgba(220,38,38,0.36)',
    textDark:  '#F87171',
  },
  info: {
    base:      '#2563EB',
    strong:    '#1D4ED8',
    stronger:  '#1E40AF',
    bgDefault: 'rgba(37,99,235,0.12)',
    bgHover:   'rgba(37,99,235,0.18)',
    bgPressed: 'rgba(37,99,235,0.24)',
    border:    'rgba(37,99,235,0.36)',
    textDark:  '#60A5FA',
  },
};

export const Colors = {
  white:           Surface.canvas,
  bgPage:          Surface.canvas,
  bgCard:          Surface.raised,
  bgSunken:        Surface.sunken,
  bgElevated:      Surface.elevated,
  textPrimary:     Text.primary,
  textSecondary:   Text.secondary,
  textTertiary:    Text.tertiary,
  textPlaceholder: Text.placeholder,
  textDisabled:    Text.disabled,
  borderSubtle:    Border.subtle,
  borderRegular:   Border.regular,
  borderStrong:    Border.strong,
  fillHover:       Fill.tertiary,
  fillPressed:     Fill.secondary,
  fillGhost:       Fill.quinary,
  brandBase:       Brand.base,
  brandHover:      Brand.strong,
  brandPressed:    Brand.stronger,
  searchOutline:   Border.regular,
  searchShadow:    'rgba(0,0,0,0.04)',
  tabBg:           Fill.quinary,
  engineBorder:    Border.regular,
};

export const Spacing = {
  screenPadding: 24,
  cardPadding:   12,
  sectionGap:    8,
};

export const Radius = {
  card:    16,
  tab:      8,
  tabItem:  6,
  engine:   8,
  shortcut: 8,
};
