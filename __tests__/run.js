/**
 * Main test runner.
 */
const { Parser } = require('../src/Parser');
const assert = require('assert');

/**
 * List of tests.
 */
const tests = [
  require('./literals-test.js'),
  require('./statement-list-test.js'),
  require('./block-test.js'),
  require('./empty-statement-test.js'),
  require('./math-test.js'),
  require('./assignment-test.js'),
  require('./variable-test.js'),
  require('./if-test.js'),
  require('./relational-test.js'),
  require('./equality-test.js'),
  require('./logical-test.js'),
];

const parser = new Parser();

/**
 * For manual tests.
 */
function exec() {
  let program = `
    class Point {
      def constructor(x, y) {
        this.x = x;
        this.y = y;
      }

      def calc() {
        return this.x + this.y;
      }
    }
  `;

  const ast = parser.parse(program);

  console.log(JSON.stringify(ast, null, 2));
}

// Manual test:
// exec();

/**
 * Test function.
 */
function test(program, expected) {
  const ast = parser.parse(program);
  assert.deepEqual(ast, expected);
}

// Run all tests
tests.forEach(testRun => testRun(test));

console.log('All assertions passed!');
