# Android Local Toolchain

This project now uses stable local Android paths instead of the earlier
`/private/tmp/mobile-home-android-toolchain` scratch setup.

## Paths

| Component | Path |
|---|---|
| Android SDK | `/Users/markun/Library/Android/sdk` |
| Android AVD home | `/Users/markun/Library/Android/avd` |
| Phone AVD | `MobileHomePhone_API35` |
| JDK | `/opt/homebrew/opt/openjdk@17` |

## Installed Components

| Component | Version |
|---|---|
| Platform | `android-35` |
| Build tools | `34.0.0` |
| Platform tools | `37.0.0` |
| Emulator | `36.5.11`, official macOS arm64 package |
| System image | `system-images;android-35;google_apis;arm64-v8a`, revision `9` |

## Build

```sh
export JAVA_HOME=/opt/homebrew/opt/openjdk@17
export ANDROID_HOME=/Users/markun/Library/Android/sdk
export ANDROID_SDK_ROOT=/Users/markun/Library/Android/sdk

./gradlew --no-daemon --console=plain assembleDebug
```

## Emulator Verification

```sh
export ANDROID_HOME=/Users/markun/Library/Android/sdk
export ANDROID_SDK_ROOT=/Users/markun/Library/Android/sdk
export ANDROID_AVD_HOME=/Users/markun/Library/Android/avd

$ANDROID_HOME/emulator/emulator \
  -avd MobileHomePhone_API35 \
  -no-snapshot \
  -no-boot-anim \
  -no-metrics \
  -gpu swiftshader_indirect
```

Verified device profile:

- Size: `1080x2340`
- Density: `440`
- Screenshot: `docs/android-emulator-phone-57144695.png`

## Notes

- `cmdline-tools;latest` was replaced because the migrated copy only contained
  a broken `sdkmanager` script without its supporting libraries.
- The Android 35 arm64 system image was installed from the official
  `arm64-v8a-35_r09.zip`; the previous migrated system image directory was an
  incomplete 14MB cache without `system.img`.
- The emulator must be the official macOS arm64 package
  `emulator-darwin_aarch64-15261927.zip`. The `darwin_x64` package is not the
  right runtime for this Apple Silicon local setup.
