# We are pulling fpm for compatibility with NGINX
FROM php:8.2-fpm-alpine3.17

WORKDIR /var/www/html
 
COPY src .
 
RUN docker-php-ext-install pdo pdo_mysql

RUN chown laravel:laravel /var/www/html
 
RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel
 
USER laravel