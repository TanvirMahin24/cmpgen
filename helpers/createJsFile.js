import * as fs from "fs";
import { createSpinner } from "nanospinner";

const createJsFile = (componentName, dir) => {
  const spinnerJs = createSpinner("JS File Genarating").start();
  fs.writeFile(`${dir}/${componentName}.js`, "", function (err) {
    if (err) {
      spinnerJs.error("JS File Genarating");
      throw err;
    }
    spinnerJs.success("JavaScript Genarated");
  });
};

export default createJsFile;
