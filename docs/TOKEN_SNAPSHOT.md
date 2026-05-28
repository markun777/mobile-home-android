# Token Snapshot

Last updated: `2026-05-28`

## Canonical Contract

- Specification board: `🎨 Browser Color System v3.0` (`106:3910`)
- Color variable collection: `浏览器色彩 / Browser Color v3.0`
  - Inventory: `78` COLOR variables
  - Modes: `浅色 Light`, `深色 Dark`
  - Strategy: Alpha + Solid 双轨 (base #000000 light / #FFFFFF dark)
- Spacing collection: `间距` (`5` FLOAT variables)
- Applied surfaces: Phone (`85:3451`) and Pad (`91:5128`)

### Delivery Mapping

| Output | Format | Location | Status |
|---|---|---|---|
| Preview (Expo) | `src/theme/tokens.js` (JS named exports) | repository root | reference only |
| Formal XML delivery | Android `res/values/colors.xml` | `app/src/main/res/values/` | synced ✅ |
| Dark mode XML | Android `res/values-night/colors.xml` | `app/src/main/res/values-night/` | synced ✅ |
| Spacing / dimens | Android `res/values/dimens.xml` | `app/src/main/res/values/` | synced ✅ |

## Phone-Consumed Tokens — Figma → Android Resource Mapping

### Brand

| Figma Variable | Light Value | Android Resource |
|---|---|---|
| `brand 品牌/light · 浅色辅助` | `#5C82F1` | `@color/brand_light` |
| `brand 品牌/base · 主色` | `#2563EB` | `@color/brand_base` |
| `brand 品牌/strong · 悬浮态` | `#1D4ED8` | `@color/brand_strong` |
| `brand 品牌/stronger · 按捺态` | `#1E40AF` | `@color/brand_stronger` |
| `brand 品牌/focus · 聚焦光环` | `rgba(#2563EB, 0.30)` | `@color/brand_focus` |

### Text (alpha, base #000000 light / #FFFFFF dark)

| Figma Variable | Light Value | Dark Value | Android Resource |
|---|---|---|---|
| `text 文字/primary · 标题正文` | `rgba(0,0,0,0.88)` | `rgba(255,255,255,0.92)` | `@color/text_primary` |
| `text 文字/secondary · 次级说明` | `rgba(0,0,0,0.60)` | `rgba(255,255,255,0.65)` | `@color/text_secondary` |
| `text 文字/tertiary · 辅助信息` | `rgba(0,0,0,0.45)` | `rgba(255,255,255,0.45)` | `@color/text_tertiary` |
| `text 文字/placeholder · 输入提示` | `rgba(0,0,0,0.28)` | `rgba(255,255,255,0.30)` | `@color/text_placeholder` |
| `text 文字/disabled · 禁用文字` | `rgba(0,0,0,0.24)` | `rgba(255,255,255,0.24)` | `@color/text_disabled` |

### Fill (alpha, base #000000 light / #FFFFFF dark)

| Figma Variable | Light Value | Dark Value | Android Resource |
|---|---|---|---|
| `fill 填充/primary · 标签色标` | `rgba(0,0,0,0.26)` | `rgba(255,255,255,0.36)` | `@color/fill_primary` |
| `fill 填充/secondary · 按捺选中` | `rgba(0,0,0,0.16)` | `rgba(255,255,255,0.22)` | `@color/fill_secondary` |
| `fill 填充/tertiary · 悬浮态` | `rgba(0,0,0,0.10)` | `rgba(255,255,255,0.14)` | `@color/fill_tertiary` |
| `fill 填充/quaternary · 弱次级默认` | `rgba(0,0,0,0.06)` | `rgba(255,255,255,0.08)` | `@color/fill_quaternary` |
| `fill 填充/quinary · 极弱轻悬停` | `rgba(0,0,0,0.03)` | `rgba(255,255,255,0.04)` | `@color/fill_quinary` |

### Border (alpha, base #000000 light / #FFFFFF dark)

| Figma Variable | Light Value | Dark Value | Android Resource |
|---|---|---|---|
| `border 边框/inverse · 反色` | `rgba(0,0,0,0.85)` | `rgba(255,255,255,0.85)` | `@color/border_inverse` |
| `border 边框/strong · 强` | `rgba(0,0,0,0.18)` | `rgba(255,255,255,0.20)` | `@color/border_strong` |
| `border 边框/regular · 常规` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.12)` | `@color/border_regular` |
| `border 边框/subtle · 弱` | `rgba(0,0,0,0.04)` | `rgba(255,255,255,0.06)` | `@color/border_subtle` |

### Surface (opaque)

| Figma Variable | Light Value | Dark Value | Android Resource |
|---|---|---|---|
| `surface 表面/canvas · 页面主底色` | `#FFFFFF` | `#1C1C1E` | `@color/surface_canvas` |
| `surface 表面/raised · 弹窗高浮层` | `#FFFFFF` | `#3A3A3C` | `@color/surface_raised` |
| `surface 表面/elevated · 卡片工具栏` | `#FAFAFB` | `#2C2C2E` | `@color/surface_elevated` |
| `surface 表面/sunken · 最深 / 编辑器空白` | `#F0F1F4` | `#000000` | `@color/surface_sunken` |
| `surface 表面/inverse · 反色容器 / 吐司` | `#1C1C1E` | `#F2F2F7` | `@color/surface_inverse` |

### Platform-specific (non-variable, from spec board)

| Reference | Value | Android Resource | Usage |
|---|---|---|---|
| `M3/ref/neutral/neutral10` | `#1D1B20` | `@color/platform_status_bar_text` | Status bar clock color (light) |
| `1. Sys/Whale/LM/On-Surface-Var N2-700` | `#454649` | `@color/platform_nav_handle` | System nav handle |

## Figma Variable → AARRGGBB Conversion

Figma stores colors in RRGGBBAA byte order. Android uses AARRGGBB. Conversion verified:

| Figma (RRGGBBAA) | Android (AARRGGBB) |
|---|---|
| `#000000e0` (alpha 0.878) | `#E0000000` |
| `#00000073` (alpha 0.451) | `#73000000` |
| `#00000047` (alpha 0.278) | `#47000000` |
| `#00000008` (alpha 0.031) | `#08000000` |
| `#00000014` (alpha 0.078) | `#14000000` |
| `#0000002e` (alpha 0.180) | `#2E000000` |

## Exception Policy

Design-owned multicolor images and platform-owned system UI may carry colors
outside UI tokens. All other raw UI color additions require an explicit entry
here before implementation. Formal XML implementation must reference semantic
Android resources rather than copying raw values into layout files.

## Dark-mode Alpha Deltas (v3.0 confirmed)

| Token | Light α | Dark α | Delta |
|---|---|---|---|
| fill/quinary | 3% | 4% | +1% |
| fill/quaternary | 6% | 8% | +2% |
| fill/tertiary | 10% | 14% | +4% |
| text/tertiary | 45% | 45% | 0% (stays) |
| border/subtle | 4% | 6% | +2% |
| border/regular | 8% | 12% | +4% |
| border/strong | 18% | 20% | +2% |
