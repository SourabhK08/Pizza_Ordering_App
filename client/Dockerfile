FROM node:18.17.0

WORKDIR /client

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "run","npm","start" ]
