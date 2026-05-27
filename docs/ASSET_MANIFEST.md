# Asset Manifest

## Rules

- Use exported design-owned geometry; do not redraw icons or illustrations
  already available as assets.
- Do not reference expiring Figma asset URLs in runtime code.
- Verify native Android resource packaging and final Android XML render before
  formal handoff. Expo packaging remains preview evidence only.

## Phone Home Assets

| Role | Current Expo Preview Asset | Native XML Delivery Mapping |
|---|---|---|
| Header background | `assets/images/home_header_bg.png` | pending `drawable*` packaging from `140:5044` |
| Brand logo | `assets/icons/brand_logo.png` | pending `drawable*` packaging; `64 x 64` render target |
| Search actions | `assets/icons/search_camera.png`, `search_microphone.png`, `engine_dropdown.png` | pending `drawable*` packaging |
| Shortcut tiles | `assets/icons/shortcut_*.png` | pending `drawable*` packaging |
| Bottom navigation | `assets/icons/nav_*.png` | pending `drawable*` packaging |

## Verification

- `[x]` Assets used by the Expo Phone preview are committed in the project.
- `[x]` Expo web export previously resolved preview assets.
- `[ ]` Assets are mapped into native Android resource packaging.
- `[ ]` XML application package/runtime renders assets on a named
      emulator/device.
