# country-flags-react

## ✨ [Demo Link] ✨

- 1:1 aspect ratio flags
- Zero custom webpack config
- Lazily loads only the icons you need (via dynamic `import()`)
- TypeScript definitions

## Usage

```jsx
import { Flag } from "country-flags-react";

const MyApp = () => <Flag countryCode="US" size={48} />;
```

| Prop Name   | Type            | Description                                       |
| ----------- | --------------- | ------------------------------------------------- |
| countryCode | string          | [ISO 3166-1-alpha-2] country code                 |
| size        | number          | Dimensions of flag, in pixels                     |
| fallback    | React.ReactNode | Component rendered when no valid country provided |

## Distribution

The output bundle is ES5 code with CommonJS `require()` syntax and dynamic `import()` syntax for loading flags.

## Prior Art

Flags used in this project are sourced from https://github.com/lipis/flag-icon-css.

---

[demo link]: https://petermikitsh.github.io/country-flags-react/
[iso 3166-1-alpha-2]: https://www.iso.org/obp/ui/#search/code/
