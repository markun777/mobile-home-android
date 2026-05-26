# Interaction Contract

## Current Scope

| Surface / Action | Source | Implementation Status |
|---|---|---|
| Phone default initial render | `85:3451` | implemented |
| Ask AI mode | `91:4404` | mapped; deferred pending default-screen verification |
| Pad initial render | `91:5128` | mapped; separate composition pending |

## Boundaries

- Do not add unconfirmed state or navigation transitions.
- Android back/IME/system-bar behavior must be verified on device when an
  interactive board enters scope.
- Phone completion does not imply Pad completion.
