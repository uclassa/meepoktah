# :sparkles: Official website for UCLA SSA

Hello! Meepoktah is the *best way* to have bak chor mee :yum: 

It is also the 2022 revamp of the [UCLA Singapore Students' Association](www.uclassa.org) website. Check it out, learn more about SSA and join us for our events!

The site is a React SPA served by an Express.js server, with styling implemented largely using [Styled components](https://styled-components.com/). Information about our events is hosted on our MongoDB database. During development, the app uses Nodemon and live-reload to monitor for file changes and refresh the browser when needed.
The site is deployed on [Railway](https://railway.app/), which automatically builds and deploys the app when changes are made to main.

## Development setup
Make sure you have [node](https://nodejs.org/en/) installed before starting. Just download the LTS version for now, but the app currently uses Node version 14, so its recommended to use [nvm](https://github.com/nvm-sh/nvm) to easily switch between node versions.
Also install [git](https://git-scm.com/) if you haven't.

Clone the repository:
```
git clone https://github.com/PierceCCH/meepoktah
...
cd meepoktah
npm install
```
Use the following command to run the app on your local machine:
```
npm run dev
```
View the frontend on **localhost:8080**, **not** localhost:1234.
To allow the server to fetch data from the MongoDB database, insert the provided **.env** file into the **root** folder.

## Contribution workflow
### :sunglasses: Here are the steps to make changes to the site:
1. Follow the steps in Development Setup.
2. Create a new branch and check it out using ` git checkout`.
3. Make some changes!
4. Ensure that the app builds successfully with `npm run build`.
5. Stage, commit and push your changes to github.
6. Create a new pull request with your changes.
7. Once your code passes code review, it will be merged into main and you can now safely delete your branch.

