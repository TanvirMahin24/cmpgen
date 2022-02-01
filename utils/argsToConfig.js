import arg from "arg";

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
    },
    {
      argv: rawArgs.slice(2),
    }
  );

  return {
    index: args["--index"] || defaultConfig.index,
    css: (args["--css"] && args["--css"].toLowerCase()) || defaultConfig.css,
    name: args._[0] || defaultConfig.name,
    dir: `./`,
  };
};

export default argsToConfig;
