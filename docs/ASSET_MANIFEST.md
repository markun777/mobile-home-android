# Asset Manifest

## Rules

- Use exported design-owned geometry; do not redraw icons or illustrations
  already available as assets.
- Do not reference expiring Figma asset URLs in runtime code.
- Verify packaged asset paths in an export/build and final Android render.

## Phone Home Assets

| Role | Local Asset | Current Use |
|---|---|---|
| Header background | `assets/images/home_header_bg.png` | Phone header artwork from `140:5044` |
| Brand logo | `assets/icons/brand_logo.png` | `64 x 64` logo |
| Search actions | `assets/icons/search_camera.png`, `search_microphone.png`, `engine_dropdown.png` | Search card controls |
| Shortcut tiles | `assets/icons/shortcut_*.png` | Site grid |
| Bottom navigation | `assets/icons/nav_*.png` | Five navigation tabs |

## Verification

- `[x]` Assets used by Phone screen are committed locally in the project.
- `[x]` Expo web export resolves the assets.
- `[ ]` Android package/runtime renders assets on a named emulator/device.
