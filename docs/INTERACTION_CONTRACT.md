# Interaction Contract

## Current Scope

| Surface / Action | Source | Preview Status | XML Delivery Status |
|---|---|---|
| Phone default initial render | `571:44695` | retired | active; build and emulator render verified |
| Ask AI mode | `571:46559` | retired | parked; retained XML/resources, not launched |
| Pad initial render | `91:5128` | retired | separate thread/branch pending |

## Boundaries

- Do not add unconfirmed state or navigation transitions.
- Android XML back/IME/system-bar behavior must be verified on device when an
  interactive board enters scope.
- Phone completion does not imply Pad completion.
- Preview behavior cannot be substituted for Android XML interaction evidence.
