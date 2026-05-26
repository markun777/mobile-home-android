# Product Restoration Preflight

Status: `phone-board-1-implemented-awaiting-android-render-verification`

## Source And Runtime

- Product: `Mobile Home Android`
- Figma file: `tJamKVuAm0fELLoddNqQ9A / 移动端首页改版`
- Specification page / board: `规范 · Browser Color v3.0` /
  `Browser Color System v3.0` (`106:3910`)
- Color variable collection: `浏览器色彩 / Browser Color v3.0`
  (`78` variables; `浅色 Light`, `深色 Dark`)
- Spacing collection: `间距` (`5` variables)
- Platform: `android`
- Runtime: `React Native + Expo SDK 56`
- Form factors: `phone-and-pad`
- Layout policy: Phone and Pad use independent compositions; Pad is not a
  stretched Phone screen.
- Token policy: both surfaces consume the shared v3.0 baseline; exceptions
  must be documented before implementation.

## Sources

| Surface | Figma Node | State | Current Gate |
|---|---|---|---|
| Phone home default | `85:3451` | implemented in code | Android render verification pending |
| Phone Ask AI | `91:4404` | mapped only | do not begin before Phone default verification |
| Pad home default | `91:5128` | mapped only | implement as independent composition |

## Required Artifacts

| Artifact | Status | Notes |
|---|---|---|
| `FIGMA_BOARD_STATE_MAP.md` | `[x]` | Phone and Pad sources mapped |
| `LAYOUT_CONSTANTS.md` | `[x]` | Current Phone layout recorded |
| `TOKEN_SNAPSHOT.md` | `[x]` | Current v3.0 source and mapped tokens recorded |
| `ASSET_MANIFEST.md` | `[x]` | Phone exports recorded |
| `INTERACTION_CONTRACT.md` | `[x]` | First-slice boundaries recorded |

## Verification Gate

- `[x]` Phone source node is identified and current visual was checked.
- `[x]` Expo Web bundle export succeeds.
- `[ ]` Phone rendered on a named Android emulator/device.
- `[ ]` Pixel/geometry comparison against `85:3451` recorded.
- `[ ]` Pad implementation and tablet render verification completed.

Do not claim Android delivery complete until Android rendered evidence exists.
