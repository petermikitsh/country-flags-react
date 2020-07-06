#!/usr/bin/env node

const path = require("path");
const fs = require("mz/fs");
const { default: svgr } = require("@svgr/core");

/* Default template uses es6 syntax.
 * https://react-svgr.com/docs/custom-templates/
 */
const es5Template = function (
  { template },
  opts,
  { componentName, props, jsx }
) {
  const plugins = ["jsx"];
  if (opts.typescript) {
    plugins.push("typescript");
  }
  const typeScriptTpl = template.smart({ plugins });
  return typeScriptTpl.ast`const React = require('react');
function ${componentName}(${props}) {
  return ${jsx};
}
module.exports = ${componentName};
  `;
};

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
  const flagFilenames = await fs.readdir(flagsDir);
  const isoFlagFilenames = flagFilenames.filter((filename) =>
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
    svgr(
      flagFileContents,
      {
        icon: true,
        svgProps: {
          focusable: false,
        },
        template: es5Template,
        plugins: [
          "@svgr/plugin-svgo",
          "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],
      },
      { componentName: flagIsoCode }
    ).then((jsCode) => {
      fs.writeFile(flagWritePath, jsCode);
    });
  });

  const isoCodesLower = flagFilenames.map((filename) =>
    /[a-zA-Z]{2}/.exec(filename)[0].toLowerCase()
  );
  const isoCodesUpper = isoCodesLower.map((code) => code.toUpperCase());
  const isoLowerAndUpper = [...isoCodesLower, ...isoCodesUpper];
  const typedefFilepath = path.resolve(distFolder, "index.d.ts");

  await fs.writeFile(
    typedefFilepath,
    `
import * as React from 'react';
interface FlagProps {
  countryCode: ${isoLowerAndUpper.map((code) => `"${code}"`).join(" | ")};
  size: number;
  fallback: React.FC;
}
export declare const Flag: React.FC<FlagProps>;
  `
  );
})();
