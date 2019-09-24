# Mock-teryx System Design - Product Component

> Inherited a front-end replica of www.arcteryx.com, and developed an optimized system design to handle 10M database entries. The implemented system design generates and seeds 10M entries within 10 minutes, and returns a query response in 6ms. When deployed to an EC2 instance, the design reaches 1200 RPS, 65ms latency, with 0.0% error rate using a Round Robin load balancing method between two remote servers.


## Legacy Code 

  - [Front-end Arc'teryx Replica](https://github.com/pump-squad/Amanda-Modules.git)

## Related Components Developed By The Team 

  - [Navigation Bar (version 1)](https://github.com/caffeine-dependency/nav-bar-jj.git)
  - [Navigation Bar (version 2)](https://github.com/caffeine-dependency/smooth-jazzy.git)
  - [Product Specs](https://github.com/caffeine-dependency/ProductTechnicalSpecs.git)

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

### Seeding the database

Create a psql database
```sh
CREATE DATABASE product;
```

Create a token file to enter psql credentials

```sh
cd component-kristina/database-postgresql
touch postgresql-token.js
vim postgresql-token.js
```

Edit file to export an object with psql credentials

```sh
const username = 'FILL_ME_IN';
const password = 'FILL_ME_IN';
const host = 'FILL_ME_IN';
module.exports = { username, password, host };
```

Start server
```sh
npm start
```

Generate and save 10M entries to CSV files

```sh
npm run generate-seed:sql
```

Seed database with all 10M entries

```sh
npm run seed:sql
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```