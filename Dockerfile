FROM node:8.11.4

ADD ./app /opt/app

WORKDIR /opt/app

EXPOSE 9002

CMD npm install && npm start