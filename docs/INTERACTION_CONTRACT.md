# Interaction Contract

## Current Scope

| Surface / Action | Source | Expo Preview Status | XML Delivery Status |
|---|---|---|
| Phone default initial render | `85:3451` | reference implemented | not started |
| Ask AI mode | `91:4404` | mapped; deferred | deferred pending XML default verification |
| Pad initial render | `91:5128` | mapped; deferred | separate composition pending |

## Boundaries

- Do not add unconfirmed state or navigation transitions.
- Android XML back/IME/system-bar behavior must be verified on device when an
  interactive board enters scope.
- Phone completion does not imply Pad completion.
- Expo behavior cannot be substituted for Android XML interaction evidence.
