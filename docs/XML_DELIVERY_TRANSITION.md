# XML Delivery Transition

Decision date: `2026-05-27`

## Decision

The receiving team integrates Android XML. This repository will remain the
product repository, but its formal output changes from an Expo-targeted
Android implementation to a native Android Views/XML deliverable.

The earlier Expo implementation was useful as a historical visual reference,
but it is not convertible delivery code for the XML receiver. It has now been
removed so the repository root represents native Android XML delivery.

## Sources Preserved

| Source | Status After Transition |
|---|---|
| Figma Phone default `85:3451` | canonical first delivery board |
| Figma Phone Ask AI `571:46559` | parked after initial XML/assets; not current entry point |
| Figma Pad default `91:5128` | canonical Pad source; independent composition |
| Browser Color System v3.0 `106:3910` | canonical semantic token baseline |
| Existing exported Phone assets | reusable after Android resource packaging |
| Expo Phone screen | retired historical preview |

## Target Implementation Boundary

| Area | Formal Delivery | Preview / Evidence |
|---|---|---|
| UI layout | Kotlin + XML Views | preview-only artifacts if explicitly recreated |
| Semantic colors and spacing | Android `values` / `values-night` resources | historical `src/theme/tokens.js` removed |
| Phone layout | `res/layout/` | native emulator screenshot evidence |
| Pad layout | independent `layout-sw600dp/` or approved equivalent | separate future thread/branch |
| Acceptance evidence | native build plus Android emulator/device render | preview discussion only |

## Migration Steps

1. Retire/remove the Expo project so the repository root clearly represents
   native delivery.
2. Add the native Android Views/XML application structure.
3. Generate semantic Android resource XML from the confirmed v3.0 baseline,
   including Light and Dark variants.
4. Package exported Phone assets into approved Android resource buckets.
5. Implement Phone default from `85:3451` and verify it on a named Android
   emulator/device.
6. Continue Phone home states first. Keep Ask AI parked, and handle Pad in a
   separate thread/branch.

## Collaboration Notes

- `figma-to-code-skills` owns reusable workflow and template gates only.
- Product code and delivery evidence remain in this repository.
- Workflow PR `figma-to-code-skills#69` was already active when this decision
  was made; notify it of the XML profile decision rather than editing its
  branch in parallel.
