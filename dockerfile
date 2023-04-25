FROM node:alpine
WORKDIR /app
COPY package.json /app
RUN yarn
COPY . .
RUN yarn build
EXPOSE 4000
