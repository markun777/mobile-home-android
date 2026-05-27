# Figma Board / State Map

Figma file: `tJamKVuAm0fELLoddNqQ9A / 移动端首页改版`

| Order | Form Factor | Canonical Name | Node | Role | Preview State | XML Delivery State |
|---:|---|---|---|---|---|---|
| 1 | `phone` | `phone-home-default` | `85:3451` | default homepage | Expo reference exists | not started |
| 2 | `phone` | `phone-home-ask-ai` | `91:4404` | Ask AI mode | mapped; deferred | deferred |
| 3 | `pad` | `pad-home-default` | `91:5128` | separate wide composition | mapped; deferred | deferred |

## Rules

- Every delivered XML state must point to a Figma node or an approved
  provisional source.
- Phone and Pad share `Browser Color System v3.0` but keep separate layout
  compositions.
- The Expo preview may be used for visual reference; its existence does not
  advance the XML delivery state.
- Implement one XML board at a time and record Android render evidence before
  expanding scope.
