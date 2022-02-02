import arg from "arg";
import chalk from "chalk";

const argsToConfig = () => {
  let defaultConfig = {
    name: "NewComponent",
    index: false,
    css: "css",
    dir: "./NewComponent",
  };

  const rawArgs = process.argv;
  const args = arg(
    {
      "--index": Boolean,
      "--css": String,
      "-i": "--index",
      "-c": "--css",
      "--help": Boolean,
      "-h": "--help",
      "--version": Boolean,
      "-v": "--version",
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  if (args["--help"]) {
    console.log(chalk.bgBlack("Usage:"));
    console.log("compgen <new-component> [options]");
    console.log(chalk.green("Options:"));
    console.log(
      "  -i, --index     Generate index.js file with component" +
        chalk.blue("(default: false)")
    );
    console.log(
      "  -c, --css       Generate css file valid options: css, scss, sass" +
        chalk.blue("(default: css)")
    );
    console.log("  -h, --help      Show help");
    process.exit(0);
  }
  if (args["--version"]) {
    console.log(chalk.green("Version:") + " 0.0.1");

    process.exit(0);
  }

  return {
    index: args["--index"] || defaultConfig.index,
    css: (args["--css"] && args["--css"].toLowerCase()) || defaultConfig.css,
    name: args._[0] || defaultConfig.name,
    dir: `./`,
  };
};

export default argsToConfig;
