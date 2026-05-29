# Progress

Last updated: `2026-05-29`

## Current Status

`Phone default XML implemented, labels corrected, build-verified, and emulator-rendered`

## Decision Sync

- The receiving team requires Android XML delivery.
- Formal implementation is now defined as Kotlin + Android Views/XML resources.
- The existing Expo preview is preserved for rapid visual comparison only.
- `Browser Color System v3.0` is the canonical token baseline.

## Completed Evidence Retained (Phase 1)

- Phone source board mapped to Figma node `85:3451` (content feed variant, not browser homepage).
- Pad source board mapped to Figma node `91:5128` (independent composition).
- Expo Phone preview exists with v3.0 token mappings.
- Expo web export previously succeeded.

## Completed — Migration Phase 2 (Token Resources) ✅

| Step | Status | Notes |
|---|---|---|
| 1. Expo isolation under `preview/expo/` | ❌ deferred | Keep at root until XML layout work starts |
| 2. Native Android scaffold (`app/`) | ✅ done | Kotlin + Gradle, compileSdk 35, minSdk 26 |
| 3. **v3.0 semantic tokens → Android resource XML** | ✅ **done** | Light + Dark `colors.xml` with Figma variable annotations |
| 4. Spacing tokens (`dimens.xml`) | ✅ done | From Figma `间距` collection + layout constants |
| 5. Dark theme (`values-night/themes.xml`) | ✅ done | `windowLightStatusBar`=false for dark mode |
| 6. Drawable resources (tab bg, engine bg) | ✅ done | `bg_search_mode_tab`, `bg_tab_active`, `bg_engine_selector` |
| 7. Asset packaging → `res/drawable/` | ✅ done | 11 PNGs copied from `assets/` |
| 8. `TOKEN_SNAPSHOT.md` updated | ✅ done | Full Figma→Android resource mapping table |

## Completed — Migration Phase 3 (Phone Home XML Layout) ✅

| Step | Status | Notes |
|---|---|---|
| 1. Copy shortcut tile assets to `res/drawable/` | ✅ done | 12 shortcut PNGs + `nav_bookmarks.png` |
| 2. Rewrite `activity_main.xml` | ✅ done | Full Figma 85:3451 design with search card (mode tab, engine, camera/voice), 5×3 shortcut grid, bottom nav + system bar |
| 3. Nav handle drawable | ✅ done | `bg_nav_handle.xml` — rounded pill, `platform_nav_handle` color |
| 4. Shortcut labels in `strings.xml` | ✅ done | 12 Chinese labels added |
| 5. Resource reference audit | ✅ done | All 57 `@color`/`@dimen`/`@drawable`/`@string` references verified |

## Completed — Phase 4 (Label Correction + HTML Preview Verification) ✅

| Step | Status | Notes |
|---|---|---|
| Shortcut label audit vs Figma 85:3451 | ✅ done | 4 labels corrected: 历史→历史记录, 精选→网址精选, 游戏→小游戏, 小说→免费小说 |
| `strings.xml` updated | ✅ done | All 12 shortcut labels now match Figma node text |
| `xml-preview.html` updated | ✅ done | Labels synced with strings.xml |
| HTML preview screenshot | ✅ done | `docs/xml-preview-screenshot.png` — all 12 tiles render correctly |

## Completed — Build And Emulator Verification ✅

| Step | Status | Evidence |
|---|---|---|
| Gradle wrapper | ✅ done | `gradlew`, `gradlew.bat`, `gradle/wrapper/*` committed; wrapper uses Gradle `8.9` with extended network timeout |
| Gradle properties | ✅ done | `android.useAndroidX=true`, `org.gradle.java.home=/opt/homebrew/opt/openjdk@17` |
| Native build | ✅ done | `./gradlew assembleDebug` passed with JDK `17.0.19`, Android SDK platform `android-35`, build tools `34.0.0` |
| APK output | ✅ done | `app/build/outputs/apk/debug/app-debug.apk` generated locally |
| Emulator install/render | ✅ done | Installed and launched `com.lenovo.mobilehome/.MainActivity` on `MobileHomePhone_API35` |
| Device profile | ✅ done | `1080 x 2340`, density `440` |
| Screenshot evidence | ✅ done | `docs/android-emulator-phone-default.png` |

## Board Status

| Board | Node | Expo Preview | Formal XML Delivery |
|---|---|---|---|
| Phone home default | `85:3451` | reference exists | ✅ **implemented, build-verified, emulator-rendered** |
| Phone Ask AI | `91:4404` | deferred | deferred until XML default verified |
| Pad home default | `91:5128` | deferred | independent composition pending |

## Migration Sequence Remaining

1. Review the emulator screenshot against Figma `85:3451` and record any
   pixel/geometry drift before final Phone acceptance.
2. Begin Ask AI or Pad only after Phone XML visual review is accepted.
3. Once XML delivery is accepted, relocate Expo to `preview/expo/`.

## Token Source Policy

- Figma variable collection `浏览器色彩 / Browser Color v3.0` is the **single source of truth**.
- Android `res/values/colors.xml` and `res/values-night/colors.xml` are the **formal delivery mappings**.
- Expo `src/theme/tokens.js` is **preview/reference only**.
- Each `colors.xml` entry is annotated with its canonical Figma variable name.
- Do not edit values directly without updating the Figma variable first.
