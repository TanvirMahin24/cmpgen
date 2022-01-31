const jsTemplate = (component) => {
  return `
import React from 'react';
import styles from './${component}.module.css';

const ${component} = () => {

    return <div>
    
    </div>;
};
  
export default ${component};
`;
};

export default jsTemplate;
