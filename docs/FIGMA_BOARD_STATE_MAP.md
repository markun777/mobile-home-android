# Figma Board / State Map

Figma file: `tJamKVuAm0fELLoddNqQ9A / 移动端首页改版`

| Order | Form Factor | Canonical Name | Node | Role | Preview State | XML Delivery State |
|---:|---|---|---|---|---|---|
| 1 | `phone` | `phone-home-default` | `571:44695` | default homepage | retired | active in XML; build and emulator render verified |
| 2 | `phone` | `phone-search-web` | `768:14132` | search web — keyboard open | — | ✅ XML delivered; build and emulator render verified (f70b209) |
| 3 | `phone` | `phone-home-ask-ai` | `571:46559` | Ask AI mode | retired | parked; XML/resources retained, not app entry |
| 4 | `pad` | `pad-home-default` | `91:5128` | separate wide composition | retired | deferred to separate thread/branch |

## Rules

- Every delivered XML state must point to a Figma node or an approved
  provisional source.
- Phone and Pad share `Browser Color System v3.0` but keep separate layout
  compositions.
- Historical preview output does not advance the XML delivery state.
- Implement one XML board at a time and record Android render evidence before
  expanding scope.
