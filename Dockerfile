FROM node:18-alpine

COPY package.json package.json
COPY index.js index.js

EXPOSE 9090
CMD [ "node", "index.js" ]