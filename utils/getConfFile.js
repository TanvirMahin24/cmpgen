import * as fs from "fs";

const getConfFile = (options) => {
  const data = fs.readFileSync("config.compgen.json", {
    encoding: "utf8",
    flag: "r",
  });
  return { ...options, ...JSON.parse(data) };
};

export default getConfFile;
