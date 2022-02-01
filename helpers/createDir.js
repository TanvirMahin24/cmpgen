import * as fs from "fs";
import { createSpinner } from "nanospinner";
import chalk from "chalk";

const createDir = (componentName, dir) => {
  const spinnerDir = createSpinner("Folder Genarating").start();

  if (!fs.existsSync(`${dir}/${componentName}`)) {
    if (!fs.existsSync(dir)) {
      spinnerDir.error("Folder already exist");
      console.log(
        chalk.bgRed(` ${dir} `) + chalk.red(` directory does not exist!`)
      );
      process.exit();
    }
    fs.mkdirSync(`${dir}/${componentName}`);
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
