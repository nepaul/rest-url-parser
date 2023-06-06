<p align="center">
  <a href="https://github.com/nepaul/rest-url-parser">
    <img src="./assets/logo.png" width="256" alt="Rest URL Parser" />
  </a>
</p>

# Rest URL Parser

[![license](https://img.shields.io/github/license/nepaul/rest-url-parser)](https://github.com/nepaul/rest-url-parser)
[![npm](https://img.shields.io/npm/v/@nepaul/rest-url-parser)](https://www.npmjs.com/package/@nepaul/rest-url-parser)

This JavaScript module exports a function called `parseRequestURL()`. It handles URLs that contain parameters.

## Table of Contents

- [Rest URL Parser](#rest-url-parser)
  - [Table of Contents](#table-of-contents)
  - [Background](#background)
  - [Get Started](#get-started)
    - [Install](#install)
  - [Usage](#usage)
  - [API](#api)
  - [Contributing](#contributing)
  - [License](#license)

## Background

This module was created to simplify the handling of URLs that contain parameters. It's particularly useful for applications that deal with REST APIs where resource identifiers are embedded in the URL.

## Get Started

This module provides an easy way to parse URL parameters in a standard way across your JavaScript or TypeScript project.

### Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Please install them first.

```sh
npm install  @nepaul/rest-url-parser
```

## Usage

```javascript
import parseRequestURL from '@nepaul/rest-url-parser';

let sourceConfig = {
  url: '/user/:userId/post/:postId',
  params: {
    userId: '123',
    postId: '456',
  },
};

let result = parseRequestURL(sourceConfig);

console.log(result);
```

Use with Axios:

```javascript
import { parseRequestURL } from '@nepaul/rest-url-parser';

const instance = axios.create(appConfig.httpClient);

const requestInterceptor = instance.interceptors.request.use(
  function (config) {
    const restConfig = parseRequestURL(config);
    return restConfig;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.post('/user/:userId/post/:postId', {
  userId: '123',
  postId: '456',
});
```

## API

**parseRequestURL(sourceConfig)**

This function takes a `sourceConfig` object and parses the `url` property for parameters. It returns the updated `sourceConfig`.

```javascript
parseRequestURL(sourceConfig);
```

## Contributing

You are very welcome to join us! Submit an issue or submit a pull request.

## License

[MIT](https://opensource.org/licenses/MIT)