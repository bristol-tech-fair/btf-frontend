const fs = require('fs');

const name = process.argv[2];

fs.mkdir(`./src/components/${name}`, { recursive: true }, (err) => {
  if (err) throw err;
});

const jsx = `import React from 'react';
import PropTypes from 'prop-types';
import { ${name}Wrapper } from './${name}.styles';

const ${name} = ({ value }) => {
  return (
    <${name}Wrapper>
      <p>{value}</p>
    </${name}Wrapper>
  );
};

${name}.propTypes = {
  value: PropTypes.string.isRequired
};

export default ${name};
`;

const index = `import ${name} from './${name}';

export default ${name};
`;

const test = `import React from 'react';
import { render, screen } from '@testing-library/react';

import ${name} from './${name}';

describe('${name}', () => {
  test('renders ${name} component', () => {
    render(<${name} value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
`;

const styles = `import styled from 'styled-components';

export const ${name}Wrapper = styled.div\`
  padding: var(--small-space);
  border: 0.1rem solid var(--logopink);
\`;
`;

const story = `import React from 'react';
import ${name} from './${name}';

export default {
  title: 'Components/${name}',
  component: ${name}
};

export const HelloWorld = () => <${name} value="Hello world!" />;
`;

// main jsx file
fs.writeFile(
  `./src/components/${process.argv[2]}/${process.argv[2]}.jsx`,
  jsx,
  (err) => {
    if (err) throw err;
  }
);

// index file
fs.writeFile(`./src/components/${process.argv[2]}/index.js`, index, (err) => {
  if (err) throw err;
});

// test file
fs.writeFile(
  `./src/components/${process.argv[2]}/${process.argv[2]}.test.jsx`,
  test,
  (err) => {
    if (err) throw err;
  }
);

// style file
fs.writeFile(
  `./src/components/${process.argv[2]}/${process.argv[2]}.styles.js`,
  styles,
  (err) => {
    if (err) throw err;
  }
);

// story file
fs.writeFile(
  `./src/components/${process.argv[2]}/${process.argv[2]}.stories.jsx`,
  story,
  (err) => {
    if (err) throw err;
  }
);

console.log(`Component files created for ${name}`);
