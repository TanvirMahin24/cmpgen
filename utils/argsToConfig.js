import arg from "arg";

const argsToConfig = () => {
  const defaultConfig = {
    name: "NewComponent",
    index: false,
    css: "css",
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
  };
};

export default argsToConfig;
