import * as fs from "fs";
import { createSpinner } from "nanospinner";

const createCssFile = (componentName, dir) => {
  const spinnerCss = createSpinner("CSS File Genarating").start();
  fs.writeFile(`${dir}/${componentName}.module.css`, "", function (err) {
    if (err) {
      spinnerCss.error("CSS File Genaratig");
      throw err;
    }
    spinnerCss.success("CSS Genarated");
  });
};

export default createCssFile;
