const jsTemplate = (component, type) => {
  return `
import React from 'react';
import styles from './${component}.module.${type}';

const ${component} = () => {

    return <div>
    
    </div>;
};
  
export default ${component};
`;
};

export default jsTemplate;
