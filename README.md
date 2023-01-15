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

---

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
	<a href="https://github.com/lt502676921/recursive-descent-parser/tree/v7">Version 7<a>
</h3>

#### Parser module (Syntactic analysis)

- **Assignment Expression**
  - Identifiers: variable names
  - Chained assignment
  - Left-hand side expression
- **Variable Statement**
  - Variable statement
  - Keyword tokens
  - Variable declarations
  - Name and optional Initializer

#### Tokenizer module (Lexical analysis)

- **Regular Expressions**
  - Support more Symbols and Delimiters
  - Support Keywords: let
  - Support Assignment operators: =
  - Support Identifiers

<h3>
	<a href="https://github.com/lt502676921/recursive-descent-parser/tree/v6">Version 6<a>
</h3>

TDD: Test-driven development

<h3>
	<a href="https://github.com/lt502676921/recursive-descent-parser/tree/v5">Version 5<a>
</h3>

#### Parser module (Syntactic analysis)

- Binary expressions
- Additive expression
- Multiplicative expression
- Primary expression
- Operator precedence
- Parenthesized expression

#### Tokenizer module (Lexical analysis)

Regular Expressions

- Support more Symbols and Delimiters
- Support Math operators: +, -, \*, /

<h3>
	<a href="https://github.com/lt502676921/recursive-descent-parser/tree/v4">Version 4<a>
</h3>

#### Parser module (Syntactic analysis)

Begin to consider about the Program structures

- Support for handling multiple expressions or multiple statements
- Semicolon separate expressions, every expression will be ExpressionStatement
- Statements and Statement list
- Block statement
- Empty statement
- Nested scopes
- Left-recursion
- Recursion-to-loop conversion to handle left-recursive grammars

#### Tokenizer module (Lexical analysis)

Regular Expressions

- Support more Symbols and Delimiters

<h3>
	<a href="https://github.com/lt502676921/recursive-descent-parser/tree/v3">Version 3<a>
</h3>

#### Tokenizer module (Lexical analysis)

> Specification-based tokenizer

- Tokenizers as Finite state machines
- Refactor the Tokenizer, make it based on the Regular Expressions
- Tokenizer spec: **Regular Expressions notation**
- Generic getNextToken
- Skip token: Whitespace, Single-line and Multi-line comments

#### Parser module (Syntactic analysis)

- Handle the single expression: its's either number or a string

<h3>
	<a href="https://github.com/lt502676921/recursive-descent-parser/tree/v2">Version 2<a>
</h3>

#### Parser module (Syntactic analysis)

- The Program function (The main entry point of the Parser class) will be of its own type - the "Program" - which will contain the "body".
- Support strings.

#### Tokenizer module (Lexical analysis)

- the purpose of the tokenizer is exactly to extract stream of tokens of different types.
- Finite state machine
  - Implement the manual state machine, right we're entering some state: either the NUMBER state and then spin in the loop for the numbers, or we enter the STRING state and spin in the loop for the strings.

<h3>
	<a href="https://github.com/lt502676921/recursive-descent-parser/tree/v1">Version 1<a>
</h3>

#### Parser module (Syntactic analysis)

- Accept a string and return an AST (Abstract Syntax Tree).
- Support only numbers (only a single number).
