import { Sandpack } from '@codesandbox/sandpack-react';
import { monokaiPro } from '@codesandbox/sandpack-themes';

interface CodeSandboxProps {
    template: 'react' | 'vue';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    files?: any;
}

const CodeSandbox = ({
    template = 'react',
    files = {},
}: CodeSandboxProps): JSX.Element => (
    <Sandpack
        template={template}
        theme={monokaiPro}
        files={files}
    />
);

export default CodeSandbox;
