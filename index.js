#!/usr/bin/env node

import {
  createJsFile,
  createIndexFile,
  createCssFile,
  createDir,
} from "./helpers/index.js";
import { argsToConfig, getCssTypePrompt } from "./utils/index.js";

// Valid CSS file types
const validCssTypes = ["scss", "css", "sass"];

// Get Command Line Args
let options = argsToConfig();
if (!validCssTypes.includes(options.css)) {
  options = await getCssTypePrompt(options);
}

// Get Command Execution Path
const dir = `./${options.name}`;

// Create Directory
createDir(options.name, dir);

// Genrate JS File
createJsFile(options.name, dir, options.css);

// Genrate index File
if (options.index) {
  createIndexFile(options.name, dir);
}

// Genrate CSS File
createCssFile(options.name, dir, options.css);
