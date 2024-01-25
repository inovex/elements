const { spawnSync } = require('child_process');

function executeCommand(command, args, workingDirectory = '.') {
    const startTime = new Date().getTime();

    console.log(`Starting ${command} in ${workingDirectory}`);
    const result = spawnSync(command, args, {
        stdio: 'inherit',
        cwd: workingDirectory,
        shell: true
    });

    const endTime = new Date().getTime();
    const executionTime = endTime - startTime; // Execution time in ms

    console.log(`${command} completed in ${executionTime} ms\n`);

    return result;
}

function main() {
    // Stencil unit tests
    executeCommand('yarn', ['stencil', 'test', '--spec'], 'packages/elements');

    // Playwright tests for test-app-e2e
    executeCommand('npx', ['playwright', 'test', '--config=playwright.config.ts'], 'packages/test-app-e2e');

    // Playwright tests for elements-react-screenshot-e2e
    executeCommand('npx', ['playwright', 'test', '--config=playwright.config.ts'], 'packages/elements-react-screenshot-e2e');
}

main();
