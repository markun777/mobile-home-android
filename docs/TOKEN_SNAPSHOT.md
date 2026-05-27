# Token Snapshot

## Canonical Contract

- Specification board: `规范 · Browser Color v3.0` /
  `Browser Color System v3.0` (`106:3910`)
- Color collection: `浏览器色彩 / Browser Color v3.0`
- Modes: `浅色 Light`, `深色 Dark`
- Inventory: `78` color variables plus `间距` with `5` numeric variables
- Applied surfaces: Phone and Pad
- Preview mapping: `src/theme/tokens.js` maps the light-mode tokens currently
  consumed by the Expo `PhoneHomeScreen`; this is preview/reference output
  only.
- Formal delivery mapping: Android semantic resource definitions in
  `app/src/main/res/values/` and `app/src/main/res/values-night/` are pending
  as part of the XML migration. The Figma collection remains canonical for
  both preview and delivery outputs.

## Phone-Consumed Tokens

| Figma Variable | Light Value | Current Preview Mapping | Formal XML Mapping |
|---|---|---|---|
| `brand 品牌/base · 主色` | `#2563EB` | `Brand.base` | pending semantic `@color` resource |
| `text 文字/primary · 标题正文` | `rgba(0,0,0,0.88)` | `Text.primary` | pending semantic `@color` resource |
| `text 文字/secondary · 次级说明` | `rgba(0,0,0,0.60)` | `Text.secondary` | pending semantic `@color` resource |
| `text 文字/placeholder · 输入提示` | `rgba(0,0,0,0.28)` | `Text.placeholder` | pending semantic `@color` resource |
| `fill 填充/quinary · 极弱轻悬停` | `rgba(0,0,0,0.03)` | `Fill.quinary` | pending semantic `@color` resource |
| `border 边框/regular · 常规` | `rgba(0,0,0,0.08)` | `Border.regular` | pending semantic `@color` resource |
| `surface 表面/canvas · 页面主底色` | `#FFFFFF` | `Surface.canvas` | pending semantic `@color` resource |
| `surface 表面/raised · 弹窗高浮层` | `#FFFFFF` | `Surface.raised` | pending semantic `@color` resource |

## Exception Policy

Design-owned multicolor images and platform-owned system UI may carry colors
outside UI tokens. All other raw UI color additions require an explicit entry
here before implementation. Formal XML implementation must reference semantic
Android resources rather than copying raw values into layout files.
