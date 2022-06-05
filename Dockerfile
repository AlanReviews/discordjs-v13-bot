FROM node:18-bullseye

COPY . /app

WORKDIR /app

RUN npm install discord.js \
    && npm install fs \
    && npm install node-fetch

CMD ["node", "index.js"]
