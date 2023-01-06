/**
 * Tokenizer spec.
 */
const Spec = [
  // -----------------------------------------------
  // Whitespace:
  [/^\s+/, null],

  // -----------------------------------------------
  // Comments:

  // Skip single-line comments:
  [/^\/\/.*/, null],

  // Skip multi-line comments:
  [/^\/\*[\s\S]*?\*\//, null],

  // -----------------------------------------------
  // Numbers:
  [/^\d+/, 'NUMBER'],

  // -----------------------------------------------
  // Strings:
  [/^"[^"]*"/, 'STRING'],
  [/^'[^']*'/, 'STRING'],
]

/**
 * Tokenizer class.
 *
 * Lazily pulls a token from a stream.
 */
class Tokenizer {
  /**
   * Initializes the string.
   */
  init(string) {
    this._string = string
    this._cursor = 0
  }

  /**
   * Whether the tokenizer reached EOF.
   */
  isEOF() {
    return this._cursor === this._string.length
  }

  /**
   * Whether we still have more tokens
   */
  hasMoreTokens() {
    return this._cursor < this._string.length
  }

  /**
   * Obtains next tokens.
   */
  getNextToken() {
    if (!this.hasMoreTokens()) {
      return null
    }

    const string = this._string.slice(this._cursor)

    for (const [regexp, tokenType] of Spec) {
      const tokenValue = this._match(regexp, string)

      // Can't match this rule, continue
      if (tokenValue == null) {
        continue
      }

      // Should skip token, e.g. whitespace.
      if (tokenType == null) {
        return this.getNextToken()
      }

      return {
        type: tokenType,
        value: tokenValue,
      }
    }

    throw new SyntaxError(`Unexpected token: "${string[0]}"`)
  }

  /**
   * Matches a token for a regular expression.
   */
  _match(regexp, string) {
    const matched = regexp.exec(string)
    if (matched == null) {
      return null
    }
    this._cursor += matched[0].length
    return matched[0]
  }
}

module.exports = {
  Tokenizer,
}
