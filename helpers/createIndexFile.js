import * as fs from "fs";
import { createSpinner } from "nanospinner";
import { indexTemplate } from "../templates/index.js";

const createIndexFile = (componentName, dir) => {
  const spinnerIndex = createSpinner("Index File Genarating").start();
  fs.writeFile(`${dir}/index.js`, indexTemplate(componentName), function (err) {
    if (err) {
      spinnerIndex.error("Index File Genaratig");
      throw err;
    }
    spinnerIndex.success("Index Genarated");
  });
};

export default createIndexFile;
