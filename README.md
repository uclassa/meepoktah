# :sparkles: Official website for UCLA SSA

Hello! Meepoktah is the *best way* to have bak chor mee :yum: 

It is also the 2022 revamp of the [UCLA Singapore Students' Association](www.uclassa.org) website. Check it out, learn more about SSA and join us for our events!

The site is a React SPA served by an Express.js server, with styling implemented largely using [Styled components](https://styled-components.com/). Information about our events is hosted on our MongoDB database. During development, the app uses Nodemon and live-reload to monitor for file changes and refresh the browser when needed.
The site is deployed on [Railway](https://railway.app/).

## Development setup
Make sure you have [node version 16](https://nodejs.org/en/) installed before starting development. 
It is recommended to use [nvm](https://github.com/nvm-sh/nvm) to easily switch between node versions.

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
View the frontend on **localhost:8080**, **not** localhost:1234.
For the server to fetch data from the MongoDB database, insert the provided **.env** file into the **root** folder.
