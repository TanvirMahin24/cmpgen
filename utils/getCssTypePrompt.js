import inquirer from "inquirer";

const getCssTypePrompt = async (options) => {
  const { css } = options;
  const cssTypes = ["scss", "css", "sass"];
  const cssTypePrompt = {
    type: "list",
    name: "css",
    message: "What CSS file type do you want to use?",
    choices: cssTypes,
    default: css,
  };
  let answer = await inquirer.prompt(cssTypePrompt);
  return {
    ...options,
    css: answer.css,
  };
};

export default getCssTypePrompt;
