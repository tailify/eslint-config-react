'use strict';

const eslint = require('eslint');

test('should not contain invalid rules', () => {
  const cli = new eslint.CLIEngine({
    configFile: './lib/index.js',
    useEslintrc: false,
  });

  const report = cli.executeOnText('module.exports = {};\n');

  expect(report).toBeTruthy();
  expect(report.errorCount).toBe(0);
  expect(report.warningCount).toBe(0);
});
