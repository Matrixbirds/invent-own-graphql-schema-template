'use strict'

class Parser {
  constructor(input, properties) {
    this._pattern = /\${([^}]+)?}/g;
    this._lexcials = {};
    this._properties = properties || {};
    this._input = input;
    this._output = input;
  }

  lex() {
    let match;
    while ( match = this._pattern.exec(this._input) ) {
      this._lexcials[match[1]] = match[0];
    }
  }

  parser() {
    for (let [symbol, value] of Object.entries(this._lexcials)) {
      this._output = this._output.replace(value, this._properties[symbol]);
    }
    return this._output;
  }
}

module.exports = Parser;




