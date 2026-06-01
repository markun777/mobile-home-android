# Progress

Last updated: `2026-06-01`

## Current Status

`Phone default XML updated to Figma 571:44695; stable local Android SDK/AVD migrated; Gradle build, emulator install, app launch, and screenshot verified`

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

## Completed — Phase 5 (Figma 571:44695 Update) ✅

| Step | Status | Notes |
|---|---|---|
| Bottom nav icon+label | ✅ done | 主页/资讯/视频/小说/菜单，LinearLayout vertical per tab |
| Tab manager button | ✅ done | Top-right 28×28dp, `ic_tab_manager` drawable |
| Search placeholder update | ✅ done | 告诉我想要了解的内容 → 输入关键信息 |
| AI tab label update | ✅ done | 问AI → AI搜索 |
| Search card resize | ✅ done | 380dp wide (16dp margin), stroke 1dp, input 50dp/14sp |
| Shortcut grid reorder + 短剧 | ✅ done | Row1: 书签/历史记录/免费小说/短剧/小游戏 |
| Engine selector removed | ✅ done | Toolbar simplified to mode tab + camera/voice |
| New drawables | ✅ done | ic_nav_home/news/video/novel/menu, ic_tab_manager, nav_home_v2, nav_news, shortcut_drama, tab_manager_bg/icon |
| Commit + push | ✅ done | `8705764` on `phone-xml-layout` |

## Completed — Stable Android Toolchain Migration + Reverification ✅

| Step | Status | Evidence |
|---|---|---|
| Stable SDK path | ✅ done | `/Users/markun/Library/Android/sdk` |
| Stable AVD path | ✅ done | `/Users/markun/Library/Android/avd/MobileHomePhone_API35.avd` |
| commandline-tools | ✅ done | Replaced incomplete `sdkmanager` with full `cmdline-tools;latest` |
| platform-tools | ✅ done | Installed official `platform-tools` `37.0.0` with package metadata |
| emulator | ✅ done | Installed official arm64 emulator `36.5.11` (`emulator-darwin_aarch64-15261927.zip`) |
| system image | ✅ done | Installed Android 35 Google APIs `arm64-v8a` revision `9` (`3.8G`) |
| AVD recreation | ✅ done | `MobileHomePhone_API35`, Pixel 5 profile, `1080 x 2340`, density `440` |
| Native build | ✅ done | `./gradlew --no-daemon --console=plain assembleDebug` passes |
| Resource fix | ✅ done | Replaced invalid SVG/`<line>` drawables with Android `vector` resources |
| Emulator install/render | ✅ done | APK installed and `com.lenovo.mobilehome/.MainActivity` launched |
| Screenshot evidence | ✅ done | `docs/android-emulator-phone-57144695.png` |

## Board Status

| Board | Node | Expo Preview | Formal XML Delivery |
|---|---|---|---|
| Phone home default | `571:44695` | reference exists | ✅ **updated, built, emulator verified** |
| Phone Ask AI | `91:4404` | reference exists | ✅ **initial XML layout, build passes, emulator verify pending** |
| Pad home default | `91:5128` | deferred | independent composition pending |
| Pad home default | `91:5128` | deferred | independent composition pending |

## Migration Sequence Remaining

1. Visual review against Figma `571:44695` — record any pixel/geometry drift.
2. Begin Ask AI or Pad only after Phone XML visual review accepted.
3. Once XML delivery accepted, relocate Expo to `preview/expo/`.

## Token Source Policy

- Figma variable collection `浏览器色彩 / Browser Color v3.0` is the **single source of truth**.
- Android `res/values/colors.xml` and `res/values-night/colors.xml` are the **formal delivery mappings**.
- Expo `src/theme/tokens.js` is **preview/reference only**.
- Each `colors.xml` entry is annotated with its canonical Figma variable name.
- Do not edit values directly without updating the Figma variable first.
