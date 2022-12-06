FROM node:19
COPY ./src ./src
COPY ./public ./public
COPY .babelrc .babelrc
COPY package.json package.json
COPY webpack.config.js webpack.config.js
COPY tsconfig.json tsconfig.json

RUN npm install
RUN npm run build

# TODO config nginx
RUN npm install angular-http-server

CMD ["npx",  "angular-http-server", "--path", "./dist", "-p 3000"]

