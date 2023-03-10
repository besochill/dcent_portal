FROM node:16.17-alpine as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN apk add gettext

RUN npm run build --base-href

FROM nginx:latest

COPY --from=build /app/dist/portal /usr/share/nginx/html

EXPOSE 80
