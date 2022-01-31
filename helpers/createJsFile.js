import * as fs from "fs";
import { createSpinner } from "nanospinner";
import { jsTemplate } from "../templates/index.js";

const createJsFile = (componentName, dir, type) => {
  const spinnerJs = createSpinner("JavaScript File Genarating").start();
  fs.writeFile(
    `${dir}/${componentName}.js`,
    jsTemplate(componentName, type),
    function (err) {
      if (err) {
        spinnerJs.error("JavaScript File Genarating");
        throw err;
      }
      spinnerJs.success("JavaScript Genarated");
    }
  );
};

export default createJsFile;
