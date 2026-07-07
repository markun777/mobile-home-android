# Mobile Home Android

Native Android XML delivery project for the Phone and Pad mobile homepage
redesign.

## Delivery Decision

Confirmed on `2026-05-27`:

- Formal delivery target: Android Views with Kotlin and XML layout/resources.
- Preview/reference surface: retired. The earlier Expo scaffold was removed
  from this repository after XML delivery became the only handoff path.
- Native Android emulator evidence is the canonical verification surface.
- Canonical design baseline: `Browser Color System v3.0` (`106:3910`) and
  `浏览器色彩 / Browser Color v3.0`.

## Current State

- Phone default XML implementation exists in `app/src/main/res/layout/`
  from Figma node `571:44695`.
- `MainActivity` launches the Phone home screen. Ask AI XML/resources are kept
  in the repo as parked work, but they are not the active app entry point.
- `./gradlew assembleDebug` passes with JDK 17 and the stable local Android
  SDK at `/Users/markun/Library/Android/sdk`.
- The debug APK has been installed and rendered on
  `MobileHomePhone_API35` (`1080 x 2340`, density `440`); evidence is recorded
  in `android-vm/screenshots/android-emulator-phone-57144695.png`.
- Pad remains a separately composed surface from node `91:5128`; handle it in
  a separate thread/branch, not as a scaled Phone layout.
- Active collaboration branch/PR: `phone-xml-layout` /
  https://github.com/markun777/mobile-home-android/pull/4.

## Build

Use JDK 17. On this machine the project pins:

```sh
export JAVA_HOME=/opt/homebrew/opt/openjdk@17
export ANDROID_HOME=/Users/markun/Library/Android/sdk
export ANDROID_SDK_ROOT=/Users/markun/Library/Android/sdk
./gradlew assembleDebug
```

The local verification emulator is `MobileHomePhone_API35`, stored under
`/Users/markun/Library/Android/avd`. It uses Android API 35 Google APIs
`arm64-v8a`, `1080 x 2340`, density `440`.

For more local setup detail, see `android-vm/docs/ANDROID_LOCAL_TOOLCHAIN.md`.

## Target Repository Shape

```text
app/src/main/                 # Formal Android XML delivery implementation
  java/...
  res/layout/                 # Phone layout
  res/layout-sw600dp/         # Future Pad layout/composition
  res/values/                 # Light semantic tokens and dimensions
  res/values-night/           # Dark semantic tokens
  res/drawable*/              # Packaged design assets
docs/                         # Figma sources, token contract and evidence
android-vm/                   # Local Android SDK/AVD notes and render evidence
```

Read `docs/PRODUCT_RESTORATION_PREFLIGHT.md` and
`docs/XML_DELIVERY_TRANSITION.md` before adding delivery implementation.
