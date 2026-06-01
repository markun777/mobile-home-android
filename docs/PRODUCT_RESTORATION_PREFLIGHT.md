# Product Restoration Preflight

Status: `phone-home-active-ask-ai-parked-pad-deferred`

## Source And Delivery Runtime

- Product: `Mobile Home Android`
- Figma file: `tJamKVuAm0fELLoddNqQ9A / 移动端首页改版`
- Specification page / board: `规范 · Browser Color v3.0` /
  `Browser Color System v3.0` (`106:3910`)
- Color variable collection: `浏览器色彩 / Browser Color v3.0`
  (`78` variables; `浅色 Light`, `深色 Dark`)
- Spacing collection: `间距` (`5` variables)
- Platform: `android`
- Formal delivery runtime: `Kotlin + Android Views/XML resources`
- Formal token output: `res/values/*.xml` and `res/values-night/*.xml`
- Preview/reference runtime: retired; the earlier `React Native + Expo SDK 56`
  scaffold has been removed from this repository
- Form factors: `phone-and-pad`
- Layout policy: Phone and Pad use independent compositions; Pad is not a
  stretched Phone screen.
- Token policy: both surfaces consume the shared v3.0 semantic baseline;
  exceptions must be documented before implementation.

## Sources

| Surface | Figma Node | Preview State | Formal XML Delivery Gate |
|---|---|---|---|
| Phone home default | `571:44695` | retired | XML implemented; stable SDK build and emulator render verified; active entry point |
| Phone Ask AI | `571:46559` | retired | parked; XML/resources retained, not active entry point |
| Pad home default | `91:5128` | retired | independent XML composition pending in a separate thread/branch |

## Required Artifacts

| Artifact | Status | Notes |
|---|---|---|
| `FIGMA_BOARD_STATE_MAP.md` | `[x]` | Phone and Pad sources mapped; delivery statuses reset for XML |
| `LAYOUT_CONSTANTS.md` | `[x]` | Phone geometry and Pad separation recorded |
| `TOKEN_SNAPSHOT.md` | `[x]` | v3.0 contract and Android XML resources recorded |
| `ASSET_MANIFEST.md` | `[x]` | Preview assets and native drawable packaging recorded |
| `INTERACTION_CONTRACT.md` | `[x]` | First-slice boundaries recorded |
| `XML_DELIVERY_TRANSITION.md` | `[x]` | Delivery-stack decision and migration order recorded |

## Migration Gate

- `[x]` Receiving team confirmed as Android XML.
- `[x]` Expo reclassified as preview/reference only.
- `[x]` Phone and Pad source nodes and v3.0 token baseline remain valid.
- `[x]` Retire/remove Expo preview scaffold from the repository root.
- `[x]` Create native Android Views/XML application scaffold.
- `[x]` Map v3.0 semantic tokens into Android resource XML.
- `[x]` Package Phone assets for native resource use.
- `[x]` Implement Phone default XML board.

## Delivery Verification Gate

- `[x]` Native Android build succeeds for the XML implementation.
- `[x]` Phone XML screen rendered on a named Android emulator/device.
- `[x]` Initial screenshot evidence against `85:3451` recorded.
- `[x]` Updated screenshot evidence against `571:44695` recorded.
- `[x]` Packaged resource resolution verified in local debug build/render.
- `[ ]` Phone home visual/pixel drift review against `571:44695` accepted.
- `[ ]` Pad XML implementation and tablet render verification completed in a
      separate thread/branch.

Do not claim Android XML delivery complete from any recreated web/preview
surface or historical Expo export.
