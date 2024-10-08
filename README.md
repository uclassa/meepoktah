# :sparkles: Official website for UCLA SSA

Hello! Meepoktah is the *best way* to have bak chor mee :yum: 

It is also the 2022 revamp of the [UCLA Singapore Students' Association](https://www.uclassa.org) website. Check it out, learn more about SSA and join us for our events!

The site is a React SPA served by a Node HTTP server, with styling implemented largely using [Styled components](https://styled-components.com/). Event data is hosted on our PostgreSQL database.

## Development setup
Local development is done using [Vite](https://vitejs.dev/).

Make sure you have [node version 18](https://nodejs.org/en/) installed before starting development. 
It is recommended to use [nvm](https://github.com/nvm-sh/nvm) to easily switch between node versions.

.env.template contains the environment variables needed to run the app. Create a .env file in the root directory and fill in the necessary values.

Clone the repository:
```
git clone https://github.com/uclassa/meepoktah
...
cd meepoktah
npm install
```
Use the following command to run the app on your local machine:
```
npm run dev
```

## Deployment

The site is deployed on [Railway](https://railway.app/). Deployment is done automatically when changes are successfully merged to the main branch.

To preview the site locally before deployment, you can run the following commands:
```
npm run build
npm run preview
```

After creating a pull request, you can preview the changes on a temporary deployment on Railway.
