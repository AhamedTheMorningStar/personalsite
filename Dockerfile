FROM node:alpine3.17

RUN mkdir -p /home/app

COPY . /home/app

ENV DIRPATH=/home/app

WORKDIR $DIRPATH

EXPOSE 3000

CMD [ "npm", "start" ]