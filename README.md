# CSSplexity CLI

> A simple CLI tool to calculate the cyclomatic complexity of CSS selectors based on CSSplexity

[![Build Status](https://travis-ci.org/rasshofer/cssplexity-cli.svg)](https://travis-ci.org/rasshofer/cssplexity-cli)
[![Dependency Status](https://david-dm.org/rasshofer/cssplexity-cli/status.svg)](https://david-dm.org/rasshofer/cssplexity-cli)
[![Dependency Status](https://david-dm.org/rasshofer/cssplexity-cli/dev-status.svg)](https://david-dm.org/rasshofer/cssplexity-cli)

## Installation

```shell
npm install -g cssplexity-cli
```

## Usage

```shell
curl -s http://example.com/main.css | cssplexity
```

```shell
cssplexity main.css
```

Using the parameter `max`, you’re able to specify a maximum complexity. In case this limit is exceeded, CSSplexity CLI will exit the process with `1`. This benefits integration into build/CI systems like Jenkins or Travis.

```shell
cssplexity --max=5 main.css
```

## Changelog

* 0.0.2
  * Add tests
* 0.0.1
  * Initial version

## License

Copyright (c) 2016 [Thomas Rasshofer](http://thomasrasshofer.com/)
Licensed under the MIT license.

See LICENSE for more info.
