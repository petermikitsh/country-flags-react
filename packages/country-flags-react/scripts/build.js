#!/usr/bin/env node

const path = require("path");
const fs = require("mz/fs");
const { default: svgr } = require("@svgr/core");
const prettier = require("prettier");
const babel = require("@babel/core");

(async () => {
  const distFolder = path.resolve(__dirname, "..", "dist");
  const flagsFolder = path.resolve(distFolder, "flags");

  const folders = [distFolder, flagsFolder];

  folders.forEach(async (folder) => {
    if (!(await fs.exists(folder))) {
      await fs.mkdir(folder);
    }
  });

  const iconPkgJson = require.resolve("flag-icon-css/package.json");
  const iconRootDir = path.dirname(iconPkgJson);
  const flagsDir = path.resolve(iconRootDir, "flags", "1x1");
  const flagFilenamesWithDupes = await fs.readdir(flagsDir);
  const isoFlagFilenames = flagFilenamesWithDupes.filter((filename) =>
    filename.match(/^[a-zA-Z]{2}.svg/)
  );

  /*
   * Create SVG React components.
   */
  isoFlagFilenames.map(async (flagFilename) => {
    const flagfullPath = path.resolve(flagsDir, flagFilename);
    const flagFileContents = await fs.readFile(flagfullPath);
    const flagIsoCode = /[a-zA-Z]{2}/.exec(flagFilename)[0].toUpperCase();
    const flagWritePath = path.resolve(
      distFolder,
      "flags",
      `${flagIsoCode}.js`
    );
    const jsCode = await svgr(
      flagFileContents,
      {
        svgProps: {
          focusable: false,
          height: "24px",
          width: "24px",
        },
        plugins: [
          "@svgr/plugin-svgo",
          "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],
      },
      { componentName: flagIsoCode }
    );
    const { code } = await babel.transformAsync(jsCode, {
      plugins: [
        "@babel/plugin-transform-react-jsx",
        "@babel/plugin-transform-runtime",
      ],
    });
    return await fs.writeFile(flagWritePath, code);
  });

  /*
   * Create TypeScript interface.
   */
  const typedefFilepath = path.resolve(distFolder, "index.d.ts");
  const isoCodesLower = isoFlagFilenames.map((filename) =>
    /[a-zA-Z]{2}/.exec(filename)[0].toLowerCase()
  );
  const isoCodesUpper = isoCodesLower.map((code) => code.toUpperCase());
  const isoLowerAndUpper = [...isoCodesLower, ...isoCodesUpper];

  await fs.writeFile(
    typedefFilepath,
    `
import * as React from 'react';
interface FlagProps {
  countryCode: ${isoLowerAndUpper.map((code) => `"${code}"`).join(" | ")};
  size: number;
  fallback: React.ReactNode;
}
export declare const Flag: React.FC<FlagProps>;
  `
  );

  /*
   * Create `Flag` react component.
   */
  const flagCode = `
import * as React from 'react';

const countryCodes = [${isoCodesUpper.map((code) => `"${code}"`).join(", ")}];

const countryCodeFns = {
  ${isoCodesUpper
    .map((code) => `${code}: () => import('./flags/${code}.js')`)
    .join(",")}
};

function Flag(props) {
  const { countryCode, size, fallback } = props;
  const upperCountryCode = countryCode.toUpperCase();
  const [CountryFlag, setCountryFlag] = React.useState(null);
  const invalidCountry = countryCodes.indexOf(upperCountryCode) === -1;

  React.useEffect(() => {
    if (!invalidCountry) {
      countryCodeFns[upperCountryCode]().then((flag) => {
        setCountryFlag(() => flag.default);
      });
    }
  }, [countryCode]);

  

  if (invalidCountry || !CountryFlag) {
    return fallback || null;
  }

  if (size) {
    return <CountryFlag height={size} width={size} />;
  }

  return <CountryFlag />;
}

export default Flag;
  `;
  const { code: babeledFlagCode } = await babel.transformAsync(flagCode, {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
          targets: "> 0.25%, not dead",
        },
      ],
    ],
    plugins: [
      "@babel/plugin-transform-react-jsx",
      "@babel/plugin-transform-runtime",
    ],
  });
  const formattedBabeledFlagCode = prettier.format(babeledFlagCode, {
    parser: "babel",
    trailingComma: "none",
  });
  const indexFilepath = path.resolve(distFolder, "index.js");
  return await fs.writeFile(indexFilepath, formattedBabeledFlagCode);
})();
