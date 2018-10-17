FROM node:8.11.4

ADD ./app /opt/app

WORKDIR /opt/app

EXPOSE 9002

RUN echo '{ "allow_root": true }' > /root/.bowerrc

CMD npm install -g nodemon bower && bower install && npm install && npm start