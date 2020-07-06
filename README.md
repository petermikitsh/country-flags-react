# country-flags-react

- 1:1 aspect ratio flags
- Zero custom webpack config
- Lazily loads only the icons you need (via dynamic `import`)
- TypeScript definitions

## Usage

```tsx
import { Flag } from 'country-flags-react';

const MyApp () => (
  <Flag countryCode="US" size={48} />
);
```

| Prop Name   | Type     | Description                                       |
| ----------- | -------- | ------------------------------------------------- |
| countryCode | string   | [ISO 3166-1-alpha-2] country code                 |
| size        | number   | Dimensions of flag, in pixels                     |
| fallback    | React.FC | Component rendered when no valid country provided |

## Prior Art

Flags used in this project are sourced from https://github.com/lipis/flag-icon-css.

---

[iso 3166-1-alpha-2]: https://www.iso.org/obp/ui/#search/code/
