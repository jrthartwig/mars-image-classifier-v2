FROM node:latest
WORKDIR /app
COPY . .
RUN npm install -g nodemon
RUN npm install
RUN npm run build
CMD [ "node", "index.js"]