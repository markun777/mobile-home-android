# Progress

Last updated: `2026-05-27`

## Current Status

`Delivery profile switched to Android XML; Expo retained as preview/reference; native migration pending`

## Decision Sync

- The receiving team requires Android XML delivery.
- Formal implementation is now defined as Kotlin + Android Views/XML
  resources in this repository.
- The existing React Native + Expo SDK 56 Phone screen is preserved only as a
  rapid visual preview/reference and must not be represented as mergeable XML
  product code.
- `Browser Color System v3.0` remains the only active design/token baseline
  for both Phone and Pad.

## Completed Evidence Retained

- Phone source board is mapped to Figma node `85:3451`.
- Pad source board is mapped to Figma node `91:5128` as an independent
  composition.
- Existing Expo Phone preview wires exported assets and v3.0 mappings.
- Expo web export previously succeeded as preview/bundle evidence only.

## Board Status

| Board | Node | Expo Preview | Formal XML Delivery |
|---|---|---|---|
| Phone home default | `85:3451` | reference implementation exists | not started |
| Phone Ask AI | `91:4404` | deferred | blocked until XML default verification |
| Pad home default | `91:5128` | deferred | independent composition pending |

## Migration Sequence

1. Isolate the existing Expo implementation under `preview/expo/` without
   discarding its preview evidence.
2. Create the native Android Views/XML application structure in the same
   repository.
3. Convert the v3.0 semantic contract to Android resource XML and document any
   exception.
4. Package existing design assets for native Android resource resolution.
5. Implement and verify the Phone default XML board on a named emulator/device.
6. Begin Ask AI or Pad only after Phone XML evidence is recorded.

## Next Gate

Create the native XML delivery scaffold and token resource mapping while
keeping the Expo preview clearly separated from formal acceptance evidence.
