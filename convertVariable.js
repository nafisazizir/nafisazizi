const fs = require("fs");
const _ = require("lodash");

// Load the exported variables from Figma
const data = require("./variableFigma.json");

// Define the fields that contain colors and their respective Tailwind keywords
const COLOR_FIELDS = {
  white: "white",
  black: "black",
  neutral: "neutral",
  primary: "primary",
  error: "error",
  warning: "warning",
  success: "success",
};

// Define the fields that contain spacing
const SPACING_FIELD = "spacing";

const processedData = {
  theme: {
    colors: {},
    spacing: {},
  },
};

// Process colors
Object.entries(COLOR_FIELDS).forEach(([field, keyword]) => {
  if (data[field]) {
    Object.entries(data[field])
      .sort()
      .forEach(([key, value]) => {
        // Create color name as 'bg-critical', 'border-neutral', 'fg-primary', etc.
        const tailwindColorName = `${keyword}-${key
          .toLowerCase()
          .replace(" ", "-")}`;

        // Map color names to their respective values
        processedData.theme.colors[tailwindColorName] = value["$value"];
      });
  }
});

// Process spacing
if (data[SPACING_FIELD]) {
  Object.entries(data[SPACING_FIELD])
    .sort(([keyA], [keyB]) => parseFloat(keyA) - parseFloat(keyB))
    .forEach(([key, value]) => {
      processedData.theme.spacing[
        key.replace(",", ".")
      ] = `${value["$value"]}px`;
    });
}

fs.writeFileSync(
  "./variableToken.ts",
  "module.exports = " + JSON.stringify(processedData, null, 2),
  "utf-8"
);
console.log(
  "Processing completed successfully. Output written to 'variableToken.ts'."
);
