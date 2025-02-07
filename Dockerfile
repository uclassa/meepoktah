FROM node:20-alpine AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN npm i -g pnpm
RUN pnpm i --frozen-lockfile

FROM node:20-alpine AS production-dependencies-env
COPY ./package.json pnpm-lock.yaml /app/
WORKDIR /app
RUN npm i -g pnpm
RUN pnpm i --frozen-lockfile -P

FROM node:20-alpine AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN npm i -g pnpm
RUN pnpm run build

FROM node:20-alpine
COPY ./package.json pnpm-lock.yaml /app/
RUN npm i -g pnpm
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
CMD ["pnpm", "run", "start"]