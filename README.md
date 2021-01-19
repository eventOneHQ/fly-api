# PROJECT DEPRECATED

As of 2020-01-19, this project is deprecated. eventOne no longer uses [Fly.io](https://fly.io) so this project hasn't been maintained for over a year. If you would like to take over maintenance of it, please email opensource@event1.io. 

<hr>
<br>
<h1 align="center">Fly.io API Client</h1>

<p align="center">
<a href="https://github.com/eventOneHQ/fly-api/blob/master/LICENSE"><img src="https://img.shields.io/github/license/eventOneHQ/fly-api.svg" alt="GitHub license"></a>
<a href="https://www.npmjs.com/package/@eventonehq/fly"><img src="https://img.shields.io/npm/v/@eventonehq/fly.svg" alt="npm"></a>
<a href="https://travis-ci.com/eventOneHQ/fly-api"><img src="https://travis-ci.com/eventOneHQ/fly-api.svg?branch=develop" alt="Build Status"></a>
<a href="http://commitizen.github.io/cz-cli/"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen friendly"></a>
<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="JavaScript Style Guide"></a>
<a href="https://github.com/semantic-release/semantic-release"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="semantic-release"></a>

</p>
<p align="center"><b>🎈 A simple API client for <a href="https://fly.io/docs/api/">Fly.io</a></b></p>

## Usage

### Installation

```bash
npm install @eventonehq/fly
```

> This package uses async/await and requires Node.js 7.6

### Use

```javascript
const { Fly } = require('@eventonehq/fly')

const fly = new Fly('your-access-token')

const hostnames = await fly.getHostnames('name-of-site')
```

You can find the full docs [here](https://oss.eventone.page/fly-api/).

## License

Copyright © 2019, eventOne, Inc. Released under the [MIT License](https://github.com/eventOneHQ/fly-api/blob/develop/LICENSE).
