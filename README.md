# StarTrekAlien-names

[![Travis](https://img.shields.io/travis/rust-lang/rust.svg?maxAge=2592000)](https://travis-ci.org/btribble/startrek-alien-races.svg?branch=master)
[![MIT License](https://img.shields.io/npm/l/starTrek-alien-names-names.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Get random alien races from Star Trek.

![starTrek-alien-names](other/theQ.gif)

## Installation

This package is distributed via npm:

```
npm install starTrek-alien-names
```

## Usage

```javascript
var names = require('startrek-alien-names');
var allNames = names.all;
var randomName = names.random();
var threeRandomNames = names.random(3);
```
