import * as fs from "fs";

const getConfFile = (options) => {
  try {
    if (fs.existsSync("config.cmpgen.json")) {
      const data = fs.readFileSync("config.cmpgen.json", {
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
