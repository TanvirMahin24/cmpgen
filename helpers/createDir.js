import * as fs from "fs";
import { createSpinner } from "nanospinner";
import chalk from "chalk";

const createDir = (componentName, dir) => {
  const spinnerDir = createSpinner("Folder Genarating").start();

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    spinnerDir.success("Folder Genarated");
  } else {
    spinnerDir.error("Folder already exist");
    console.log(
      chalk.bgRed(` ${componentName} `) + chalk.red(` directory already exists`)
    );
    process.exit();
  }
};

export default createDir;
