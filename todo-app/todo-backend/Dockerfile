FROM node:16
  
WORKDIR /usr/src/app

EXPOSE 3000
ENV PORT=3000

COPY --chown=node:node . .

RUN npm ci 
  
USER node

CMD npm start