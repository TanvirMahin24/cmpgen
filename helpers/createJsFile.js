import * as fs from "fs";
import { createSpinner } from "nanospinner";
import { jsTemplate } from "../templates/index.js";

const createJsFile = (componentName, dir) => {
  const spinnerJs = createSpinner("JS File Genarating").start();
  fs.writeFile(
    `${dir}/${componentName}.js`,
    jsTemplate(componentName),
    function (err) {
      if (err) {
        spinnerJs.error("JS File Genarating");
        throw err;
      }
      spinnerJs.success("JavaScript Genarated");
    }
  );
};

export default createJsFile;
