FROM node

WORKDIR /node_app

COPY package.json /node_app

RUN npm install

COPY . /node_app

EXPOSE 3000

CMD ["node", "server.js"]