'use strict';
const Parser = require('./parser');
let u = new Parser("${name} hoooo", {name: 'm'});
u.lex();
console.log('parser', u.parser());
