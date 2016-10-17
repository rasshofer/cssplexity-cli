#!/usr/bin/env node

var fs = require('fs');
var cssplexity = require('cssplexity');
var argv = require('yargs').argv;
var stdin = require('get-stdin');
var columnify = require('columnify');

var max = parseInt(argv.max, 10) || 0;

function calculateComplexity (str) {
  var results = cssplexity.parse(str);
  if (results) {
    results = results.filter(function (item) {
      return item.complexity > max;
    });
    if (results.length) {
      var columns = columnify(results, {
        columnSplitter: ' | '
      });
      console.log(columns);
    }
    if (argv.max) {
      if (results.length === 1) {
        console.error('1 selector exceeds the maximum complexity of ' + max);
      } else {
        console.error(results.length + ' selectors exceed the maximum complexity of ' + max);
      }
      process.exit(1);
    }
  } else {
    console.error('CSSplexity was not able to find any valid CSS selector.');
    process.exit(1);
  }
}

if (argv._ && argv._.length) {
  fs.readFile(argv._.shift(), 'utf8', function (err, data) {
    if (err) {
      console.error(err);
    } else {
      calculateComplexity(data);
    }
  });
} else {
  stdin().then(calculateComplexity);
}
