const indexTemplate = (component) => {
  return `
        import ${component} from './${component}';

        export {${component}};
    `;
};
