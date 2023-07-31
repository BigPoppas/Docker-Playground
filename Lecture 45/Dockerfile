FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 80

# To create anonymous volumes, however in our case we need with a volume with name because we need persistence!!
# VOLUME ["/app/feedback"]

CMD ["node", "server.js"]