/**
 * Main test runner.
 */
const { Parser } = require('../src/Parser')

const parser = new Parser()

let program = `
  /**
   * document example:
   */
  "hello";;

  // Number:
  34;

  {
    34;
  }

  32+34*2;

  (2+3)*2;

  3+(8+2);

  4+5-6;
`

program = `
  {
    3 + (8 + 2);

    {
      1 + 2;
    }
  }
`

program = `
  (2 + 3) * 4;
`

const ast = parser.parse(program)

console.log(JSON.stringify(ast, null, 2))
