# We are pulling fpm for compatibility with NGINX
FROM php:8.2-fpm-alpine3.17

WORKDIR /var/www/html

# Command to install stuff in the workdir
RUN docker-php-ext-install pdo pdo_mysql