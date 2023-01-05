# Agenda: parser implementation

> Build a Recursive-descent parser for a full programming similar to JavaScript.

- Tokenizer module: regular expressions
- Parsing module
- AST - Abstract Syntax Trees
- Predictive parser
- **Recursive decent** parser
- Syntax: language-agnostic parser generator
- Left recursion
- Simple expressions: numbers and strings
- Variable declarations
- Blocks
- Group expression

- Binary operators
- Logical operators
- Branches: if-else-expression
- Loops: while-loop, for-loop
- Functions declaration parsing
- Lambda: anonymous closures
- Operator precedence
- Parsing classes and modules
- Property access
- Function calls

# Version Log

<h3>
	<a href="https://github.com/lt502676921/recursive-descent-parser/tree/v2">Version 2<a>
</h3>
##### Parser module (Syntactic analysis)

- The Program function (The main entry point of the Parser class) will be of its own type - the "Program" - which will contain the "body".
- Support strings.

##### Tokenizer module (Lexical analysis)

- the purpose of the tokenizer is exactly to extract stream of tokens of different types.
- Finite state machine
  - Implement the manual state machine, right we're entering some state: either the NUMBER state and then spin in the loop for the numbers, or we enter the STRING state and spin in the loop for the strings.

<h3>
	<a href="https://github.com/lt502676921/recursive-descent-parser/tree/v1">Version 1<a>
</h3>
##### Parser module (Syntactic analysis)

- Accept a string and return an AST (Abstract Syntax Tree).
- Support only numbers.
- Support only a single number.
