FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["sh", "-c", "npx knex migrate:latest && npx knex seed:run && npm start"]