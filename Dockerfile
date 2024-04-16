FROM --platform=linux/arm64 debian:stable-slim

RUN apt update && apt upgrade
RUN apt-get -y install nginx

COPY . /var/www/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]