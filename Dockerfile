FROM node:16.15.1 as build

WORKDIR /ribera

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.21.1-alpine

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /ribera/build /usr/share/nginx/html