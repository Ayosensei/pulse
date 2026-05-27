# SwiftyEx Pulse — Figma Handoff Spec

> Design reference. All values here should be applied consistently across all 6 screens after importing from Stitch.

---

## Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#0D0D0D` | App background |
| `--color-surface` | `#1A1A1A` | Cards, input fields, chat bubbles |
| `--color-surface-2` | `#242424` | Elevated cards, modals |
| `--color-border` | `#2E2E2E` | Card borders, dividers |
| `--color-purple-primary` | `#7C3AED` | CTA buttons, active states, accents |
| `--color-purple-light` | `#9D6FF0` | Hover states, icons, sparklines |
| `--color-purple-glow` | `rgba(124, 58, 237, 0.15)` | Card glow, active card backgrounds |
| `--color-purple-muted` | `rgba(124, 58, 237, 0.2)` | Chip outlines, badge backgrounds |
| `--color-text-primary` | `#FFFFFF` | Headings, primary labels |
| `--color-text-secondary` | `#A0A0A0` | Subtitles, muted labels, timestamps |
| `--color-text-tertiary` | `#5A5A5A` | Placeholder text, disabled states |
| `--color-success` | `#22C55E` | Positive rate change, HOT signal |
| `--color-warning` | `#EAB308` | WAIT signal |
| `--color-danger` | `#EF4444` | Negative rate change, HOLD signal |
| `--color-user-bubble` | `#7C3AED` | User chat message background |

---

## Typography

**Font Family:** Inter (primary) — import from Google Fonts
**Fallback:** SF Pro Display, system-ui

| Style | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `heading-xl` | 24px | 700 | 1.2 | Screen titles |
| `heading-lg` | 20px | 700 | 1.3 | Card titles, coin names |
| `heading-md` | 17px | 600 | 1.4 | Section labels |
| `body-lg` | 15px | 400 | 1.5 | Body text, AI responses |
| `body-md` | 13px | 400 | 1.5 | Secondary info, card labels |
| `body-sm` | 11px | 400 | 1.4 | Muted text, timestamps, captions |
| `label` | 12px | 600 | 1 | Badges, chips, button labels |
| `rate-display` | 28px | 700 | 1 | Large rate numbers on Rate Feed |
| `mono` | 13px | 500 | 1.4 | Rate values in cards (use Inter Mono or JetBrains Mono) |

---

## Spacing Scale

Use an 8px base grid throughout.

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Tight gaps between inline elements |
| `space-2` | 8px | Inner padding for chips, badges |
| `space-3` | 12px | Small component padding |
| `space-4` | 16px | Standard card padding |
| `space-5` | 20px | Section gaps |
| `space-6` | 24px | Large section padding |
| `space-8` | 32px | Screen-level top/bottom padding |

**Screen horizontal margin:** 16px on both sides (left and right)

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 8px | Chips, badges, small inputs |
| `radius-md` | 12px | Cards, input fields |
| `radius-lg` | 16px | Large cards, bottom sheets |
| `radius-xl` | 20px | CTA buttons |
| `radius-full` | 9999px | Pills, toggles, avatar circles |

---

## Elevation / Shadows

| Level | Value | Usage |
|---|---|---|
| `shadow-card` | `0 2px 12px rgba(0,0,0,0.4)` | Standard cards |
| `shadow-glow` | `0 0 20px rgba(124,58,237,0.2)` | Active/highlighted cards |
| `shadow-button` | `0 4px 16px rgba(124,58,237,0.35)` | Purple CTA buttons |

---

## Component Specs

### Cards
- Background: `--color-surface`
- Border: 1px solid `--color-border`
- Border radius: `radius-md` (12px)
- Padding: `space-4` (16px)
- Active/highlighted card: add `shadow-glow` and border color `--color-purple-light`

### CTA Button (Primary)
- Background: `--color-purple-primary`
- Text: `--color-text-primary`, `label` style, 15px, weight 600
- Height: 52px
- Border radius: `radius-xl` (20px)
- Shadow: `shadow-button`
- Full width with 16px horizontal margin

### Secondary Button / Pill
- Background: `--color-purple-muted`
- Border: 1px solid `--color-purple-primary`
- Text: `--color-purple-light`
- Height: 40px
- Border radius: `radius-full`

### Input Field
- Background: `--color-surface`
- Border: 1px solid `--color-border`
- Focus border: 1px solid `--color-purple-primary`
- Border radius: `radius-md` (12px)
- Height: 52px
- Padding: 0 16px
- Text: `body-lg`, `--color-text-primary`
- Placeholder: `--color-text-tertiary`

### Coin/Feature Chip (Selectable)
- Default: border 1px solid `--color-border`, background transparent
- Selected: background `--color-purple-primary`, border `--color-purple-primary`
- Border radius: `radius-sm` (8px)
- Padding: 8px 12px
- Text: `label`, white when selected, `--color-text-secondary` when default

### Signal Badge
- `🟢 HOT` — background `rgba(34,197,94,0.15)`, text `--color-success`
- `🟡 WAIT` — background `rgba(234,179,8,0.15)`, text `--color-warning`
- `🔴 HOLD` — background `rgba(239,68,68,0.15)`, text `--color-danger`
- Border radius: `radius-sm` (8px)
- Padding: 4px 8px
- Text: `label`, 11px, weight 600

### Toggle Switch
- Track ON: `--color-purple-primary`
- Track OFF: `--color-border`
- Thumb: `#FFFFFF`
- Size: 44px × 24px

### Chat Bubbles
- User (right): background `--color-user-bubble`, border radius 16px 16px 4px 16px
- AI (left): background `--color-surface`, border 1px solid `--color-border`, border radius 16px 16px 16px 4px
- Max width: 80% of screen width
- Padding: 12px 14px

### Sparkline Chart
- Color: `--color-purple-light`
- Height: 32px
- Width: 80px
- No axes, no labels — purely visual

---

## Screen-by-Screen Notes

### Screen 1 — Onboarding
- Vertically centered content
- Coin chip grid: 2 columns, `space-3` gap
- "Get Started" button pinned to bottom with `space-8` bottom padding
- Add a small SwiftyEx Pulse logo/wordmark at the very top

### Screen 2 — Home
- Greeting card: use `shadow-glow`, add a very subtle purple gradient overlay (left to right, 10% opacity)
- Robot avatar: 40×40px circle, purple background
- Quick action row: 3 equal-width pill buttons, `space-3` gap between
- Coin cards: side by side in a 2-column grid

### Screen 3 — Alert Manager
- Alert cards: left edge accent bar in `--color-purple-primary`, 3px wide
- "Add New Alert" card: dashed border 1.5px `--color-border`, centered content
- Triggered section header: `body-sm`, `--color-text-tertiary`, uppercase, letter-spacing 0.08em
- Triggered cards: reduce opacity to 60%, swap purple accents for grey

### Screen 4 — AI Chat
- Header orb: 32×32px circle, animated purple gradient (note for dev: CSS animation)
- "Powered by AI" label: centered below AI bubble, `body-sm`, `--color-text-tertiary`
- Input bar: sticky to bottom, `space-4` padding, background `--color-surface-2`
- Send button: 36×36px circle, `--color-purple-primary` background, white arrow icon

### Screen 5 — Rate Pulse Feed
- Top card gets `shadow-glow` to indicate it's the most relevant pair
- Rate number: `rate-display` style (28px bold)
- Change indicator: green/red arrow icon + percentage, `body-md`
- Sparkline: right-aligned inside card
- Signal badge: bottom-right of card
- Signal reason text: below badge, `body-sm`, `--color-text-secondary`, max 2 lines

### Screen 6 — Smart Swap
- Swap pair selector: centered, large — "USDT" and "NGN" in `heading-lg`, purple arrow icon between
- AI recommendation card: left border accent 3px `--color-purple-primary`, background `--color-surface-2`
- Confidence bar: segmented, 5 segments, filled segments in `--color-purple-primary`, empty in `--color-border`
- "Arm Smart Swap ⚡" button: `shadow-button`, lightning bolt emoji before label
- Disclaimer text: `body-sm`, `--color-text-tertiary`, centered below button

### Screen 7 — Assets
- Total balance card: full-width, purple gradient background, `shadow-glow`
- "Total Balance" label: `body-md`, `--color-text-secondary`
- Balance number: `rate-display` (28px bold), white
- 24h change: `body-md`, `--color-success` with up arrow icon
- Wallet list: stacked cards, `space-3` gap between each
- Each wallet card: coin icon (32×32px) on left, coin name + network label in `body-lg` + `body-sm`, balance right-aligned in `heading-md`, NGN equivalent in `body-sm` `--color-text-secondary`
- Change badge: small pill, green/red background at 15% opacity, matching text color
- Send/Receive buttons: side by side, equal width, outlined purple pills, `body-sm` weight 600, height 36px

### Screen 8 — Profile & Settings
- Profile section: centered, avatar 72×72px circle with purple background + white initials in `heading-xl`
- Display name: `heading-lg`, white, centered
- Username handle: `body-md`, `--color-text-secondary`, centered
- Edit Profile button: outlined purple pill, `label` style, centered, width auto
- Section headers: `body-sm`, `--color-text-tertiary`, uppercase, letter-spacing 0.1em, `space-5` top margin
- Settings rows: height 52px, `space-4` horizontal padding, subtle bottom border `--color-border`
- Row icon: 20×20px, `--color-purple-light`, left-aligned
- Row label: `body-lg`, `--color-text-primary`
- Toggle rows: purple toggle on right (use toggle component spec)
- Badge rows (KYC): small pill badge right-aligned, green background 15% opacity, `--color-success` text
- Chevron rows: `--color-text-tertiary` chevron icon, right-aligned
- Sign Out row: label and icon both in `--color-danger`

### Screen 9 — Bottom Navigation Bar
- Height: 64px, background `--color-bg`, top border 1px `--color-border`
- Five tabs evenly spaced: Home, Assets, Rates, Swap, Profile
- Tab icon size: 24×24px
- Tab label: `body-sm` (10px), weight 500, below icon with 4px gap
- Active tab: icon + label in `--color-purple-primary`, small 4×4px circle dot indicator below label
- Inactive tabs: icon + label in `--color-text-tertiary`
- Bottom safe area: add 16px padding below bar for devices with home indicators
- This component should be created as a reusable Figma component and placed on every main screen frame

---

*SwiftyEx Pulse — Figma Handoff Spec | SwiftyEx Hackfest 2026*
