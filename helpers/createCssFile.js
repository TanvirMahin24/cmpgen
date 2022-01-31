import * as fs from "fs";
import { createSpinner } from "nanospinner";

const createCssFile = (componentName, dir, type) => {
  const spinnerCss = createSpinner(
    `${type.toUpperCase()} File Genaratig`
  ).start();
  fs.writeFile(`${dir}/${componentName}.module.${type}`, "", function (err) {
    if (err) {
      spinnerCss.error(`${type.toUpperCase()} File Genaratig`);
      throw err;
    }
    spinnerCss.success(`${type.toUpperCase()} File Genaratig`);
  });
};

export default createCssFile;
