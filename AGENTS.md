# Mobile Home Android Agent Guide

## Product Boundary

Restore the Android browser homepage from the Figma source of truth for an
Android XML receiving team.

- Figma file: `tJamKVuAm0fELLoddNqQ9A / 移动端首页改版`
- Phone home source: `571:44695`（首页，412×914，主要交付板）
- Phone Ask AI source: `571:46559`（问AI页面，布局已初始化）
- Pad source: `91:5128`（待开始）
- Specification page / board: `规范 · Browser Color v3.0` /
  `Browser Color System v3.0` (`106:3910`)
- Canonical color collection: `浏览器色彩 / Browser Color v3.0`
  (`78` color variables, `浅色 Light` and `深色 Dark`)

Phone and Pad are separate compositions. Never treat Pad as a scaled Phone
implementation.

## Implementation Profile

- Formal delivery runtime: native Android Views with Kotlin and XML resources.
- Delivery token format: semantic resources in `res/values/` and
  `res/values-night/`; XML must reference tokens instead of scattering raw UI
  colors.
- Expected layout targets: Phone in `res/layout/`, Pad composition in
  `res/layout-sw600dp/` or a separately approved tablet resource variant.
- Preview runtime: retired. The earlier React Native + Expo scaffold has been
  removed from this repository; native Android render evidence is canonical.
- Web preview artifacts may support discussion only if explicitly recreated,
  but they cannot be recorded as verification of the formal XML implementation.

## Before Editing

1. Run `git status --short --branch`.
2. Read `docs/PRODUCT_RESTORATION_PREFLIGHT.md`,
   `docs/XML_DELIVERY_TRANSITION.md`, `docs/FIGMA_BOARD_STATE_MAP.md`,
   `docs/TOKEN_SNAPSHOT.md`, and `docs/PROGRESS.md`.
3. Check open PRs and issue `#1` before claiming a board or migration step.
4. Work on a branch and open a PR; do not silently overwrite another agent's
   in-progress work.

## Required Gates

- Use `Browser Color v3.0` for both Phone and Pad unless an approved exception
  is recorded in `docs/TOKEN_SNAPSHOT.md`.
- Keep any recreated preview explicitly labeled preview/reference; do not
  extend it as though it were formal XML delivery work.
- Implement the native project scaffold and Android resource token mapping
  before claiming a formal board implementation.
- Export design-owned assets before wiring XML or preview UI to them.
- Implement board by board; do not start the next XML board before the current
  board has source, asset, build, and Android rendered-verification notes.
- Do not invent state, interaction, or layout content without a Figma source
  node or explicit approval.
- Remove temporary verification UI before product handoff while preserving
  docs, tests, and reusable verification scripts.

## Repository Status（2026-06-02）

- **Repo visibility**: 已改为公开（PUBLIC），可以交给其他人接手继续开发。
- **Phone home**（`571:44695`）: 布局基本对齐 Figma，底部导航/名站网格/搜索卡/Logo/页签管理均已实现并验证。
- **Phone Ask AI**（`571:46559`）: 初始 XML 布局已完成（`activity_ask_ai.xml`），待视觉对齐。
- **Pad**: 未开始。
- **Active branch**: `phone-xml-layout`（PR #4）。
- **模拟器验证**: `MobileHomePhone_API35`, Android 35, 1080×2340, density 440dpi。
- **SDK/AVD 路径**: `~/Library/Android/sdk` / `~/Library/Android/avd`。
- **Java**: JDK 17（`/opt/homebrew/opt/openjdk@17`）。

## 关键规范（接手者必读）

1. **全部切图从 Figma 导出，禁止手绘/占位**: 所有图标必须从 Figma 组件页导出 PNG，四套密度（mdpi/hdpi/xhdpi/xxhdpi），不能用手写 SVG/emoji/文字占位。
2. **Figma 变量 → Android Token 映射**: 见 `docs/TOKEN_SNAPSHOT.md`，每个 `colors.xml` 条目都标注了 Figma 变量名。
3. **底部导航图标**: 来自 Figma 组件页 `85:3763`（`item/nav-tab/*`），28dp×28dp 框架，不是 24dp。
4. **快捷方式图标**: 来自 Figma 组件页 `85:3512`（`item/site/*`），36dp×36dp。
5. **投影**: MaterialCardView `cardElevation="6dp"` + custom `outlineSpotShadowColor` / `outlineAmbientShadowColor`。
6. **系统 Insets**: `WindowInsetsCompat` 在 `MainActivity` 中处理底部导航栏高度。

## Verification

For each formally delivered XML board:

1. Build the native Android application.
2. Install and render the screen on a named Android emulator/device.
3. Record screenshot evidence, device profile, system inset handling, packaged
   resource resolution, and source drift in `docs/PROGRESS.md` and issue `#1`.
