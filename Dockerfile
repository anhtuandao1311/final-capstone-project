FROM node:21-alpine

EXPOSE 5173
 
WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD [ "npm" , "run" , "dev" ]