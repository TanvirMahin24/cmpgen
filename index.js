#!/usr/bin/env node

import {
  createJsFile,
  createIndexFile,
  createCssFile,
  createDir,
} from "./helpers/index.js";
import { argsToConfig, getCssTypePrompt, getConfFile } from "./utils/index.js";

// Valid CSS file types
const validCssTypes = ["scss", "css", "sass"];

// Get Command Line Args
let options = argsToConfig();
options = getConfFile(options);

// Check valid CSS file type
if (!validCssTypes.includes(options.css)) {
  options = await getCssTypePrompt(options);
}

// Create Directory
createDir(options.name, options.dir);

// Genrate JS File
createJsFile(options.name, options.dir, options.css);

// Genrate index File
if (options.index) {
  createIndexFile(options.name, options.dir);
}

// Genrate CSS File
createCssFile(options.name, options.dir, options.css);
