import * as fs from "fs";
import { createSpinner } from "nanospinner";

const createIndexFile = (dir) => {
  const spinnerIndex = createSpinner("Index File Genarating").start();
  fs.writeFile(`${dir}/index.js`, "", function (err) {
    if (err) {
      spinnerIndex.error("Index File Genaratig");
      throw err;
    }
    spinnerIndex.success("Index Genarated");
  });
};

export default createIndexFile;
