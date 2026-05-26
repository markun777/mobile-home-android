# Token Snapshot

## Canonical Contract

- Specification board: `规范 · Browser Color v3.0` /
  `Browser Color System v3.0` (`106:3910`)
- Color collection: `浏览器色彩 / Browser Color v3.0`
- Modes: `浅色 Light`, `深色 Dark`
- Inventory: `78` color variables plus `间距` with `5` numeric variables
- Applied surfaces: Phone and Pad
- Code mapping: `src/theme/tokens.js` maps the light-mode tokens currently
  consumed by `PhoneHomeScreen`; the Figma collection remains canonical for
  the full inventory and future dark-mode use.

## Phone-Consumed Tokens

| Figma Variable | Light Value | Code Mapping | Usage |
|---|---|---|---|
| `brand 品牌/base · 主色` | `#2563EB` | `Brand.base` | primary brand |
| `text 文字/primary · 标题正文` | `rgba(0,0,0,0.88)` | `Text.primary` | primary text |
| `text 文字/secondary · 次级说明` | `rgba(0,0,0,0.60)` | `Text.secondary` | secondary text |
| `text 文字/placeholder · 输入提示` | `rgba(0,0,0,0.28)` | `Text.placeholder` | search hint |
| `fill 填充/quinary · 极弱轻悬停` | `rgba(0,0,0,0.03)` | `Fill.quinary` | tab surface |
| `border 边框/regular · 常规` | `rgba(0,0,0,0.08)` | `Border.regular` | search/engine outline |
| `surface 表面/canvas · 页面主底色` | `#FFFFFF` | `Surface.canvas` | screen background |
| `surface 表面/raised · 弹窗高浮层` | `#FFFFFF` | `Surface.raised` | search card |

## Exception Policy

Design-owned multicolor images and platform-owned system UI may carry colors
outside UI tokens. All other raw UI color additions require an explicit entry
here before implementation.
