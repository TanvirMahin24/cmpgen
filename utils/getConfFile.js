import * as fs from "fs";

const getConfFile = (options) => {
  try {
    if (fs.existsSync("config.compgen.json")) {
      const data = fs.readFileSync("config.compgen.json", {
        encoding: "utf8",
        flag: "r",
      });

      return { ...options, ...JSON.parse(data) };
    } else {
      return options;
    }
  } catch (err) {
    return options;
  }
};

export default getConfFile;
