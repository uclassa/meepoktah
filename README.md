# :sparkles: Official website for UCLA SSA

Hello! Meepoktah is the _best way_ to have bak chor mee :yum:

It is also the 2022 revamp of the [UCLA Singapore Students' Association](https://www.uclassa.org) website. Check it out, learn more about SSA and join us for our events!

The site is a full-stack app built using [React Router 7](https://reactrouter.com/), with styling largely implemented using [TailwindCSS](https://tailwindcss.com/). Event data is hosted on our PostgreSQL database.

## Development setup

Make sure you have [node version 20](https://nodejs.org/en/) installed before starting development.
It is recommended to use [nvm](https://github.com/nvm-sh/nvm) to easily switch between node versions.
The package manager used in this project is [pnpm](https://pnpm.io/). Install it if you haven't:

```
npm install -g pnpm
```

`.env.template` contains the environment variables needed to run the app. Create a `.env` file in the root directory and fill in the necessary values.

Clone the repository:

```
git clone https://github.com/uclassa/meepoktah
...
cd meepoktah
pnpm install
```

Use the following command to run the app on your local machine:

```
pnpm run dev
```

## Deployment

The site is deployed on [Railway](https://railway.app/). Deployment is done automatically when changes are successfully merged to the main branch.

To create a production build, you can run the following commands. Note that the production build does not read the .env file:

```
pnpm run build
pnpm run start
```

After creating a pull request, you can preview the changes on a temporary deployment on Railway.
