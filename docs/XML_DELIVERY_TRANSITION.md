# XML Delivery Transition

Decision date: `2026-05-27`

## Decision

The receiving team integrates Android XML. This repository will remain the
product repository, but its formal output changes from an Expo-targeted
Android implementation to a native Android Views/XML deliverable.

The existing Expo implementation is retained because it already provides a
useful visual reference for the Phone default board. It is not convertible
delivery code for the XML receiver and must remain explicitly labeled as
preview/reference material.

## Sources Preserved

| Source | Status After Transition |
|---|---|
| Figma Phone default `85:3451` | canonical first delivery board |
| Figma Phone Ask AI `91:4404` | deferred after XML default verification |
| Figma Pad default `91:5128` | canonical Pad source; independent composition |
| Browser Color System v3.0 `106:3910` | canonical semantic token baseline |
| Existing exported Phone assets | reusable after Android resource packaging |
| Current Expo Phone screen | preview/reference only |

## Target Implementation Boundary

| Area | Formal Delivery | Preview / Evidence |
|---|---|---|
| UI layout | Kotlin + XML Views | React Native + Expo |
| Semantic colors and spacing | Android `values` / `values-night` resources | `src/theme/tokens.js` mapping |
| Phone layout | `res/layout/` | existing `PhoneHomeScreen` reference |
| Pad layout | independent `layout-sw600dp/` or approved equivalent | none yet |
| Acceptance evidence | native build plus Android emulator/device render | visual discussion and bundle checks only |

## Migration Steps

1. Relocate the current Expo project to `preview/expo/` or otherwise isolate
   it so the repository root clearly represents native delivery.
2. Add the native Android Views/XML application structure.
3. Generate semantic Android resource XML from the confirmed v3.0 baseline,
   including Light and Dark variants.
4. Package exported Phone assets into approved Android resource buckets.
5. Implement Phone default from `85:3451` and verify it on a named Android
   emulator/device.
6. Only then extend scope to Ask AI or Pad.

## Collaboration Notes

- `figma-to-code-skills` owns reusable workflow and template gates only.
- Product code and delivery evidence remain in this repository.
- Workflow PR `figma-to-code-skills#69` was already active when this decision
  was made; notify it of the XML profile decision rather than editing its
  branch in parallel.
