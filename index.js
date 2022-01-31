#!/usr/bin/env node

import chalkAnimation from "chalk-animation";
import {
  createJsFile,
  createIndexFile,
  createCssFile,
  createDir,
} from "./helpers/index.js";

const rainbowTitle = chalkAnimation.rainbow(
  "Your React Component is genarating\n"
);

// Get Command Line Args
const componentName = process.argv.slice(2)[0];

// Get Command Execution Path
const executionPath = process.cwd();
const dir = `./${componentName}`;

// Create Directory
createDir(componentName, dir);

// Genrate JS File
createJsFile(componentName, dir);

// Genrate CSS File
createCssFile(componentName, dir);

// Genrate index File
createIndexFile(componentName, dir);

rainbowTitle.stop();
