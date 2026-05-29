# Mobile Home Android

Native Android XML delivery project for the Phone and Pad mobile homepage
redesign.

## Delivery Decision

Confirmed on `2026-05-27`:

- Formal delivery target: Android Views with Kotlin and XML layout/resources.
- Preview/reference surface: the existing React Native + Expo SDK 56 screen.
- The Expo implementation is retained for rapid visual comparison only; it is
  not code that the XML receiving team can merge as the final deliverable.
- Canonical design baseline: `Browser Color System v3.0` (`106:3910`) and
  `浏览器色彩 / Browser Color v3.0`.

## Current State

- Phone default XML implementation exists in `app/src/main/res/layout/`
  from Figma node `85:3451`.
- `./gradlew assembleDebug` passes with JDK 17 and the Android SDK.
- The debug APK has been installed and rendered on
  `MobileHomePhone_API35` (`1080 x 2340`, density `440`); evidence is recorded
  in `docs/android-emulator-phone-default.png`.
- Pad remains a separately composed surface from node `91:5128`; it is not a
  scaled Phone layout.
- The current Expo files remain at repository root until the migration step
  moves them under `preview/expo/`.

## Build

Use JDK 17. On this machine the project pins:

```sh
./gradlew assembleDebug
```

If Android SDK discovery is not configured globally, pass `ANDROID_HOME` or
`ANDROID_SDK_ROOT` to a local SDK that contains platform `android-35` and build
tools `34.0.0`.

## Target Repository Shape

```text
app/src/main/                 # Formal Android XML delivery implementation
  java/...
  res/layout/                 # Phone layout
  res/layout-sw600dp/         # Pad layout/composition
  res/values/                 # Light semantic tokens and dimensions
  res/values-night/           # Dark semantic tokens
  res/drawable*/              # Packaged design assets
preview/expo/                 # Visual preview/reference only
docs/                         # Figma sources, token contract and evidence
```

Read `docs/PRODUCT_RESTORATION_PREFLIGHT.md` and
`docs/XML_DELIVERY_TRANSITION.md` before adding delivery implementation.
