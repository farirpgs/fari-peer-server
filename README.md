# fari-peer-server

The repo contains the code for the Fari Peer Server.

## Development

If you want to make a contribution to Fari Peer Server, you will need to clone this repo and follow the following steps to run the app locally.

### Prerequisites

- Install Node `^12.16.3` (to match engine property in `package.json`)
- Install Yarn by running `npm install -g yarn`

### Installation

- Run `yarn install`

### Running the application

Run `yarn start` and then the app should be running on http://localhost:9000

## Deployment

Deployment is done using Heroku Pipelines

| Env        | Heroku                                                     | Domain                                          |
| ---------- | ---------------------------------------------------------- | ----------------------------------------------- |
| Staging    | https://dashboard.heroku.com/apps/fari-peer-server-staging | https://fari-peer-server-staging.herokuapp.com/ |
| Production | https://dashboard.heroku.com/apps/fari-peer-server         | https://fari-peer-server.herokuapp.com/         |
