<h1 align="center">Fly.io API Client</h1>

<p align="center">
<a href="https://github.com/Filiosoft/fly-api/blob/master/LICENSE"><img src="https://img.shields.io/github/license/Filiosoft/fly-api.svg" alt="GitHub license"></a>
<a href="https://www.npmjs.com/package/@filiosoft/fly"><img src="https://img.shields.io/npm/v/@filiosoft/fly.svg" alt="npm"></a>
<a href="https://travis-ci.com/Filiosoft/fly-api"><img src="https://travis-ci.com/Filiosoft/fly-api.svg?branch=master" alt="Build Status"></a>
<a href="http://commitizen.github.io/cz-cli/"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen friendly"></a>
<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="JavaScript Style Guide"></a>
<a href="https://github.com/semantic-release/semantic-release"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="semantic-release"></a>

</p>
<p align="center"><b>A simple API client for [Fly.io](https://fly.io/docs/api/)</b></p>

## Usage

### Installation

```bash
npm install @filiosoft/fly
```

> This package uses async/await and requires Node.js 7.6

### Use

```javascript
const Fly = require("@filiosoft/fly");

const fly = new Fly("your-access-token");

const hostnames = await fly.getHostnames('name-of-site')
```

You can find the full docs [here](https://filiosoft.org/fly-api/Fly.html).

## License

Copyright © 2018, Filiosoft, LLC. Released under the [MIT License](LICENSE).
