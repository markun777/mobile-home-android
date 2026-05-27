# Product Restoration Preflight

Status: `delivery-profile-confirmed-xml-migration-pending`

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
- Preview/reference runtime: `React Native + Expo SDK 56`, currently located
  at repository root pending relocation to `preview/expo/`
- Form factors: `phone-and-pad`
- Layout policy: Phone and Pad use independent compositions; Pad is not a
  stretched Phone screen.
- Token policy: both surfaces consume the shared v3.0 semantic baseline;
  exceptions must be documented before implementation.

## Sources

| Surface | Figma Node | Preview State | Formal XML Delivery Gate |
|---|---|---|---|
| Phone home default | `85:3451` | implemented in Expo preview | native project/token resources and Phone XML pending |
| Phone Ask AI | `91:4404` | mapped only | defer until XML default board verified |
| Pad home default | `91:5128` | mapped only | independent XML composition pending |

## Required Artifacts

| Artifact | Status | Notes |
|---|---|---|
| `FIGMA_BOARD_STATE_MAP.md` | `[x]` | Phone and Pad sources mapped; delivery statuses reset for XML |
| `LAYOUT_CONSTANTS.md` | `[x]` | Phone geometry and Pad separation recorded |
| `TOKEN_SNAPSHOT.md` | `[x]` | v3.0 contract recorded; XML resource output still pending |
| `ASSET_MANIFEST.md` | `[x]` | Existing preview assets recorded; Android packaging mapping pending |
| `INTERACTION_CONTRACT.md` | `[x]` | First-slice boundaries recorded |
| `XML_DELIVERY_TRANSITION.md` | `[x]` | Delivery-stack decision and migration order recorded |

## Migration Gate

- `[x]` Receiving team confirmed as Android XML.
- `[x]` Expo reclassified as preview/reference only.
- `[x]` Phone and Pad source nodes and v3.0 token baseline remain valid.
- `[ ]` Relocate or isolate Expo under `preview/expo/`.
- `[ ]` Create native Android Views/XML application scaffold.
- `[ ]` Map v3.0 semantic tokens into Android resource XML.
- `[ ]` Package Phone assets for native resource use.
- `[ ]` Implement Phone default XML board.

## Delivery Verification Gate

- `[ ]` Native Android build succeeds for the XML implementation.
- `[ ]` Phone XML screen rendered on a named Android emulator/device.
- `[ ]` Pixel/geometry comparison against `85:3451` recorded.
- `[ ]` Packaged resource and light/dark token resolution verified.
- `[ ]` Pad XML implementation and tablet render verification completed.

Do not claim Android XML delivery complete from the existing Expo preview or
its web export.
