const fs = require("fs");
const _ = require("lodash");

const data = require("./variableFigma.json");

const COLOR_FIELDS = {
  white: "white",
  black: "black",
  neutral: "neutral",
  primary: "primary",
  error: "error",
  warning: "warning",
  success: "success",
};

const SPACING_FIELD = "spacing";

const cssVariable = {};
const processedData = {
  theme: {
    colors: {},
    spacing: {},
  },
};

Object.entries(COLOR_FIELDS).forEach(([field, keyword]) => {
  if (data[field]) {
    Object.entries(data[field])
      .sort()
      .forEach(([key, value]) => {
        const cssColorName = `--${keyword}-${key
          .toLowerCase()
          .replace(" ", "-")}`;
        const tailwindColorName = `${keyword}-${key
          .toLowerCase()
          .replace(" ", "-")}`;

        cssVariable[cssColorName] = value["$value"];
        processedData.theme.colors[tailwindColorName] = `var(${cssColorName})`;
      });
  }
});

if (data[SPACING_FIELD]) {
  Object.entries(data[SPACING_FIELD])
    .sort(([keyA], [keyB]) => parseFloat(keyA) - parseFloat(keyB))
    .forEach(([key, value]) => {
      cssName = "--spacing-" + key.replace(",", ".");

      cssVariable[cssName] = `${value["$value"]}px`;
      processedData.theme.spacing[key.replace(",", ".")] = `var(${cssName})`;
    });
}

const formattedVar = Object.entries(cssVariable)
  .map(([key, value]) => `${key}: ${value};`)
  .join("\n");

fs.writeFileSync("cssVar.txt", formattedVar, "utf-8");

fs.writeFileSync(
  "./variableToken.ts",
  "module.exports = " + JSON.stringify(processedData, null, 2),
  "utf-8"
);
console.log(
  "Processing completed successfully. Output written to 'variableToken.ts'."
);
