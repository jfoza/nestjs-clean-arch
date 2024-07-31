FROM node:lts-alpine

RUN apk add --no-cache bash

USER root

WORKDIR /var/www/html

RUN npm install -g pnpm @nestjs/cli && \
    pnpm config set registry https://registry.npmjs.org/ && \
    pnpm config set fetch-retries 5 && \
    pnpm config set fetch-retry-mintimeout 30000 && \
    pnpm config set fetch-retry-maxtimeout 60000

COPY ./ ./

RUN pnpm install

CMD sh -c "while true; do sleep 100; done"
