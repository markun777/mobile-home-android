# Layout Constants

## Phone Home Default

Source node: `571:44695`, `412 x 914`.

| Region | Size / Position | Source |
|---|---|---|
| Header background | `412 x 426`, starts below `36` status region | `140:5044` |
| Logo | `64 x 64`, top `159` | `section/logo` |
| Search entry | `380` wide, top `346` | `section/search-entry` |
| Shortcut grid | `364` wide, top `494`, 5 columns | `section/site-grid` |
| App bottom navigation | `60` high | `section/bottom-nav` |
| System navigation reference | `20` high | `module/system-nav-bar` |

## Responsive Rule

- Phone uses the compact composition represented by the native Android XML
  layout in `app/src/main/res/layout/activity_main.xml`.
- Pad must be built separately from `91:5128`; no stretched or scaled Phone
  fallback is an accepted implementation.
- Both compositions use the shared `Browser Color System v3.0` tokens.

## Verification Notes

- Figma includes status and system navigation references.
- Formal Android XML rendered evidence must state whether system insets are
  OS-owned or drawn by the app before geometry is declared verified.
- Preview geometry is discussion evidence only and cannot close the XML
  verification gate.
