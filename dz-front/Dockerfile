# TODO: REWRITE ASAP
FROM nginx

# update 
RUN apt-get update -y
# install curl 
RUN apt-get install curl -y
# get install script and pass it to execute: 
# and install node 
# RUN apt-get install nodejs -y
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - 
RUN apt-get install -y nodejs

# ADD ./nginx/nginx.conf /etc/nginx/conf.d/
# RUN [ ! -e file ] || rm /etc/nginx/conf.d/default.conf

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d

RUN mkdir -p /static
WORKDIR /static

COPY public public/
ADD package.json ./

RUN npm install