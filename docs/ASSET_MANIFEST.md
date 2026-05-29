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
| Header background | `assets/images/home_header_bg.png` | packaged as `@drawable/home_header_bg`; not rendered after design review removed the header image |
| Brand logo | `assets/icons/brand_logo.png` | `@drawable/brand_logo`, rendered at `64 x 64` |
| Search actions | `assets/icons/search_camera.png`, `search_microphone.png`, `engine_dropdown.png` | `@drawable/search_camera`, `@drawable/search_microphone`, `@drawable/engine_dropdown` |
| Shortcut tiles | `assets/icons/shortcut_*.png` | `@drawable/shortcut_*` |
| Bottom navigation | `assets/icons/nav_*.png` | `@drawable/nav_*`; formal XML currently uses recommend, video, home, reading, and menu |
| XML shape drawables | n/a | `bg_search_mode_tab`, `bg_tab_active`, `bg_engine_selector`, `bg_nav_handle` |

## Verification

- `[x]` Assets used by the Expo Phone preview are committed in the project.
- `[x]` Expo web export previously resolved preview assets.
- `[x]` Assets are mapped into native Android resource packaging.
- `[x]` XML application package/runtime renders assets on a named
      emulator/device.
